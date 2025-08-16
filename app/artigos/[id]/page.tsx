"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import DetalhesArtigoHero from "@/components/artigosDetalhes-hero";
import DetalhesArtigoSection from "@/components/artigosDetalhes-section";

export default function ArtigosDetalhesPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DetalhesArtigoHero />
      <DetalhesArtigoSection id={params.id} />
      <Footer />
    </div>
  );
}
