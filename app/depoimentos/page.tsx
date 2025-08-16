import Header from "@/components/header";
import Footer from "@/components/footer";
import DepoimentosHero from "@/components/depoimentos-hero";
import DepoimentosSection from "@/components/depoimentos-section";

export default function DepoimentosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <DepoimentosHero />
        <DepoimentosSection />
      </main>
      <Footer />
    </div>
  );
}
