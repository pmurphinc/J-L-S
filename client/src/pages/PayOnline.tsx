import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CreditCard, Lock, Mail, ShieldCheck } from "lucide-react";

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/14AbJ3b4d0RYaEEfIJ7IY00";

export default function PayOnline() {
  useEffect(() => {
    document.title = "Pay Online | Justice Litigation Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "#1A2744" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 60% 40%, #B8922A22 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto relative z-10 text-center">
          <div className="section-label mb-4">Secure Client Payments</div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-white mb-6">
            Pay Online
          </h1>
          <div className="gold-rule mx-auto mb-6" />
          <p className="text-white/70 font-['DM_Sans'] max-w-2xl mx-auto leading-relaxed">
            Justice Litigation Solutions accepts secure online payments through Stripe for approved invoices,
            retainers, consultation fees, filing fees, and other agreed service charges.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#FDF8F0" }} className="py-20 flex-1">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white border border-[#e8dfd0] p-7 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
              <div className="w-14 h-14 rounded-full border border-[#B8922A] bg-[#F5EDE8] flex items-center justify-center shrink-0">
                <Lock size={22} className="text-[#B8922A]" aria-hidden="true" />
              </div>

              <div className="flex-1">
                <div className="section-label mb-3">Payment Portal</div>
                <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#1A2744] mb-5">
                  Make a secure payment
                </h2>
                <p className="text-[#2C3A50] font-['DM_Sans'] leading-relaxed mb-5">
                  Justice Litigation Solutions accepts secure online payments through Stripe. You may use this
                  page to pay an invoice, retainer, consultation fee, filing fee, or other agreed service charge.
                </p>

                <div className="bg-[#F5EDE8] border-l-4 border-[#B8922A] px-5 py-4 mb-8">
                  <p className="text-sm text-[#2C3A50] font-['DM_Sans'] leading-relaxed">
                    <strong className="font-semibold text-[#1A2744]">Important note:</strong> Please do not
                    include confidential case details in any payment notes or memo fields. If you are unsure
                    what amount to pay, please contact our office before submitting payment.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  <a
                    href={STRIPE_PAYMENT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Make a secure payment through Stripe in a new tab"
                    className="btn-gold inline-flex items-center justify-center gap-2 text-sm py-4 px-7"
                  >
                    <CreditCard size={17} aria-hidden="true" />
                    Make a Secure Payment
                  </a>
                  <div className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#6B7A99] font-['DM_Sans']">
                    <ShieldCheck size={15} className="text-[#B8922A] shrink-0" aria-hidden="true" />
                    Processed by Stripe
                  </div>
                </div>

                <div className="mt-8 flex items-start gap-3 text-sm text-[#6B7A99] font-['DM_Sans'] leading-relaxed">
                  <Mail size={16} className="text-[#B8922A] mt-0.5 shrink-0" aria-hidden="true" />
                  <p>
                    Questions about your payment? Please contact Justice Litigation Solutions before submitting
                    payment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#1A2744] p-6 md:p-7 text-white">
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold mb-3">
              Payment Disclaimer
            </h2>
            <p className="text-white/70 text-sm font-['DM_Sans'] leading-relaxed">
              Submitting an online payment does not create an attorney-client relationship unless a written
              engagement agreement has been signed by both parties.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
