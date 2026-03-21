/* ============================================================
   Navigation — Justice Litigation Solutions
   Design: Sticky header, transparent → navy on scroll
   Cormorant Garamond logo + DM Sans nav links in small-caps
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/";
  const navBg = scrolled || !isHome
    ? "bg-[#1A2744] shadow-lg"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Scales icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="13.5" stroke="#B8922A" strokeWidth="1"/>
            <line x1="14" y1="6" x2="14" y2="22" stroke="#B8922A" strokeWidth="1.2"/>
            <line x1="7" y1="10" x2="21" y2="10" stroke="#B8922A" strokeWidth="1.2"/>
            <path d="M7 10 L4 16 Q5.5 18 7 16 Q8.5 18 10 16 L7 10Z" fill="#B8922A" opacity="0.85"/>
            <path d="M21 10 L18 16 Q19.5 18 21 16 Q22.5 18 24 16 L21 10Z" fill="#B8922A" opacity="0.85"/>
          </svg>
          <div>
            <div
              className="font-['Cormorant_Garamond'] text-lg font-semibold leading-tight tracking-wide text-white"
            >
              Justice Litigation
            </div>
            <div className="text-[0.6rem] tracking-[0.2em] uppercase text-[#B8922A] font-['DM_Sans']">
              Solutions
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.72rem] tracking-[0.14em] uppercase font-['DM_Sans'] font-medium transition-colors duration-200 relative group
                ${location === link.href ? "text-[#B8922A]" : "text-white/80 hover:text-white"}`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-[#B8922A] transition-all duration-300
                  ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-gold text-xs py-2.5 px-5"
          >
            Request Assistance
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1A2744] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.8rem] tracking-[0.14em] uppercase font-['DM_Sans'] font-medium
                ${location === link.href ? "text-[#B8922A]" : "text-white/80"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold text-xs py-3 px-5 text-center mt-2">
            Request Assistance
          </Link>
        </div>
      )}
    </header>
  );
}
