"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Divider,
  IconLogoPartilha,
  IconLogoPartilhaWithText,
  IconXWithCircle,
} from "@/public/extensions/icons";
import Link from "next/link";

export default function PricingSection() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // controla modal

  const router = useRouter();

  const plans = [
    {
      id: "30A78D72-370D-42BD-C50F-08DDE74576CF",
      name: "Plano Básico",
      price: "39,90",
      features: ["1 usuário", "Até 10 pareceres por ano"],
      priceAnual: "478,80",
    },
    {
      id: "30A78D72-370D-42BD-C50F-08DDE74576CF",
      name: "Plano Essencial",
      price: "69,90",
      features: ["2 usuários", "Até 20 pareceres por ano"],
      priceAnual: "838,80",
    },
    {
      id: "30A78D72-370D-42BD-C50F-08DDE74576CF",
      name: "Plano Profissional",
      price: "99,90",
      features: ["5 usuários", "Até 30 pareceres por ano"],
      priceAnual: "1198,80",
    },
    {
      id: "30A78D72-370D-42BD-C50F-08DDE74576CF",
      name: "Plano Corporativo",
      price: "149,90",
      features: ["7 usuários", "Até 50 pareceres por ano"],
      priceAnual: "1798,80",
    },
  ];

  const handleContratar = (index: number) => {
    const selectedPlan = plans[index];

    router.push(`/checkout/${selectedPlan.id}`);
  };

  return (
    <section className="py-16 lg:py-14 bg-[#FFFFFF]">
      <div className="max-w-[1400px] h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8 mb-12">
          {plans.map((plan, index) => {
            const isSelected = selectedPlanIndex === index;

            return (
              <div
                key={index}
                className={` rounded-lg p-8 shadow-lg relative transition-transform duration-200 ${
                  isSelected
                    ? "border-2 border-[#840C0C] scale-105 bg-[#840c0c18]"
                    : "border border-gray-200"
                }`}
              >
                <div className="text-start">
                  <h3 className="text-2xl font-bold text-[#380505] mb-6">
                    {plan.name}
                  </h3>
                  <span
                    className={` justify-start font-medium ${
                      isSelected ? "text-[#983131]" : "text-[#7A7A7A]"
                    }`}
                  >
                    12x de
                  </span>

                  <div className="mb-2 mt-2">
                    <span className="lg:text-4xl text-2xl md:text-3xl font-bold text-[#380505]">
                      R$ {plan.price}
                    </span>
                  </div>
                  <span
                    className={` justify-start font-medium ${
                      isSelected ? "text-[#AC5757]" : "text-[#7A7A7A]"
                    }`}
                  >
                    R$ {plan.priceAnual} /ano*
                  </span>

                  <ul className="space-y-4 mb-8 mt-4 pt-3  border-t border-[#CCCCCC]  text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1 h-1 bg-black rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-start">
                    <Button
                      onClick={() => {
                        setSelectedPlanIndex(index);
                        handleContratar(index);
                      }}
                      className="w-1/2 bg-[#840C0C] hover:bg-red-800 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200"
                      size="lg"
                    >
                      Contratar
                    </Button>
                    {/* <Button
                      onClick={() => setIsModalOpen(true)} // abre modal
                      className="w-1/2 bg-[#840C0C] hover:bg-red-800 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200"
                      size="lg"
                    >
                      Contratar
                    </Button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Custom Plan Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center mt-8">
          <p className="text-[#4A4A4A] mb-0 lg:mb-0">
            Precisa de mais pareceres e funcionalidades?
          </p>

          {/* <Link href="/fale-com-a-gente?origem=planopersonalizado"> */}
          <Link href="https://wa.me/554188705498" target="_blank">
            <Button
              variant="outline"
              className="border-2 border-red-800 text-red-800 hover:text-white hover:bg-red-800 px-6 py-2 rounded-md"
            >
              Entre em contato para um plano personalizado
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white mx-4 pb-8 pl-12 pr-4 content-normal rounded-lg shadow-lg w-fit max-w-[500px] h-fit text-center">
            <span className="flex items-end justify-end mt-3 mb-4 ">
              <IconXWithCircle
                height="3rem"
                width="3rem"
                className="cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              />
            </span>
            <span className="flex items-center justify-center mb-4 mr-6">
              <IconLogoPartilhaWithText height="8rem" width="8rem" />
            </span>
            <div className="border-b border-gray-300 mb-4 mr-6"></div>
            <h2 className="text-2xl text-[#983131] font-medium mb-4 mr-6">
              Nossas vendas iniciam no dia 15 de setembro.
            </h2>
            <p className="text-gray-700 text-[1rem] mb-4 mr-6">
              Entre em contato conosco e garanta descontos exclusivos de
              pré-vendas.
            </p>
            <Link href="https://wa.me/554188705498" target="_blank">
              <Button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#840C0C] mt-6 hover:bg-red-800 mr-6 text-white"
              >
                Entrar em contato
              </Button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
