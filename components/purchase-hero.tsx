import Image from "next/image";
import womanOffice from "@/public/images/woman-office.png";
import womanOfficeMobile from "@/public/images/woman-office-mobile.jpg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PurchaseHero({ id: planId }: { id: string }) {
  const [plan, setPlan] = useState<null | {
    id: string;
    name: string;
    price: string;
    features: string[];
    priceAnual: string;
  }>(null);

  const plans = [
    {
      id: "2551e22f-32f7-444b-14fc-08ddeaf66fc6",
      name: "Plano Básico",
      price: "39,90",
      features: ["1 usuário", "Até 10 pareceres por ano"],
      priceAnual: "478,80",
    },
    {
      id: "cf7803c3-6f35-465d-14fd-08ddeaf66fc6",
      name: "Plano Essencial",
      price: "69,90",
      features: ["2 usuários", "Até 20 pareceres por ano"],
      priceAnual: "838,80",
    },
    {
      id: "ec547cbd-adcf-4009-14fe-08ddeaf66fc6",
      name: "Plano Profissional",
      price: "99,90",
      features: ["5 usuários", "Até 30 pareceres por ano"],
      priceAnual: "1198,80",
    },
    {
      id: "58e67ec5-9370-4fa8-14ff-08ddeaf66fc6",
      name: "Plano Corporativo",
      price: "149,90",
      features: ["7 usuários", "Até 50 pareceres por ano"],
      priceAnual: "1798,80",
    },
  ];
  const router = useRouter();
  useEffect(() => {
    if (planId) {
      const selectedPlan = plans.find((plan) => plan.id.toString() === planId);
      if (selectedPlan) {
        setPlan(selectedPlan);
      } else {
        router.push("/planos");
      }
    }
  }, []);

  return (
    <section className="relative h-80 2xl:h-[400px] flex items-center justify-start overflow-hidden">
      {/* Background Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src={womanOffice}
          alt="Plano e preços - fundo desktop"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background Mobile */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src={womanOfficeMobile}
          alt="Plano e preços - fundo mobile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#E6C288] mb-6">
            {plan?.name}
          </h1>
          <p className="text-[0.875rem] font-normal md:text-lg text-[#F7F7F7] leading-relaxed">
            Tenha acesso à tecnologia jurídica que se adapta ao seu momento
            profissional, com planos acessíveis e diversos benefícios.
          </p>
        </div>
      </div>
    </section>
  );
}
