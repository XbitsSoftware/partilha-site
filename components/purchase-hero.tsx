import Image from "next/image";
import womanOffice from "@/public/images/woman-office.png";
import womanOfficeMobile from "@/public/images/woman-office-mobile.jpg";

export default function PurchaseHero() {
  return (
    <section className="relative h-96 flex items-center justify-start overflow-hidden">
      {/* Background: duas imagens - uma para mobile e outra para desktop */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: visível em telas pequenas */}
        <div className="relative w-full h-full block md:hidden">
          <Image
            src={womanOfficeMobile}
            alt="Mulher no escritório (mobile)"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop: visível em md+ */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src={womanOffice}
            alt="Mulher no escritório (desktop)"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-amber-100 mb-6">
            Plano Essencial
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            Tenha acesso à tecnologia jurídica que se adapta ao seu momento
            profissional, com planos acessíveis e diversos benefícios.
          </p>
        </div>
      </div>
    </section>
  );
}
