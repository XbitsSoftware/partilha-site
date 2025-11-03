"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  IconLogoPartilhaWithText,
  IconXWithCircle,
} from "@/public/extensions/icons";
import Link from "next/link";

export default function PricingSection({
  couponCode,
}: {
  couponCode?: string;
}) {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productId = "add7e59b-ab1c-4a6d-8811-d2188f232590";
  const urlGatewayApi = "https://api.xgateway.com.br/api/";
  const router = useRouter();
  const [plans, setPlans] = useState([
    {
      id: "",
      name: "",
      price: 0,
      description: "",
      cycle: "",
      active: true,
      productId: "",
      planDetail: {
        eLimitation: "",
        premiumBalance: 0,
        user: 0,
      },
    },
  ]);

  const fetchPlans = async () => {
    try {
      const result = await fetch(
        `${urlGatewayApi}Plan/find_plan_by_product_id?productId=${productId}`
      ).then((res) => res.json());

      setPlans(result);
    } catch (error) {
      console.error("Erro ao buscar planos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleContratar = (index: number) => {
    const selectedPlan = plans[index];
    if (couponCode) {
      router.push(
        `/checkout/${selectedPlan.id}?couponCode=${encodeURIComponent(
          couponCode
        )}`
      );
      return;
    } else {
      router.push(`/checkout/${selectedPlan.id}`);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <section className="py-16 lg:py-14 bg-[#FFFFFF]">
      <div className="max-w-[1400px] h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8 mb-12">
          {plans.map((plan, index) => {
            const isSelected = selectedPlanIndex === index;

            return (
              <div
                key={index}
                className={`flex flex-col justify-between rounded-lg p-8 shadow-lg relative transition-transform duration-200 ${
                  isSelected
                    ? "border-2 border-[#840C0C] scale-105 bg-[#840c0c18]"
                    : "border border-gray-200"
                }`}
              >
                <div className="text-start flex-1">
                  <h3 className="text-2xl font-bold text-[#380505] mb-6">
                    {plan.name}
                  </h3>
                  <span
                    className={`justify-start font-medium ${
                      isSelected ? "text-[#983131]" : "text-[#7A7A7A]"
                    }`}
                  >
                    12x de
                  </span>

                  <div className="mb-2 mt-2">
                    <span className="lg:text-4xl text-2xl md:text-3xl font-bold text-[#380505]">
                      R$ {(plan.price / 12).toFixed(2)}
                    </span>
                  </div>

                  <span
                    className={`justify-start font-medium ${
                      isSelected ? "text-[#AC5757]" : "text-[#7A7A7A]"
                    }`}
                  >
                    R$ {plan.price} / {plan.planDetail.premiumBalance}{" "}
                    pareceres*
                  </span>

                  <ul className="space-y-4 mb-8 mt-4 pt-3 border-t border-[#CCCCCC] text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-black rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-[0.85rem]">
                        {plan.planDetail.user}
                        {plan.planDetail.user > 1 ? " usuários" : " usuário"}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Botão sempre fixado no fundo */}
                <div className="flex justify-start pb-2 mt-auto">
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
    </section>
  );
}
