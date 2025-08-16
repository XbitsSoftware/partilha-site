"use client";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Divide, Mail, Phone, PhoneCall, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutSection({ id }: { id: string }) {
  console.log("id", id);
  const [plan, setPlan] = useState<null | {
    name: string;
    price: string;
    features: string[];
  }>(null);

  const plans = [
    {
      id: 1,
      name: "Plano Básico",
      price: "39,90",
      features: ["1 usuário", "Até 10 pareceres por ano"],
      priceAnual: "478,80",
    },
    {
      id: 2,
      name: "Plano Essencial",
      price: "69,90",
      features: ["2 usuários", "Até 20 pareceres por ano"],
      priceAnual: "838,80",
    },
    {
      id: 3,
      name: "Plano Profissional",
      price: "99,90",
      features: ["5 usuários", "Até 30 pareceres por ano"],
      priceAnual: "1198,80",
    },
    {
      id: 4,
      name: "Plano Corporativo",
      price: "149,90",
      features: ["7 usuários", "Até 50 pareceres por ano"],
      priceAnual: "1798,80",
    },
  ];

  const [paymentMethod, setPaymentMethod] = useState("credit");

  const router = useRouter();

  useEffect(() => {
    if (id) {
      const selectedPlan = plans.find((plan) => plan.id.toString() === id);
      if (selectedPlan) {
        setPlan(selectedPlan);
      }
    }
  }, []);

  const handleTradePlan: (e: React.FormEvent) => void = (
    e: React.FormEvent
  ) => {
    router.push("/planos");
  };

  return (
    <div className="min-h-fit pb-24 pt-24 bg-white">
      <main className="max-w-[1800px] mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[30%] pr-10">
            {plan && (
              <div className="bg-white rounded-lg p-8 h-96 shadow-lg relative border border-red-500">
                <div className="text-start">
                  <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[1.25rem] lg:text-2xl font-bold mb-6 text-gray-900">
                    {plan.name}
                  </h2>
                  <div className="mb-6 ">
                    <span className="text-[2rem] sm:text-[2.5rem] md:text-[1.4rem] lg:text-3xl  font-bold text-gray-900">
                      R$ {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">/ mês</span>
                  </div>
                  <Divide className="w-full h-px bg-gray-300 mb-8" />
                  <ul className="space-y-3 mb-12 text-left">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-[0.85rem] sm:text-[1rem] md:text-[0.75rem] lg:text-[1rem]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleTradePlan}
                    className="w-1/2  text-red-800 border border-red-800 py-2 rounded-md hover:bg-[#840C0C] hover:text-white transition duration-300 ease-in-out"
                  >
                    Alterar plano
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Formulário de pagamento */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">
              Informações do comprador
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nome <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    className="mt-1 pl-10 block w-full border border-gray-300 rounded-md p-[0.65rem]"
                    placeholder="Digite"
                  />
                </div>
              </div>
              <div className=" sm:flex gap-4">
                <div className="flex-1 mb-4 sm:mb-0">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      placeholder="Digite"
                      className="mt-1 pl-10 p-[0.65rem] block w-full border border-gray-300 rounded-md "
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Telefone
                  </label>
                  <div className="relative">
                    <PhoneCall className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      placeholder="Digite"
                      type="tel"
                      className="mt-1 pl-10 p-[0.65rem] block w-full border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[1.4rem] font-semibold mb-4">
                  Método de pagamento
                </h3>
              </div>
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Modelo de pagamento */}
                <div>
                  <h4 className="text-lg mb-4">
                    Modelo de pagamento <span className="text-red-500">*</span>
                  </h4>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit"
                        checked={paymentMethod === "credit"}
                        onChange={() => setPaymentMethod("credit")}
                      />
                      <span className="text-gray-800">Cartão</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="pix"
                        checked={paymentMethod === "pix"}
                        onChange={() => setPaymentMethod("pix")}
                      />{" "}
                      <span className="text-gray-800">Pix</span>
                    </label>
                  </div>
                </div>

                {/* Tipo de cartão */}
                <div>
                  <h4 className="text-lg mb-4">
                    Tipo de cartão <span className="text-red-500">*</span>
                  </h4>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="cardType" value="credito" />
                      <span className="text-gray-800">Crédito</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input type="radio" name="cardType" value="debito" />
                      <span className="text-gray-800">Débito</span>
                    </label>
                  </div>
                </div>
              </div>

              {paymentMethod === "credit" && (
                <div className="space-y-4">
                  <div className="sm:flex gap-4">
                    <div className="flex-1 mb-4 sm:mb-0">
                      <label className="block text-sm font-medium text-gray-700">
                        Nome do titular do cartão
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Digite"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-[0.65rem]"
                      />
                    </div>
                    <div className="flex-2">
                      <label className="block text-sm font-medium text-gray-700">
                        CPF/CNPJ
                      </label>
                      <input
                        type="text"
                        placeholder="Digite"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-[0.65rem]"
                      />
                    </div>
                  </div>
                  <div className="sm:flex gap-4 pt-0 sm:pt-3 ">
                    <div className="flex-1 sm:mb-0 mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        placeholder="Digite"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-[0.65rem]"
                      />
                    </div>
                    <div className="sm:flex gap-4">
                      <div className="flex-1 sm:mb-0 mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Data de vencimento
                        </label>
                        <input
                          type="text"
                          placeholder="Digite"
                          className="mt-1 block w-full border border-gray-300 rounded-md p-[0.65rem]"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="Digite"
                          className="mt-1 block w-full border border-gray-300 rounded-md p-[0.65rem]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "pix" && (
                <div className="p-4 border border-green-500 rounded-md bg-green-50">
                  <p className="text-green-700 font-semibold">
                    Após continuar, você receberá um QR Code para pagamento via
                    Pix.
                  </p>
                </div>
              )}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-1/3 mt-6 bg-[#840C0C] hover:bg-red-800 text-white py-3 rounded-md font-medium"
                >
                  Começar a usar agora
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
