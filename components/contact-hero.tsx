import Image from "next/image";
import womanOffice from "@/public/images/woman-office.png";
import womanOfficeMobile from "@/public/images/woman-office-mobile.jpg";

export default function ContactHero({ origem }: { origem?: string }) {
  const title =
    origem === "planopersonalizado"
      ? "Plano Personalizado"
      : origem === "artigos"
      ? "Artigos"
      : "Fale com a gente";

  return (
    <section className="relative h-80 2xl:h-[400px] flex items-center justify-start overflow-hidden">
      {/* Background Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src={womanOffice}
          alt="Contato - fundo desktop"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background Mobile */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src={womanOfficeMobile}
          alt="Contato - fundo mobile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#E6C288] mb-6">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
