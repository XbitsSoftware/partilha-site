import Header from "@/components/header";
import ContactHero from "@/components/contact-hero";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function FaleComAGentePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const origem =
    typeof searchParams.origem === "string" ? searchParams.origem : undefined;
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactHero origem={origem} />
        <ContactSection origem={origem} />
      </main>
      <Footer />
    </div>
  );
}
