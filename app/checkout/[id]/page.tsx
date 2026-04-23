import Header from "@/components/header";
import Footer from "@/components/footer";
import PurchaseHero from "@/components/purchase-hero";
import CheckoutSection from "@/components/checkout/checkout-section";

export default async function PurchasePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ couponCode?: string }>;
}) {
  const { id } = await params;
  const { couponCode } = await searchParams;
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PurchaseHero id={id} />
        <CheckoutSection id={id} couponCode={couponCode} />
      </main>
      <Footer />
    </div>
  );
}
