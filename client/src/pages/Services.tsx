/* ============================================================
   Services Page — Justice Litigation Solutions
   Design: "Velvet Counsel" — Alternating cream/navy sections
   ============================================================ */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { FileText, Stamp, Briefcase, Users, CheckCircle } from "lucide-react";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462787524/Cz8sWUSTaWsiTX5qvA7ov6/services-bg-iF9Hwbup8XudBk7PD6NxwG.webp";

const services = [
  {
    icon: FileText,
    number: "01",
    title: "Legal Document Preparation",
    tagline: "Accurate documents, prepared to your specifications.",
    description:
      "We prepare a wide range of legal documents for individuals who are representing themselves in civil, family, probate, and other matters. Every document is drafted carefully, reviewed for completeness, and delivered in a format ready for your use.",
    includes: [
      "Petitions, motions, and declarations",
      "Agreements and stipulations",
      "Responses and answers to legal filings",
      "Affidavits and supporting declarations",
      "Demand letters and formal correspondence",
      "Customized document packages for self-represented individuals",
    ],
    note: "Document preparation only. We do not advise on legal strategy or represent clients in any proceeding.",
  },
  {
    icon: Stamp,
    number: "02",
    title: "Court Filing Assistance",
    tagline: "Organized, complete, and ready for submission.",
    description:
      "Navigating court filing requirements can be confusing. We assist in organizing your documents, ensuring required forms are included, and preparing your filing package for submission to the appropriate court or agency.",
    includes: [
      "Review of filing requirements for the applicable court",
      "Organization and assembly of filing packages",
      "Preparation of cover sheets and required forms",
      "Assistance with fee waiver application preparation",
      "Coordination of document copies and service copies",
    ],
    note: "We assist with document preparation and organization only. We do not provide legal advice on filing strategy or case outcomes.",
  },
  {
    icon: Briefcase,
    number: "03",
    title: "Administrative Legal Support",
    tagline: "Streamlined support for your administrative needs.",
    description:
      "Beyond document drafting, we provide comprehensive administrative support for individuals and small businesses navigating legal paperwork. From correspondence to compliance forms, we help keep your documentation organized and professional.",
    includes: [
      "Preparation of formal correspondence and notices",
      "Completion of government and agency forms",
      "Document review for completeness (not legal review)",
      "Organization of case files and document binders",
      "Preparation of exhibits and supporting materials",
    ],
    note: "Administrative support services do not include legal analysis, legal advice, or representation.",
  },
  {
    icon: Users,
    number: "04",
    title: "Attorney Support Services",
    tagline: "Reliable document support for legal professionals.",
    description:
      "Legal professionals can rely on Justice Litigation Solutions for overflow document preparation, administrative support, and document management assistance. We work discreetly and efficiently to support your practice.",
    includes: [
      "Document drafting from attorney-provided templates or instructions",
      "Preparation of routine correspondence and notices",
      "Form completion and document assembly",
      "File organization and document management support",
      "Overflow support during high-volume periods",
    ],
    note: "All work is performed under the direction of the supervising attorney. We do not independently advise clients.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ── PAGE HEADER ── */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{
          backgroundColor: "#1A2744",
          backgroundImage: `url(${SERVICES_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1A2744]/80" />
        <div className="container mx-auto relative z-10 text-center">
          <div className="section-label mb-4">What We Do</div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-white mb-6">
            Our Services
          </h1>
          <div className="gold-rule mx-auto mb-6" />
          <p className="text-white/70 font-['DM_Sans'] max-w-2xl mx-auto leading-relaxed">
            Professional document preparation services tailored to your needs. All services are provided by a Licensed, Registered, and Bonded Legal Document Assistant. We do not provide legal advice.
          </p>
        </div>
      </section>

      {/* ── SERVICE DETAIL CARDS ── */}
      {services.map((svc, i) => (
        <section
          key={svc.number}
          style={{ backgroundColor: i % 2 === 0 ? "#FDF8F0" : "#F5EDE8" }}
          className="py-16"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Number + icon */}
              <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                <div className="font-['Cormorant_Garamond'] text-6xl font-light text-[#B8922A]/30 leading-none">
                  {svc.number}
                </div>
                <div className="w-12 h-12 border border-[#B8922A] flex items-center justify-center">
                  <svc.icon size={20} className="text-[#B8922A]" />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-10">
                <div className="section-label mb-2">{svc.tagline}</div>
                <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#1A2744] mb-4">
                  {svc.title}
                </h2>
                <div className="gold-rule mb-5" />
                <p className="text-[#2C3A50] font-['DM_Sans'] leading-relaxed mb-6 max-w-2xl">
                  {svc.description}
                </p>
                <div className="mb-5">
                  <div className="text-xs tracking-widest uppercase font-['DM_Sans'] font-semibold text-[#1A2744] mb-3">
                    What's Included
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {svc.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className="text-[#B8922A] mt-0.5 shrink-0" />
                        <span className="text-sm text-[#6B7A99] font-['DM_Sans']">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#1A2744]/5 border-l-2 border-[#B8922A] px-4 py-3 text-xs text-[#6B7A99] font-['DM_Sans'] italic">
                  {svc.note}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "#1A2744" }} className="py-16 text-center">
        <div className="container mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/65 font-['DM_Sans'] mb-8 max-w-lg mx-auto">
            Submit your intake request and we'll be in touch to discuss your document preparation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Request Document Assistance
            </Link>
            <Link href="/pricing" className="btn-navy-outline border-white/40 text-white hover:bg-white hover:text-[#1A2744]">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
