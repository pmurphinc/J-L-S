import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createSubmission, getSubmissionById, updateSubmission, getAllSubmissions } from "./db";
import { storagePut } from "./storage";
import { invokeLLM } from "./_core/llm";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  submissions: router({
    create: publicProcedure
      .input(
        z.object({
          clientName: z.string().min(1, "Name required"),
          clientEmail: z.string().email("Valid email required"),
          clientPhone: z.string().min(10, "Valid phone required"),
          serviceType: z.string().min(1, "Service type required"),
          description: z.string().min(10, "Description required"),
          fileBase64: z.string().optional(),
          fileName: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          let uploadedFileUrl: string | undefined;
          let uploadedFileKey: string | undefined;

          if (input.fileBase64 && input.fileName) {
            const buffer = Buffer.from(input.fileBase64, "base64");
            const fileKey = `submissions/${Date.now()}-${input.fileName}`;
            const result = await storagePut(fileKey, buffer, "application/pdf");
            uploadedFileUrl = result.url;
            uploadedFileKey = result.key;
          }

          const submission = await createSubmission({
            clientName: input.clientName,
            clientEmail: input.clientEmail,
            clientPhone: input.clientPhone,
            serviceType: input.serviceType,
            description: input.description,
            uploadedFileUrl,
            uploadedFileKey,
            status: "pending",
            paymentStatus: "unpaid",
          });

          return {
            success: true,
            submissionId: submission.submissionId,
          };
        } catch (error) {
          console.error("[Submissions] Create failed:", error);
          throw new Error("Failed to create submission");
        }
      }),

    getById: publicProcedure
      .input(z.object({ submissionId: z.string() }))
      .query(async ({ input }) => {
        return await getSubmissionById(input.submissionId);
      }),

    updatePayment: publicProcedure
      .input(
        z.object({
          submissionId: z.string(),
          paymentMethod: z.enum(["stripe", "venmo", "manual"]),
          stripePaymentIntentId: z.string().optional(),
          amountPaid: z.number().int().positive(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const submission = await updateSubmission(input.submissionId, {
            paymentStatus: "paid",
            paymentMethod: input.paymentMethod,
            stripePaymentIntentId: input.stripePaymentIntentId,
            amountPaid: input.amountPaid,
            status: "processing",
          });

          return {
            success: true,
            submission,
          };
        } catch (error) {
          console.error("[Submissions] Update payment failed:", error);
          throw new Error("Failed to update payment status");
        }
      }),

    processDocument: publicProcedure
      .input(z.object({ submissionId: z.string() }))
      .mutation(async ({ input }) => {
        try {
          const submission = await getSubmissionById(input.submissionId);
          if (!submission) throw new Error("Submission not found");
          if (!submission.uploadedFileUrl) throw new Error("No file uploaded");

          const ocrText = "[OCR text would go here - extracted from uploaded document]";

          const draftResponse = await invokeLLM({
            messages: [
              {
                role: "system",
                content: "You are a legal document assistant. Draft a professional legal document based on the provided information.",
              },
              {
                role: "user",
                content: `Service Type: ${submission.serviceType}\n\nClient Description: ${submission.description}\n\nExtracted Text:\n${ocrText}`,
              },
            ],
          });

          let draftedDocument = "Draft generation failed";
          const messageContent = draftResponse.choices[0]?.message.content;
          if (typeof messageContent === "string") {
            draftedDocument = messageContent;
          }

          const draftKey = `drafts/${submission.submissionId}-draft.txt`;
          const draftResult = await storagePut(draftKey, draftedDocument, "text/plain");

          const updated = await updateSubmission(input.submissionId, {
            ocrText,
            draftedDocument,
            draftedFileUrl: draftResult.url,
            draftedFileKey: draftResult.key,
            status: "completed",
          });

          return {
            success: true,
            submission: updated,
          };
        } catch (error) {
          console.error("[Submissions] Process document failed:", error);
          await updateSubmission(input.submissionId, {
            status: "failed",
            processingNotes: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
          });
          throw error;
        }
      }),

    listAll: publicProcedure.query(async () => {
      return await getAllSubmissions();
    }),
  }),
});

export type AppRouter = typeof appRouter;
