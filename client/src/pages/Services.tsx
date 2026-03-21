import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { FileText, Stamp, Briefcase, Users, Upload, Loader2, CheckCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462787524/Cz8sWUSTaWsiTX5qvA7ov6/services-bg-iF9Hwbup8XudBk7PD6NxwG.webp";

const services = [
  {
    icon: FileText,
    title: "Legal Document Preparation",
    desc: "Accurate, professionally prepared legal documents for a wide range of personal and civil matters — drafted to your specifications.",
  },
  {
    icon: Stamp,
    title: "Court Filing Assistance",
    desc: "Guidance and support in organizing and preparing documents for submission to the appropriate court or agency.",
  },
  {
    icon: Briefcase,
    title: "Administrative Legal Support",
    desc: "Comprehensive administrative assistance for document management, correspondence preparation, and procedural compliance.",
  },
  {
    icon: Users,
    title: "Attorney Support Services",
    desc: "Reliable document preparation support for legal professionals, helping streamline caseload and reduce administrative burden.",
  },
];

const uploadFormSchema = z.object({
  clientName: z.string().min(1, "Name required"),
  clientEmail: z.string().email("Valid email required"),
  clientPhone: z.string().min(10, "Valid phone required"),
  serviceType: z.string().min(1, "Service type required"),
  description: z.string().min(10, "Description required"),
});

type UploadFormData = z.infer<typeof uploadFormSchema>;

export default function Services() {
  const [file, setFile] = useState<File | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "venmo" | "manual">("stripe");

  const createSubmissionMutation = trpc.submissions.create.useMutation();
  const updatePaymentMutation = trpc.submissions.updatePayment.useMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UploadFormData>({
    resolver: zodResolver(uploadFormSchema),
  });

  const onSubmit = async (data: UploadFormData) => {
    try {
      let fileBase64: string | undefined;
      let fileName: string | undefined;

      if (file) {
        const reader = new FileReader();
        fileBase64 = await new Promise((resolve) => {
          reader.onload = () => {
            const result = reader.result as string;
            resolve(result.split(",")[1]);
          };
          reader.readAsDataURL(file);
        });
        fileName = file.name;
      }

      const result = await createSubmissionMutation.mutateAsync({
        ...data,
        fileBase64,
        fileName,
      });

      setSubmissionId(result.submissionId);
      setShowPayment(true);
      toast.success("Document uploaded successfully!");
      reset();
      setFile(null);
    } catch (error) {
      toast.error("Failed to upload document. Please try again.");
      console.error(error);
    }
  };

  const handlePayment = async () => {
    if (!submissionId) return;

    try {
      const amount = 9999;

      if (paymentMethod === "stripe") {
        toast.info("Stripe integration coming soon. Please contact us for payment.");
      } else if (paymentMethod === "venmo") {
        toast.info("Please send payment via Venmo with submission ID: " + submissionId);
        await updatePaymentMutation.mutateAsync({
          submissionId,
          paymentMethod: "venmo",
          amountPaid: amount,
        });
      } else {
        toast.info("Please contact us to arrange payment. Submission ID: " + submissionId);
      }

      setShowPayment(false);
      setSubmissionId(null);
    } catch (error) {
      toast.error("Payment processing failed.");
      console.error(error);
    }
  };

  if (submissionId && showPayment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <section style={{ backgroundColor: "#FDF8F0" }} className="py-20 flex-1">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#e8dfd0]">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#B8922A]/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#B8922A]" />
                </div>
              </div>

              <h1 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1A2744] text-center mb-4">
                Document Received
              </h1>

              <p className="text-[#6B7A99] font-['DM_Sans'] text-center mb-8">
                Your submission has been received. Submission ID: <strong>{submissionId}</strong>
              </p>

              <div className="bg-[#1A2744]/5 p-6 rounded-lg mb-8">
                <h2 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#1A2744] mb-4">
                  Payment Method
                </h2>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      value="stripe"
                      checked={paymentMethod === "stripe"}
                      onChange={(e) => setPaymentMethod(e.target.value as "stripe" | "venmo" | "manual")}
                      className="w-4 h-4"
                    />
                    <span className="text-[#2C3A50] font-['DM_Sans']">Credit Card (Stripe)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      value="venmo"
                      checked={paymentMethod === "venmo"}
                      onChange={(e) => setPaymentMethod(e.target.value as "stripe" | "venmo" | "manual")}
                      className="w-4 h-4"
                    />
                    <span className="text-[#2C3A50] font-['DM_Sans']">Venmo</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      value="manual"
                      checked={paymentMethod === "manual"}
                      onChange={(e) => setPaymentMethod(e.target.value as "stripe" | "venmo" | "manual")}
                      className="w-4 h-4"
                    />
                    <span className="text-[#2C3A50] font-['DM_Sans']">Contact for Payment Options</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handlePayment}
                  disabled={updatePaymentMutation.isPending}
                  className="btn-gold flex items-center justify-center gap-2"
                >
                  {updatePaymentMutation.isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Proceed with Payment"
                  )}
                </button>

                <button
                  onClick={() => {
                    setShowPayment(false);
                    setSubmissionId(null);
                  }}
                  className="btn-navy-outline"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section style={{ backgroundColor: "#1A2744" }} className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${SERVICES_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="section-label mb-3">What We Offer</div>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white">
              Our Document Preparation Services
            </h2>
            <div className="gold-rule mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group"
              >
                <svc.icon size={24} className="text-[#B8922A] mb-4" />
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-white mb-2">{svc.title}</h3>
                <p className="text-white/65 text-sm font-['DM_Sans'] leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#FDF8F0" }} className="py-20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <div className="section-label mb-3">Get Started</div>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1A2744]">
              Upload Your Documents
            </h2>
            <div className="gold-rule mx-auto mt-4" />
            <p className="text-[#6B7A99] font-['DM_Sans'] mt-6 max-w-xl mx-auto">
              Submit your documents below. We'll scan, OCR, and draft your legal documents using AI. Payment is required before processing begins.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-sm border border-[#e8dfd0]">
            <div className="mb-6">
              <label className="block font-['DM_Sans'] font-semibold text-[#1A2744] mb-2">Full Name *</label>
              <input
                {...register("clientName")}
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-[#e8dfd0] rounded-lg font-['DM_Sans'] focus:outline-none focus:border-[#B8922A]"
              />
              {errors.clientName && <p className="text-red-500 text-sm mt-1">{errors.clientName.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block font-['DM_Sans'] font-semibold text-[#1A2744] mb-2">Email Address *</label>
              <input
                {...register("clientEmail")}
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-[#e8dfd0] rounded-lg font-['DM_Sans'] focus:outline-none focus:border-[#B8922A]"
              />
              {errors.clientEmail && <p className="text-red-500 text-sm mt-1">{errors.clientEmail.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block font-['DM_Sans'] font-semibold text-[#1A2744] mb-2">Phone Number *</label>
              <input
                {...register("clientPhone")}
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 border border-[#e8dfd0] rounded-lg font-['DM_Sans'] focus:outline-none focus:border-[#B8922A]"
              />
              {errors.clientPhone && <p className="text-red-500 text-sm mt-1">{errors.clientPhone.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block font-['DM_Sans'] font-semibold text-[#1A2744] mb-2">Service Type *</label>
              <select
                {...register("serviceType")}
                className="w-full px-4 py-3 border border-[#e8dfd0] rounded-lg font-['DM_Sans'] focus:outline-none focus:border-[#B8922A]"
              >
                <option value="">Select a service...</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block font-['DM_Sans'] font-semibold text-[#1A2744] mb-2">Description *</label>
              <textarea
                {...register("description")}
                placeholder="Describe your legal matter and what documents you need..."
                rows={5}
                className="w-full px-4 py-3 border border-[#e8dfd0] rounded-lg font-['DM_Sans'] focus:outline-none focus:border-[#B8922A]"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>

            <div className="mb-8">
              <label className="block font-['DM_Sans'] font-semibold text-[#1A2744] mb-2">Upload Document</label>
              <div className="border-2 border-dashed border-[#B8922A]/30 rounded-lg p-8 text-center cursor-pointer hover:border-[#B8922A]/60 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                  id="file-input"
                />
                <label htmlFor="file-input" className="cursor-pointer flex flex-col items-center gap-2">
                  <Upload size={32} className="text-[#B8922A]" />
                  <span className="font-['DM_Sans'] font-semibold text-[#1A2744]">
                    {file ? file.name : "Click to upload or drag and drop"}
                  </span>
                  <span className="text-xs text-[#6B7A99]">PDF, DOC, DOCX, or TXT (Max 10MB)</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || createSubmissionMutation.isPending}
              className="w-full btn-gold flex items-center justify-center gap-2"
            >
              {isSubmitting || createSubmissionMutation.isPending ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Uploading...
                </>
              ) : (
                "Upload & Continue to Payment"
              )}
            </button>

            <p className="text-xs text-[#6B7A99] font-['DM_Sans'] text-center mt-4">
              By submitting, you agree to our{" "}
              <Link href="/disclaimer" className="text-[#B8922A] hover:underline">
                disclaimer and terms
              </Link>
              .
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
