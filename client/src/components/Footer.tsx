/* ============================================================
   Footer — Justice Litigation Solutions
   Design: Deep navy background, gold accents, DM Sans body
   ============================================================ */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

type FooterProps = {
  scrollToTopOnPrimaryCtaNavigation?: boolean;
};

export default function Footer({ scrollToTopOnPrimaryCtaNavigation = false }: FooterProps) {
  const scrollToTopOnQuickLinkNavigation = () => {
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 0);
  };

  return (
    <footer style={{ backgroundColor: "#1A2744" }} className="text-white">
      {/* Top CTA band */}
      <div style={{ backgroundColor: "#B8922A" }} className="py-8 px-6 text-center">
        <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-white mb-3">
          Ready to move forward with your documents?
        </p>
        <Link
          href="/contact"
          onClick={scrollToTopOnPrimaryCtaNavigation ? scrollToTopOnQuickLinkNavigation : undefined}
          className="inline-block bg-white text-[#1A2744] text-xs tracking-[0.14em] uppercase font-['DM_Sans'] font-semibold py-3 px-8 hover:bg-[#FDF8F0] transition-colors"
        >
          Submit a Request
        </Link>
      </div>

      <div className="container mx-auto py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand column */}
        <div>
          <div className="font-['Cormorant_Garamond'] text-xl font-semibold text-white mb-1">
            Justice Litigation Solutions
          </div>
          <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#B8922A] font-['DM_Sans'] mb-4">
            Legal Document Preparation
          </div>
          <p className="text-white/60 text-sm leading-relaxed font-['DM_Sans']">
            Anna Murphy is a Litigation Support Strategist and Legal Document Assistant (LDA) with over 15 years of experience supporting complex civil, property, criminal, and appellate matters. With a background in law enforcement and bail enforcement, she provides strategic document preparation and filing coordination for attorneys and self-represented litigants, focused on structure, clarity, and forward motion in complex cases.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <div className="section-label mb-5">Quick Links</div>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact / Intake Form" },
              { href: "/disclaimer", label: "Disclaimer" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={scrollToTopOnQuickLinkNavigation}
                className="text-white/60 hover:text-[#B8922A] text-sm font-['DM_Sans'] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact & credentials */}
        <div>
          <div className="section-label mb-5">Contact & Credentials</div>
          <div className="flex flex-col gap-3 text-sm font-['DM_Sans'] text-white/70">
            <div className="flex items-start gap-2.5">
              <Phone size={14} className="text-[#B8922A] mt-0.5 shrink-0" />
              <a href="tel:" className="hover:text-[#B8922A] transition-colors">Contact for phone</a>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail size={14} className="text-[#B8922A] mt-0.5 shrink-0" />
              <a href="mailto:amz@justicelitsol.com" className="hover:text-[#B8922A] transition-colors">amz@justicelitsol.com</a>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin size={14} className="text-[#B8922A] mt-0.5 shrink-0" />
              <span>Lincoln, CA</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Shield size={14} className="text-[#B8922A] mt-0.5 shrink-0" />
              <div>
                <div>Licensed Legal Document Assistant</div>
                <div>Bonded: $25,000 (Jet Insurance)</div>
                <div>Bond #BX0081398</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40 font-['DM_Sans']">
          <span>© {new Date().getFullYear()} Justice Litigation Solutions. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/disclaimer" className="hover:text-[#B8922A] transition-colors">Disclaimer</Link>
            <span>Not a law firm. No legal advice provided.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
