import Header from "@/components/header"
import FuncionalidadesHero from "@/components/funcionalidades-hero"
import FeaturesSection from "@/components/features-section"
import ProcessSection from "@/components/process-section"
import ComplexCasesSection from "@/components/complex-cases-section"
import Footer from "@/components/footer"

export default function FuncionalidadesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FuncionalidadesHero />
        <FeaturesSection />
        <ProcessSection />
        <ComplexCasesSection />
      </main>
      <Footer />
    </div>
  )
}
