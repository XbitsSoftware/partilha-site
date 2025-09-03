"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PurchaseHero from "@/components/purchase-hero";
import CheckoutSection from "@/components/checkout/checkout-section";

export default function PurchasePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PurchaseHero />
        <CheckoutSection id={params.id} />
      </main>
      <Footer />
    </div>
  );
}
