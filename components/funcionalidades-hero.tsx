import Image from "next/image";
import WomanOffice from "@/public/images/woman-office.png";
import WomanOfficeMobile from "@/public/images/woman-office-mobile.jpg";

export default function FuncionalidadesHero() {
  return (
    <section className="relative 2xl:h-[400px] h-80 flex items-center justify-start overflow-hidden">
      {/* Background Desktop */}
      <div className="absolute w-full inset-0 z-0 hidden md:block">
        <Image
          src={WomanOffice}
          alt="Fundo com mulher no escritório"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background Mobile */}
      <div className="absolute w-full inset-0 z-0 block md:hidden">
        <Image
          src={WomanOfficeMobile}
          alt="Fundo com mulher no escritório (mobile)"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#E6C288] mb-6">
            Funcionalidades
          </h1>
          <p className="text-[0.875rem] font-normal md:text-lg text-[#F7F7F7]">
            Do cálculo à decisão jurídica, conte com o{" "}
            <strong className="font-bold">Partilha Online</strong>.
            <br />
            <span className="font-bold">
              Seu assistente jurídico na divisão de bens
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
