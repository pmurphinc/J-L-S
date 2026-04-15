/* ============================================================
   About Page — Justice Litigation Solutions
   Design: "Velvet Counsel" — Cream bg, navy text, gold accents
   ============================================================ */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Shield, Eye, Award, Lock } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462787524/Cz8sWUSTaWsiTX5qvA7ov6/about-portrait-NAWgghBCB6RTwVFJierRAc.webp";

const values = [
  {
    icon: Shield,
    title: "Accuracy & Precision",
    desc: "Every document is prepared with meticulous attention to detail, ensuring completeness and compliance with applicable procedural requirements.",
  },
  {
    icon: Lock,
    title: "Strict Confidentiality",
    desc: "Your personal information and case details are handled with the utmost discretion and never shared without your explicit consent.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear communication at every step. You will always know what services are being provided and what is outside the scope of document preparation.",
  },
  {
    icon: Award,
    title: "Professional Standards",
    desc: "As a Licensed, Registered, and Bonded LDA, all services are delivered in full compliance with California Business & Professions Code §6400 et seq.",
  },
];

export default function About() {
  const scrollToTopOnCtaNavigation = () => {
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 0);
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
            backgroundImage: "radial-gradient(ellipse at 70% 50%, #B8922A22 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto relative z-10 text-center">
          <div className="section-label mb-4">About Us</div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-white mb-6">
            Dedicated to Precision.<br />
            <em className="font-light">Committed to You.</em>
          </h1>
          <div className="gold-rule mx-auto" />
        </div>
      </section>

      {/* ── BIO SECTION ── */}
      <section style={{ backgroundColor: "#FDF8F0" }} className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full border-2 border-[#B8922A]/30"
                style={{ zIndex: 0 }}
              />
              <img
                src={ABOUT_IMG}
                alt="Legal Document Assistant — Justice Litigation Solutions"
                className="relative z-10 w-full max-w-md mx-auto object-cover shadow-xl"
                style={{ maxHeight: "520px", objectPosition: "top" }}
              />
            </div>

            {/* Bio text */}
            <div>
              <div className="section-label mb-3">Your Legal Document Assistant</div>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1A2744] mb-2">
                Anna Murphy
              </h2>
              <div className="text-[#B8922A] text-sm font-['DM_Sans'] tracking-widest uppercase mb-6">
                Licensed · Registered · Bonded Legal Document Assistant
              </div>
              <div className="gold-bar-left mb-6">
                <p className="text-[#2C3A50] font-['DM_Sans'] leading-relaxed">
                  Anna Murphy is the founder of Justice Litigation Solutions, providing strategic litigation support and legal document preparation for attorneys and self-represented litigants navigating complex legal matters.
                </p>
              </div>
              <p className="text-[#6B7A99] font-['DM_Sans'] leading-relaxed mb-5">
                Anna began her professional career in law enforcement, graduating from the Northwest Florida Law Enforcement Academy in 1995. She later worked in bail enforcement and fugitive recovery in Colorado from 1996 to 1998, gaining firsthand experience in criminal procedure, court orders, and compliance in high-stakes environments.
              </p>
              <p className="text-[#6B7A99] font-['DM_Sans'] leading-relaxed mb-5">
                In 2007, Anna transitioned into the legal field as an office manager for a California litigation practice, where she was trained in-house as a paralegal under direct attorney supervision. She has continued working in that capacity to the present, supporting litigation matters across jurisdictions, including work connected to cases in both California and Alaska.
              </p>
              <p className="text-[#6B7A99] font-['DM_Sans'] leading-relaxed mb-5">
                During the 2008 housing crisis, she developed and managed loan modification and foreclosure defense workflows, contributing to the preservation of housing for over one hundred families. Her work expanded into advanced litigation support, including motion practice, discovery preparation, appellate record organization, and coordinated filings in state, federal, and bankruptcy courts.
              </p>
              <p className="text-[#6B7A99] font-['DM_Sans'] leading-relaxed mb-5">
                In addition to her professional experience, Anna brings extensive firsthand knowledge as a self-represented litigant in multi-year civil and property litigation, including unlawful detainer, ejectment, and federal ADA-related proceedings. This perspective informs her disciplined, practical approach to litigation support.
              </p>
              <p className="text-[#6B7A99] font-['DM_Sans'] leading-relaxed mb-5">
                Today, Anna serves as a Litigation Support Strategist and Legal Document Assistant (LDA), using AI-enhanced drafting tools and structured workflows to expand procedural options, improve efficiency, and support court-ready outcomes—while maintaining full respect for the role of licensed legal counsel.
              </p>
              <p className="text-[#6B7A99] font-['DM_Sans'] leading-relaxed mb-5">
                Anna also has experience in real estate, having worked as a licensed real estate agent in Florida. This background informs her understanding of property transactions, title issues, and foreclosure-related matters, which continue to be a core component of her litigation support work.
              </p>
              <p className="text-[#6B7A99] font-['DM_Sans'] leading-relaxed mb-8">
                Her work is grounded in real-world litigation experience across civil, criminal, and multi-jurisdictional matters, with a focus on disciplined execution and strategic support.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#F5EDE8] px-5 py-3 text-center">
                  <div className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1A2744]">Licensed</div>
                  <div className="text-xs text-[#6B7A99] font-['DM_Sans'] tracking-wider uppercase">& Bonded</div>
                </div>
                <div className="bg-[#F5EDE8] px-5 py-3 text-center">
                  <div className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1A2744]">$25K</div>
                  <div className="text-xs text-[#6B7A99] font-['DM_Sans'] tracking-wider uppercase">Bond Coverage</div>
                </div>
                <div className="bg-[#F5EDE8] px-5 py-3 text-center">
                  <div className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1A2744]">100%</div>
                  <div className="text-xs text-[#6B7A99] font-['DM_Sans'] tracking-wider uppercase">Confidential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ backgroundColor: "#1A2744" }} className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Our Commitment</div>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-white">
              The Principles We Work By
            </h2>
            <div className="gold-rule mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5 bg-white/5 border border-white/10 p-7">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full border border-[#B8922A] flex items-center justify-center">
                    <v.icon size={16} className="text-[#B8922A]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-white mb-1">{v.title}</h3>
                  <p className="text-white/60 text-sm font-['DM_Sans'] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER NOTE ── */}
      <section style={{ backgroundColor: "#F5EDE8" }} className="py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-[#6B7A99] text-sm font-['DM_Sans'] leading-relaxed italic">
            Justice Litigation Solutions is not a law firm. The services provided are legal document preparation only. We do not provide legal advice, legal representation, or guidance on legal strategy. For legal advice, please consult a licensed attorney.
          </p>
          <Link href="/disclaimer" className="inline-block mt-4 text-[#B8922A] text-xs tracking-widest uppercase font-['DM_Sans'] font-medium hover:underline">
            Read Full Disclaimer
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "#FDF8F0" }} className="py-16 text-center">
        <div className="container mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1A2744] mb-4">
            Let's work together on your documents.
          </h2>
          <p className="text-[#6B7A99] font-['DM_Sans'] mb-8 max-w-lg mx-auto">
            Submit a request today and receive prompt, professional assistance with your legal document preparation needs.
          </p>
          <Link href="/contact" onClick={scrollToTopOnCtaNavigation} className="btn-gold">
            Request Document Assistance
          </Link>
        </div>
      </section>

      <Footer scrollToTopOnPrimaryCtaNavigation />
    </div>
  );
}
