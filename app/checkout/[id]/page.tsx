"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PurchaseHero from "@/components/purchase-hero";
import CheckoutSection from "@/components/checkout/checkout-section";
import { Suspense, use } from "react";

export default function PurchasePage({
   params,
   searchParams,
}: {
   params: Promise<{ id: string }>;
   searchParams: Promise<{ couponCode?: string }>;
}) {
   const { id } = use(params);
   const { couponCode } = use(searchParams);
   return (
      <div className="min-h-screen bg-white">
         <Header />
         <main>
            <Suspense fallback={<div>Loading...</div>}>
               <PurchaseHero id={id} />
            </Suspense>
            <CheckoutSection id={id} couponCode={couponCode} />
         </main>
         <Footer />
      </div>
   );
}
