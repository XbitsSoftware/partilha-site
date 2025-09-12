import {
  IconCalculator,
  IconNotificationStatus,
  IconSearchAlt,
} from "@/public/extensions/icons";
import { FileText, Users, Calculator, File } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: IconNotificationStatus,
      title: "Preenchimento Guiado e Inteligente",
      description: (
        <>
          O sistema orienta o preenchimento dos dados por meio de perguntas
          claras e objetivas,{" "}
          <span className="font-bold">conforme exigências legais.</span>
        </>
      ),
    },
    {
      icon: IconSearchAlt,
      title: "Organização de Casos Complexos com Lógica Jurídica",
      description:
        "Do simples ao altamente complexo, o sistema ajusta o cenário sucessório com base nos dados inseridos, incluindo testamentos, doações, vínculos de parentesco, herdeiros pré-mortos e pós-mortos, entre outros.",
    },
    {
      icon: IconCalculator,
      title: "Cálculos automáticos dos quinhões hereditários",
      description:
        "Com base no Código Civil, o sistema simula a divisão ideal, considerando exclusões, diferentes regimes de bens e múltiplas gerações.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-medium	 text-[#380505] mb-4">
            O que você pode fazer com o{" "}
            <span className="font-bold">Partilha Online</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-start text-start">
                <div className="flex items-start justify-start mb-6">
                  <feature.icon />
                </div>
                <h3 className="text-xl font-bold text-[#380505] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
