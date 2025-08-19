import Image from "next/image";
import WomanHome from "@/public/images/woman-home.png";

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <div className="lg:col-span-6 order-2 lg:order-2 flex flex-col justify-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#380505] mb-6">
              Um momento inevitável, mas que
              <span className=""> pode ser facilitado</span>
            </h2>

            <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-[0.9rem]">
              <p>
                A partilha de bens faz parte de um processo natural da vida. Com
                o <strong className="text-gray-900">Partilha Online</strong> é
                possível torná-la mais simples, previsível e segura.
              </p>
              <p>
                Desenvolvido justamente para apoiar advogados, o{" "}
                <strong className="text-gray-900">Partilha Online</strong>{" "}
                oferece agilidade nos cálculos e mais confiança nas decisões. A
                ferramenta simula desde os cenários mais simples até os mais
                complexos, com múltiplas gerações de herdeiros, regimes de bens
                diversos, testamentos, doações em vida, exclusões sucessórias,
                entre outros. Tudo isso, sempre respeitando as normas vigentes e
                alinhado à legislação brasileira.
              </p>
              <p>
                O <strong className="text-gray-900">Partilha Online</strong>{" "}
                gera uma sugestão de distribuição patrimonial conforme os dados
                preenchidos, trazendo ainda mais clareza e agilidade.
              </p>
              <p>
                <strong className="text-gray-900">
                  Potencialize sua atuação com tecnologia, otimizando seu tempo
                  com um assistente que auxiliará na análise da transmissão
                  patrimonial.
                </strong>
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div className="lg:col-span-6 order-1 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-3xl xl shadow-lg overflow-hidden">
              <Image
                src={WomanHome}
                alt="Profissional jurídico em seu escritório"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58.3333vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
