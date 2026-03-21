/* ============================================================
   Home Page — Justice Litigation Solutions
   Design: "Velvet Counsel" — Navy hero, cream sections, gold accents
   Cormorant Garamond display + DM Sans body
   ============================================================ */
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Stamp, Briefcase, Users, CheckCircle, ArrowRight } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462787524/Cz8sWUSTaWsiTX5qvA7ov6/hero-bg-texture-PpW2NhNwV6UxpDX5fTMGD5.webp";
const LADY_JUSTICE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663462787524/Cz8sWUSTaWsiTX5qvA7ov6/hero-lady-justice-nAbqR9xb2SGa8s7P58a4wV.webp";
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

const steps = [
  { num: "01", title: "Submit Your Request", desc: "Complete our simple intake form with details about the documents you need prepared." },
  { num: "02", title: "Document Preparation", desc: "We carefully prepare your documents with precision, accuracy, and strict confidentiality." },
  { num: "03", title: "Delivery", desc: "Receive your completed documents, ready for your review, signature, or submission." },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundColor: "#1A2744",
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1A2744]/70" />

        <div className="container mx-auto relative z-10 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="section-label mb-5 animate-fade-up">
                Licensed · Registered · Bonded
              </div>
              <h1
                className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.08] mb-6 animate-fade-up animate-fade-up-delay-1"
              >
                Professional Legal Document Preparation
              </h1>
              <div className="gold-bar-left animate-fade-up animate-fade-up-delay-2">
                <p className="text-white/75 text-lg font-['DM_Sans'] font-light leading-relaxed">
                  Accurate, compliant document preparation services — delivered with professionalism and confidentiality. We do not provide legal advice or legal representation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-up animate-fade-up-delay-3">
                <Link href="/contact" className="btn-gold">
                  Request Legal Document Assistance
                </Link>
                <Link href="/services" className="btn-navy-outline border-white/50 text-white hover:bg-white hover:text-[#1A2744]">
                  View Services
                </Link>
              </div>
            </div>

            {/* Right: Lady Justice illustration */}
            <div className="hidden lg:flex justify-center items-end">
              <img
                src={LADY_JUSTICE}
                alt="Lady Justice — Justice Litigation Solutions"
                className="max-h-[580px] object-contain drop-shadow-2xl animate-fade-up animate-fade-up-delay-2"
              />
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#FDF8F0"/>
          </svg>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section style={{ backgroundColor: "#FDF8F0" }} className="py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Licensed", desc: "Fully licensed Legal Document Assistant operating in compliance with California Business & Professions Code." },
              { title: "Registered", desc: "Officially registered with the county, ensuring accountability and professional standards." },
              { title: "Bonded", desc: "Bonded for your protection, providing an added layer of security and peace of mind." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center px-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#B8922A] flex items-center justify-center mb-4">
                  <CheckCircle size={20} className="text-[#B8922A]" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1A2744] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7A99] font-['DM_Sans'] leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
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
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#B8922A] text-sm font-['DM_Sans'] tracking-widest uppercase font-medium hover:gap-3 transition-all">
              View Full Service Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3-STEP PROCESS ── */}
      <section style={{ backgroundColor: "#FDF8F0" }} className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mb-3">How It Works</div>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#1A2744]">
              Simple. Clear. Professional.
            </h2>
            <div className="gold-rule mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-[#B8922A]/30" />
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center px-4">
                <div
                  className="w-16 h-16 rounded-full border-2 border-[#B8922A] flex items-center justify-center mb-5 relative z-10"
                  style={{ backgroundColor: "#FDF8F0" }}
                >
                  <span className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#B8922A]">{step.num}</span>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#1A2744] mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B7A99] font-['DM_Sans'] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/contact" className="btn-gold">
              Begin Your Request
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECONDARY CTA ── */}
      <section style={{ backgroundColor: "#F5EDE8" }} className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#1A2744] mb-4">
            Ready to get your documents prepared?
          </h2>
          <p className="text-[#6B7A99] font-['DM_Sans'] mb-8 max-w-xl mx-auto leading-relaxed">
            Complete our intake form and we'll be in touch promptly. All services are provided with strict confidentiality and professional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Submit a Request
            </Link>
            <Link href="/pricing" className="btn-navy-outline">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
