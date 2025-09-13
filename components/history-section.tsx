import Image from "next/image";
import WomanSigning from "@/public/images/womanSigning.png";

export default function HistorySection() {
  return (
    <section className="py-16 lg:py-24 bg-[#FBF6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Imagem - aparece primeiro no mobile */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              <Image
                src={WomanSigning}
                alt="Profissional jurídica trabalhando com documentos"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
          </div>

          {/* Texto - aparece depois no mobile */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <h2 className="text-[1.875rem] font-bold text-[#380505] mb-8">
              Nossa história
            </h2>

            <div className="space-y-6 text-[#4A4A4A] leading-relaxed text-[1rem]">
              <p>
                O <strong className="text-gray-600">Partilha Online</strong> foi
                idealizado por advogados com vasta experiência na área, testado
                e validado por escritórios de advocacia que buscavam uma forma
                mais eficiente de lidar com partilhas e divisões sucessórias.
              </p>

              <p>
                A solução nasceu a partir de desafios reais de advogados que
                enfrentam no dia a dia demandas sucessórias complexas e
                demoradas.
              </p>

              <p>
                Seu desenvolvimento é fruto de uma parceria com a{" "}
                <strong className="text-gray-700">
                  X-Bits Software Services Ltda.
                </strong>
                , empresa com mais de {""}
                <strong className="text-gray-700">
                  15 anos de experiência
                </strong>{" "}
                no mercado de tecnologia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
