"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import threePeopleTalking from "@/public/images/threePeopleTalking.png";
import WomanOffice from "@/public/images/woman-office.png";

import { useRouter } from "next/navigation";
import { IconCheckWithCircle } from "@/public/extensions/icons";

export default function BenefitsSection() {
  const router = useRouter();
  const benefits = [
    "Preenchimento guiado com lógica sucessória automatizada e confiável.",
    "Otimize tempo e reduza o retrabalho com cálculos precisos e automáticos.",
    "Tome decisões com base em relatórios claros e juridicamente fundamentados.",
  ];

  return (
    <section className="relative py-16 lg:py-24 text-white overflow-hidden">
      {/* Fundo da imagem */}
      <div className="absolute inset-0 z-0">
        <Image
          src={WomanOffice}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[#380505]/80"></div>

      {/* Conteúdo sobre o fundo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-6 gap-12 lg:gap-16 items-center">
          {/* Imagem acima no mobile, ao lado no desktop */}
          <div className="lg:col-span-3">
            <Image
              src={threePeopleTalking}
              alt="Equipe de profissionais jurídicos colaborando"
              width={500}
              height={300}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* Texto e botão */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl lg:text-4xl text-[#EFD7B1] font-bold mb-8">
              Benefícios que transformam
              <br />
              seu dia a dia jurídico
            </h2>

            <ul className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6rounded-full flex items-center justify-center mt-1 md:mt-0">
                    <IconCheckWithCircle />
                  </div>
                  <span className="text-[#FBF6EE] text-sm lg:text:lg leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="bg-[#840C0C] hover:bg-red-800 text-white px-8 py-4 text-base font-medium rounded-md transition-all duration-200 focus:ring-4 focus:ring-red-300"
              onClick={() => {
                router.push("/planos");
              }}
            >
              Quero conhecer os planos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
