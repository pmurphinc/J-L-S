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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                Anna Zeledon
              </h2>
              <div className="text-[#B8922A] text-sm font-['DM_Sans'] tracking-widest uppercase mb-6">
                Licensed · Registered · Bonded Legal Document Assistant
              </div>
              <div className="gold-bar-left mb-6">
                <p className="text-[#2C3A50] font-['DM_Sans'] leading-relaxed">
                  With a deep commitment to accuracy and client service, I founded Justice Litigation Solutions to provide individuals and professionals with reliable, affordable legal document preparation support. I understand that navigating paperwork can be overwhelming — my role is to make that process clear and manageable.
                </p>
              </div>
              <p className="text-[#6B7A99] font-['DM_Sans'] leading-relaxed mb-5">
                As a Licensed Legal Document Assistant (LDA), I am authorized under California Business & Professions Code §6400 et seq. to prepare legal documents for individuals representing themselves. I am not an attorney and do not provide legal advice, legal representation, or guidance on legal strategy.
              </p>
              <p className="text-[#6B7A99] font-['DM_Sans'] leading-relaxed mb-8">
                Based in Lincoln, California, I am bonded for $25,000 through Jet Insurance Company (Bond #BX0081398) to ensure the highest level of client protection and professional accountability. Every client receives personalized attention, clear communication, and documents prepared to the highest standard of accuracy and compliance.
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
          <Link href="/contact" className="btn-gold">
            Request Document Assistance
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
