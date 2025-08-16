import {
  IconCalendaryWithGavel,
  IconDocumentGavel,
  IconLawyerMan,
} from "@/public/extensions/icons";
import { Users, FileText, Shield } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: IconCalendaryWithGavel,
      title: "Advogados(as)",
      description:
        "Facilidade para começar com o pé direito. Conte com o preenchimento guiado, sugestões de disposição patrimonial, entre outros.",
    },
    {
      icon: IconDocumentGavel,
      title: "Escritórios de Advocacia",
      description:
        "Aumente a produtividade com cálculos automatizados, relatórios editáveis e organização inteligente de casos.",
    },
    {
      icon: IconLawyerMan,
      title: "Gestores Patrimoniais e Planejadores sucessórios",
      description:
        "Planejamento sucessório com mais clareza e estratégia. Simule divisões patrimoniais e visualize cenários futuros com base legal.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-stone-50" id="funcionalidades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium	 text-[#380505] mb-4">
            O que o{" "}
            <span className="text-[#380505] font-bold">Partilha Online</span>{" "}
            faz por você
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl pt-6 pl-6 pr-6 pb-8 shadow-[0_4px_15px_rgba(0,0,0,0.1),0_-2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15),0_-4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="flex flex-col">
                <div className="w-16 h-12  flex items-start justify-start mb-6">
                  <service.icon
                    className="w-8 h-8 text-amber-700"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl justify-start items-start font-bold text-[#380505] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
