import Image from "next/image";
import WomanOffice from "@/public/images/woman-office.png";

export default function DetalhesArtigoHero() {
  return (
    <section className="relative h-80 2xl:h-[400px] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={WomanOffice}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#E6C288] mb-6">
            Artigo sobre sistema judiciário
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            <span className="text-[#F7F7F7] font-normal">
              {(() => {
                const date = new Date();
                const day = date.getDate();
                const month = date
                  .toLocaleDateString("pt-BR", { month: "long" })
                  .replace(/^./, (char) => char.toUpperCase());
                const year = date.getFullYear();
                return `${month}, ${day} de ${year}`;
              })()}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
