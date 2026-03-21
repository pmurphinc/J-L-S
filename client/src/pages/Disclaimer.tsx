/* ============================================================
   Disclaimer Page — Justice Litigation Solutions
   Design: "Velvet Counsel" — Clean, authoritative, cream/navy
   ============================================================ */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

const disclaimerSections = [
  {
    title: "Not an Attorney",
    content:
      "Justice Litigation Solutions is operated by a Licensed Legal Document Assistant (LDA) registered in the State of California. The operator of this business is not an attorney and is not authorized to practice law. Nothing on this website, in any communication, or in any document prepared by Justice Litigation Solutions constitutes the practice of law.",
  },
  {
    title: "No Legal Advice",
    content:
      "Justice Litigation Solutions does not provide legal advice of any kind. We do not advise clients on legal rights, legal strategy, the merits of any legal claim, or the probable outcome of any legal matter. If you require legal advice, you should consult a licensed attorney in your jurisdiction.",
  },
  {
    title: "No Legal Representation",
    content:
      "Justice Litigation Solutions does not represent clients in any legal proceeding, court, arbitration, mediation, or administrative hearing. We do not appear on behalf of any client in any legal capacity. Submitting a request to Justice Litigation Solutions does not create an attorney-client relationship.",
  },
  {
    title: "Document Preparation Services Only",
    content:
      "All services provided by Justice Litigation Solutions are limited to the preparation of legal documents as directed by the client. Documents are prepared based on information provided by the client. The client is solely responsible for reviewing all documents for accuracy and for determining whether the documents are appropriate for their needs. Justice Litigation Solutions makes no representations or warranties regarding the legal sufficiency of any document prepared.",
  },
  {
    title: "LDA Authorization",
    content:
      "Justice Litigation Solutions operates in compliance with California Business & Professions Code §6400 et seq., which governs Legal Document Assistants. Services are provided only to individuals who represent themselves in legal matters (self-represented or pro per litigants), except where attorney support services are provided under the direct supervision of a licensed attorney.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Justice Litigation Solutions shall not be liable for any damages, losses, or adverse outcomes arising from the use of documents prepared by this business. The client assumes full responsibility for the use of any documents prepared. In no event shall Justice Litigation Solutions be liable for any indirect, incidental, special, or consequential damages.",
  },
  {
    title: "Confidentiality",
    content:
      "All information provided by clients is treated with strict confidentiality. We do not share, sell, or disclose client information to third parties except as required by law or as necessary to provide the requested services.",
  },
  {
    title: "Accuracy of Information",
    content:
      "Documents are prepared based solely on information provided by the client. Justice Litigation Solutions does not independently verify the accuracy, completeness, or truthfulness of information provided. The client is responsible for ensuring that all information provided is accurate and complete.",
  },
];

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ── PAGE HEADER ── */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "#1A2744" }}
      >
        <div className="container mx-auto relative z-10 text-center">
          <div className="section-label mb-4">Legal Notice</div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-white mb-6">
            Disclaimer
          </h1>
          <div className="gold-rule mx-auto mb-6" />
          <p className="text-white/70 font-['DM_Sans'] max-w-2xl mx-auto leading-relaxed">
            Please read this disclaimer carefully before using the services of Justice Litigation Solutions.
          </p>
        </div>
      </section>

      {/* ── DISCLAIMER CONTENT ── */}
      <section style={{ backgroundColor: "#FDF8F0" }} className="py-20">
        <div className="container mx-auto max-w-3xl">

          {/* Key notice banner */}
          <div className="bg-[#1A2744] text-white p-7 mb-12 flex gap-5 items-start">
            <AlertCircle size={22} className="text-[#B8922A] shrink-0 mt-0.5" />
            <div>
              <div className="font-['Cormorant_Garamond'] text-xl font-semibold mb-2">
                Important Notice
              </div>
              <p className="text-white/75 text-sm font-['DM_Sans'] leading-relaxed">
                Justice Litigation Solutions is <strong className="text-white">not a law firm</strong> and does not employ attorneys. The services provided are <strong className="text-white">legal document preparation only</strong>. We do not provide legal advice, legal representation, or guidance on legal strategy. For legal advice, please consult a licensed attorney.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {disclaimerSections.map((section, i) => (
              <div key={section.title}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-['Cormorant_Garamond'] text-[#B8922A]/40 text-2xl font-light leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1A2744]">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-10">
                  <p className="text-[#2C3A50] font-['DM_Sans'] leading-relaxed text-sm">
                    {section.content}
                  </p>
                </div>
                {i < disclaimerSections.length - 1 && (
                  <div className="mt-8 h-px bg-[#e8dfd0]" />
                )}
              </div>
            ))}
          </div>

          {/* Last updated */}
          <div className="mt-12 pt-8 border-t border-[#e8dfd0] text-center">
            <p className="text-xs text-[#6B7A99] font-['DM_Sans'] italic">
              This disclaimer was last updated on {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}. Justice Litigation Solutions reserves the right to update this disclaimer at any time without prior notice.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "#F5EDE8" }} className="py-14 text-center">
        <div className="container mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1A2744] mb-3">
            Have questions about our services?
          </h2>
          <p className="text-[#6B7A99] font-['DM_Sans'] mb-6 text-sm max-w-md mx-auto">
            We're happy to clarify what we can and cannot assist with before you submit a request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
            <Link href="/services" className="btn-navy-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
