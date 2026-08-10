import Header from "@/components/header";
import PlanosHero from "@/components/planos-hero";
import PricingSection from "@/components/pricing-section";
import ExtraBenefitsSection from "@/components/extra-benefits-section";
import Footer from "@/components/footer";
import BenefitsWarningSection from "@/components/warning-section-benefits";

export default function PlanosPage({
  searchParams,
}: {
  searchParams: { couponCode?: string };
}) {
  const couponCode = searchParams.couponCode;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PlanosHero />
        <PricingSection couponCode={couponCode} />
        <ExtraBenefitsSection />
        <BenefitsWarningSection />
      </main>
      <Footer />
    </div>
  );
}
