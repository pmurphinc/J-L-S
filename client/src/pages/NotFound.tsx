import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main
        className="flex-1 flex items-center justify-center text-center py-32 px-6"
        style={{ backgroundColor: "#FDF8F0" }}
      >
        <div>
          <div className="font-['Cormorant_Garamond'] text-[8rem] font-light leading-none mb-4" style={{ color: "rgba(184,146,42,0.2)" }}>
            404
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-4xl font-semibold mb-4" style={{ color: "#1A2744" }}>
            Page Not Found
          </h1>
          <div className="gold-rule mx-auto mb-6" />
          <p className="font-['DM_Sans'] mb-8 max-w-md mx-auto" style={{ color: "#6B7A99" }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn-gold">
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
