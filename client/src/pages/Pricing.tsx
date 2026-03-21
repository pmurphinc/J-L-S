/* ============================================================
   Pricing Page — Justice Litigation Solutions
   Design: "Velvet Counsel" — Clean pricing tiers, navy/gold/cream
   ============================================================ */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CheckCircle, MessageCircle } from "lucide-react";

const pricingTiers = [
  {
    name: "Essential",
    tagline: "Single document preparation",
    startingAt: "$75",
    period: "per document",
    description: "Ideal for individuals who need one specific document prepared accurately and professionally.",
    features: [
      "Single document preparation",
      "One revision included",
      "Delivered within 3–5 business days",
      "Email delivery",
      "Confidential handling",
    ],
    cta: "Request This Service",
    highlight: false,
  },
  {
    name: "Standard",
    tagline: "Document package preparation",
    startingAt: "$200",
    period: "per package",
    description: "For matters requiring multiple related documents prepared as a complete, organized package.",
    features: [
      "Up to 5 related documents",
      "Two revisions included",
      "Delivered within 5–7 business days",
      "Email + print-ready delivery",
      "Filing checklist included",
      "Confidential handling",
    ],
    cta: "Request This Service",
    highlight: true,
  },
  {
    name: "Comprehensive",
    tagline: "Full matter document support",
    startingAt: "$400",
    period: "per matter",
    description: "Complete document preparation support for complex matters requiring ongoing assistance.",
    features: [
      "Unlimited documents for the matter",
      "Unlimited revisions",
      "Priority turnaround",
      "Email + print-ready delivery",
      "Filing checklist + organization",
      "Dedicated point of contact",
      "Confidential handling",
    ],
    cta: "Request This Service",
    highlight: false,
  },
];

const addOns = [
  { name: "Rush Processing (24–48 hrs)", price: "+$50" },
  { name: "Notarization Coordination", price: "Contact for pricing" },
  { name: "Court Filing Package Assembly", price: "Starting at $50" },
  { name: "Attorney Support (per hour)", price: "Starting at $45/hr" },
  { name: "Custom Quote for Complex Matters", price: "Free Consultation" },
];

export default function Pricing() {
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
            backgroundImage: "radial-gradient(ellipse at 30% 50%, #B8922A22 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto relative z-10 text-center">
          <div className="section-label mb-4">Transparent Pricing</div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-white mb-6">
            Clear, Honest Rates
          </h1>
          <div className="gold-rule mx-auto mb-6" />
          <p className="text-white/70 font-['DM_Sans'] max-w-2xl mx-auto leading-relaxed">
            All pricing listed is a starting point. Final pricing depends on the complexity and scope of your document preparation needs. Contact us for a custom quote.
          </p>
        </div>
      </section>

      {/* ── PRICING TIERS ── */}
      <section style={{ backgroundColor: "#FDF8F0" }} className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col relative ${
                  tier.highlight
                    ? "bg-[#1A2744] text-white shadow-2xl scale-[1.02]"
                    : "bg-white border border-[#e8dfd0]"
                }`}
              >
                {tier.highlight && (
                  <div className="bg-[#B8922A] text-white text-[0.65rem] tracking-[0.18em] uppercase font-['DM_Sans'] font-semibold text-center py-1.5">
                    Most Popular
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className={`section-label mb-1 ${tier.highlight ? "text-[#B8922A]" : ""}`}>
                    {tier.tagline}
                  </div>
                  <h2 className={`font-['Cormorant_Garamond'] text-3xl font-semibold mb-3 ${tier.highlight ? "text-white" : "text-[#1A2744]"}`}>
                    {tier.name}
                  </h2>
                  <div className="mb-4">
                    <span className={`font-['Cormorant_Garamond'] text-5xl font-semibold ${tier.highlight ? "text-[#B8922A]" : "text-[#1A2744]"}`}>
                      {tier.startingAt}
                    </span>
                    <span className={`text-sm font-['DM_Sans'] ml-2 ${tier.highlight ? "text-white/60" : "text-[#6B7A99]"}`}>
                      {tier.period}
                    </span>
                  </div>
                  <div className={`text-xs font-['DM_Sans'] mb-1 ${tier.highlight ? "text-[#B8922A]" : "text-[#B8922A]"}`}>
                    Starting at
                  </div>
                  <p className={`text-sm font-['DM_Sans'] leading-relaxed mb-6 ${tier.highlight ? "text-white/70" : "text-[#6B7A99]"}`}>
                    {tier.description}
                  </p>
                  <div className="flex-1">
                    <div className={`text-xs tracking-widest uppercase font-['DM_Sans'] font-semibold mb-3 ${tier.highlight ? "text-white/50" : "text-[#1A2744]/50"}`}>
                      Includes
                    </div>
                    <div className="flex flex-col gap-2.5 mb-8">
                      {tier.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <CheckCircle size={14} className="text-[#B8922A] mt-0.5 shrink-0" />
                          <span className={`text-sm font-['DM_Sans'] ${tier.highlight ? "text-white/80" : "text-[#2C3A50]"}`}>
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className={`text-center text-xs tracking-[0.12em] uppercase font-['DM_Sans'] font-semibold py-3.5 px-6 transition-all ${
                      tier.highlight
                        ? "bg-[#B8922A] text-white hover:bg-[#D4AA4A]"
                        : "border border-[#1A2744] text-[#1A2744] hover:bg-[#1A2744] hover:text-white"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ── */}
      <section style={{ backgroundColor: "#F5EDE8" }} className="py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <div className="section-label mb-3">Additional Services</div>
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1A2744]">
              Add-On Options
            </h2>
            <div className="gold-rule mx-auto mt-4" />
          </div>
          <div className="divide-y divide-[#e8dfd0]">
            {addOns.map((item) => (
              <div key={item.name} className="flex items-center justify-between py-4">
                <span className="text-[#2C3A50] font-['DM_Sans'] text-sm">{item.name}</span>
                <span className="text-[#B8922A] font-['Cormorant_Garamond'] text-lg font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM QUOTE ── */}
      <section style={{ backgroundColor: "#1A2744" }} className="py-16">
        <div className="container mx-auto text-center">
          <div className="w-14 h-14 rounded-full border border-[#B8922A] flex items-center justify-center mx-auto mb-5">
            <MessageCircle size={22} className="text-[#B8922A]" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-4">
            Not sure which option fits?
          </h2>
          <p className="text-white/65 font-['DM_Sans'] mb-8 max-w-lg mx-auto leading-relaxed">
            Every situation is unique. Contact us to discuss your specific needs and receive a custom quote tailored to your document preparation requirements.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Custom Quote
          </Link>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section style={{ backgroundColor: "#FDF8F0" }} className="py-10">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-[#6B7A99] text-xs font-['DM_Sans'] leading-relaxed italic">
            All pricing is subject to change based on document complexity and scope. Prices listed are starting rates. Justice Litigation Solutions is not a law firm and does not provide legal advice. For legal advice, please consult a licensed attorney.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
