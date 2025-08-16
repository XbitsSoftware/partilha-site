import Header from "@/components/header";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import HistorySection from "@/components/history-section";
import BenefitsSection from "@/components/benefits-section";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";

export default function HomePage() {
   return (
      <div className="min-h-screen bg-white">
         <Header />
         <main>
            <Hero />
            <AboutSection />
            <HistorySection />
            <BenefitsSection />
            <ServicesSection />
         </main>
         <Footer />
      </div>
   );
}
