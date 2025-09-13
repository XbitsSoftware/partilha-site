import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import womanBenefits from "@/public/images/woman-office-benefits.png";
import Link from "next/link";

export default function ExtraBenefitsSection() {
  const benefits = [
    "Teste o sistema agora mesmo.",
    "Desconto para estudantes e advogados em formação**.",
    "Sem burocracia.",
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <Image
                src={womanBenefits}
                alt="Profissional trabalhando no laptop"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[30px] font-medium flex justify-center lg:justify-start text-[#380505] mb-8">
              Benefícios Extras
            </h2>

            <ul className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 border-2 border-[#E2B874] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check
                      className="w-4 h-4 text-[#E2B874]"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-[#4A4A4A] font-bold text-[1rem]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* <Link
              href="/fale-com-a-gente"
              className="flex justify-center lg:justify-start"
            > */}
            <Link
              href={"https://wa.me/554188705498"}
              target="_blank"
              className="flex justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-[#840C0C] hover:bg-red-800 text-white px-8 py-4 text-base font-medium rounded-md transition-all duration-200 focus:ring-4 focus:ring-red-300"
              >
                Ficou com dúvida? Fale com a gente
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
