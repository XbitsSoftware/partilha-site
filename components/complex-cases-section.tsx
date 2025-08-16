import Image from "next/image";
import { Button } from "@/components/ui/button";
import notebook from "@/public/images/notebook.png";
import Link from "next/link";

export default function ComplexCasesSection() {
  return (
    <section className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Usando flex-col-reverse para inverter no mobile */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl flex justify-center lg:justify-start lg:text-3xl font-bold text-[#380505] mb-6">
              Casos Complexos?
              <br />A ferramenta resolve
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
              <p>
                O sistema organiza automaticamente cenários desafiadores com
                lógica jurídica.
              </p>

              <p>
                Exemplo: múltiplos herdeiros de diferentes regimes de bens,
                exclusões de herdeiros e testamentos.
              </p>

              <p>
                <strong className="text-gray-900">
                  Você foca na estratégia jurídica, o sistema calcula os
                  quinhões hereditários.
                </strong>
              </p>

              <p>
                Comece sua primeira simulação e veja como a tecnologia pode
                transformar seu dia a dia jurídico.
              </p>
            </div>
            <Link
              className="flex justify-center lg:justify-start"
              href="/planos"
            >
              <Button
                size="lg"
                className="bg-[#840C0C] hover:bg-red-800 text-white px-8 py-4 text-base font-medium rounded-md transition-all duration-200 focus:ring-4 focus:ring-red-300"
              >
                Comece agora mesmo e aproveite
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div>
            <div className="relative">
              <Image
                src={notebook}
                alt="Profissional usando o sistema Partilha Online no laptop"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
