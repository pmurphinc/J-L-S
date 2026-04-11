import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn(async () => true),
}));

describe("contact.submitIntake", () => {
  it("should submit intake form and return success", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.contact.submitIntake({
      fullName: "John Smith",
      email: "john@example.com",
      phone: "(916) 555-0123",
      serviceType: "legal-document-preparation",
      description: "I need help preparing divorce documents.",
    });

    expect(result).toEqual({
      success: true,
      message: "Your request has been received. We will be in touch within 1-2 business days.",
    });
  });

  it("should validate required fields", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.contact.submitIntake({
        fullName: "",
        email: "john@example.com",
        phone: "(916) 555-0123",
        serviceType: "legal-document-preparation",
        description: "I need help preparing divorce documents.",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Name required");
    }
  });

  it("should validate email format", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.contact.submitIntake({
        fullName: "John Smith",
        email: "invalid-email",
        phone: "(916) 555-0123",
        serviceType: "legal-document-preparation",
        description: "I need help preparing divorce documents.",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Valid email required");
    }
  });
});
