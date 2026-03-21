/* ============================================================
   Contact / Intake Form Page — Justice Litigation Solutions
   Design: "Velvet Counsel" — Most important page; clean form, navy/gold
   ============================================================ */
import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Upload, CheckCircle } from "lucide-react";

const serviceOptions = [
  { value: "legal-document-preparation", label: "Legal Document Preparation" },
  { value: "court-filing-assistance", label: "Court Filing Assistance" },
  { value: "administrative-legal-support", label: "Administrative Legal Support" },
  { value: "attorney-support-services", label: "Attorney Support Services" },
  { value: "custom-quote", label: "Custom Quote / Other" },
];

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "A valid email address is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.serviceType) e.serviceType = "Please select a service type.";
    if (!form.description.trim()) e.description = "Please provide a brief description.";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => { const next = { ...prev }; delete next[e.target.name]; return next; });
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // In a static site, this simulates submission. A backend or form service (e.g. Formspree) can be connected here.
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ── PAGE HEADER ── */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "#1A2744" }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(ellipse at 60% 40%, #B8922A22 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto relative z-10 text-center">
          <div className="section-label mb-4">Get Started</div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-white mb-6">
            Client Intake Request
          </h1>
          <div className="gold-rule mx-auto mb-6" />
          <p className="text-white/70 font-['DM_Sans'] max-w-2xl mx-auto leading-relaxed">
            Complete the form below to request legal document preparation assistance. We will review your request and respond promptly.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ backgroundColor: "#FDF8F0" }} className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── FORM (2/3 width) ── */}
            <div className="lg:col-span-2">
              {/* Disclaimer */}
              <div className="bg-[#F5EDE8] border-l-4 border-[#B8922A] px-5 py-4 mb-8">
                <p className="text-sm text-[#2C3A50] font-['DM_Sans'] leading-relaxed">
                  <strong className="font-semibold text-[#1A2744]">Important Notice:</strong> This service provides legal document preparation only and does not offer legal advice, legal representation, or guidance on legal strategy. By submitting this form, you acknowledge that Justice Litigation Solutions is not a law firm.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-16 px-8 bg-white border border-[#e8dfd0]">
                  <div className="w-16 h-16 rounded-full border-2 border-[#B8922A] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={28} className="text-[#B8922A]" />
                  </div>
                  <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1A2744] mb-3">
                    Request Received
                  </h2>
                  <p className="text-[#6B7A99] font-['DM_Sans'] leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out to Justice Litigation Solutions. We have received your request and will be in touch within 1–2 business days to discuss your document preparation needs.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ fullName: "", email: "", phone: "", serviceType: "", description: "" }); setFileName(null); }}
                    className="mt-8 text-xs tracking-widest uppercase font-['DM_Sans'] font-medium text-[#B8922A] hover:underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-[#e8dfd0] p-8 md:p-10" noValidate>
                  <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1A2744] mb-8">
                    Tell us about your needs
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="jls-label">Full Name *</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Your full legal name"
                        className="jls-input"
                        autoComplete="name"
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1 font-['DM_Sans']">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="jls-label">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="jls-input"
                        autoComplete="email"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-['DM_Sans']">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="jls-label">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="jls-input"
                        autoComplete="tel"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 font-['DM_Sans']">{errors.phone}</p>}
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="serviceType" className="jls-label">Type of Service *</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={form.serviceType}
                        onChange={handleChange}
                        className="jls-input appearance-none"
                        style={{ cursor: "pointer" }}
                      >
                        <option value="" disabled>Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                      {errors.serviceType && <p className="text-red-500 text-xs mt-1 font-['DM_Sans']">{errors.serviceType}</p>}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <label htmlFor="description" className="jls-label">Brief Description of Request *</label>
                    <textarea
                      id="description"
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Please describe the documents you need prepared and any relevant details about your situation..."
                      rows={5}
                      className="jls-input resize-none"
                      style={{ borderBottom: "1.5px solid #c8c0b0", paddingTop: "0.5rem" }}
                    />
                    {errors.description && <p className="text-red-500 text-xs mt-1 font-['DM_Sans']">{errors.description}</p>}
                  </div>

                  {/* File Upload */}
                  <div className="mb-8">
                    <label className="jls-label mb-3 block">Supporting Documents (Optional)</label>
                    <div
                      className="border-2 border-dashed border-[#e8dfd0] hover:border-[#B8922A] transition-colors p-6 text-center cursor-pointer"
                      onClick={() => fileRef.current?.click()}
                    >
                      <Upload size={20} className="text-[#B8922A] mx-auto mb-2" />
                      <p className="text-sm text-[#6B7A99] font-['DM_Sans']">
                        {fileName ? (
                          <span className="text-[#1A2744] font-medium">{fileName}</span>
                        ) : (
                          <>Click to upload a file <span className="text-[#B8922A]">(PDF, DOC, JPG — max 10MB)</span></>
                        )}
                      </p>
                      <input
                        ref={fileRef}
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleFile}
                        className="hidden"
                      />
                    </div>
                  </div>

                  {/* Consent note */}
                  <p className="text-xs text-[#6B7A99] font-['DM_Sans'] italic mb-6 leading-relaxed">
                    By submitting this form, you confirm that you understand Justice Litigation Solutions provides document preparation services only and does not provide legal advice. Your information will be kept strictly confidential.
                  </p>

                  <button type="submit" className="btn-gold w-full md:w-auto text-sm py-4 px-10">
                    Submit Request
                  </button>
                </form>
              )}
            </div>

            {/* ── SIDEBAR (1/3 width) ── */}
            <div className="flex flex-col gap-6">
              {/* Contact info */}
              <div className="bg-[#1A2744] p-7 text-white">
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold mb-5">Contact Information</h3>
                <div className="flex flex-col gap-4 text-sm font-['DM_Sans']">
                  <div className="flex items-start gap-3">
                    <Phone size={14} className="text-[#B8922A] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-white/50 text-xs tracking-widest uppercase mb-0.5">Phone</div>
                      <div className="text-white/80">[Phone Number Placeholder]</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={14} className="text-[#B8922A] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-white/50 text-xs tracking-widest uppercase mb-0.5">Email</div>
                      <div className="text-white/80">[Email Address Placeholder]</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-[#B8922A] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-white/50 text-xs tracking-widest uppercase mb-0.5">Service Area</div>
                      <div className="text-white/80">[Service Area Placeholder]</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={14} className="text-[#B8922A] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-white/50 text-xs tracking-widest uppercase mb-0.5">Response Time</div>
                      <div className="text-white/80">Within 1–2 business days</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-[#F5EDE8] p-7 border-l-4 border-[#B8922A]">
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#1A2744] mb-4">What to Expect</h3>
                <div className="flex flex-col gap-3">
                  {[
                    "We review your request within 1–2 business days.",
                    "We'll contact you to confirm details and provide a quote.",
                    "Upon agreement, document preparation begins.",
                    "Completed documents are delivered securely.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="font-['Cormorant_Garamond'] text-[#B8922A] font-semibold text-lg leading-tight shrink-0">{i + 1}.</span>
                      <p className="text-sm text-[#2C3A50] font-['DM_Sans'] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer box */}
              <div className="bg-white border border-[#e8dfd0] p-6">
                <div className="section-label mb-2">Disclaimer</div>
                <p className="text-xs text-[#6B7A99] font-['DM_Sans'] leading-relaxed italic">
                  Submitting this form does not create an attorney-client relationship. Justice Litigation Solutions is not a law firm and does not provide legal advice. For legal advice, please consult a licensed attorney.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
