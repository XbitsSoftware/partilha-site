import { IconAspas } from "@/public/extensions/icons";
import { FileText, Users, Calculator, File } from "lucide-react";
import draMariaPng from "../public/images/draMaria.png";
import carlosFerreira from "../public/images/carlos-ferreira.png";
import franciscaPereira from "../public/images/franciscaPereira.png";
import marcosMuller from "../public/images/marcosMuller.png";
import pauloRodrigues from "../public/images/pauloRodrigues.png";
import marceloSmith from "../public/images/marceloSmith.png";

export default function DepoimentosSection() {
  const features = [
    {
      icon: IconAspas,
      title: "",
      description:
        "“Nunca mais perdi tempo com cálculos errados. O Partilha Online transformou a maneira como gerencio casos de sucessão!”",
      name: "Dra. Maria",
      job: "Advogada especializada",
      src: draMariaPng,
    },
    {
      icon: IconAspas,
      title: "",
      description:
        "“Nunca mais perdi tempo com cálculos errados. O Partilha Online transformou a maneira como gerencio casos de sucessão!”",
      name: "Carlos Ferreira",
      job: "Advogado",
      src: carlosFerreira,
    },
    {
      icon: IconAspas,
      title: "",
      description:
        "“Nunca mais perdi tempo com cálculos errados. O Partilha Online transformou a maneira como gerencio casos de sucessão!”",
      name: "Francisca Pereira",
      job: "Advogada especializada",
      src: franciscaPereira,
    },
    {
      icon: IconAspas,
      title: "",
      description:
        "“Nunca mais perdi tempo com cálculos errados. O Partilha Online transformou a maneira como gerencio casos de sucessão!”",
      name: "Marcos Müller",
      job: "Advogado especializado",
      src: marcosMuller,
    },
    {
      icon: IconAspas,
      title: "",
      description:
        "“Nunca mais perdi tempo com cálculos errados. O Partilha Online transformou a maneira como gerencio casos de sucessão!”",
      name: "Paulo Rodrigues",
      job: "Advogado tributário",
      src: pauloRodrigues,
    },
    {
      icon: IconAspas,
      title: "",
      description:
        "“Nunca mais perdi tempo com cálculos errados. O Partilha Online transformou a maneira como gerencio casos de sucessão!”",
      name: "Marcelo Smith",
      job: "Advogado",
      src: marceloSmith,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-[1px] border-gray-300 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-start">
                <div className="w-full h-2 rounded-full flex items-start justify-start ml-2 mb-2">
                  {feature.icon({
                    height: "16",
                    width: "16",
                    onClick: undefined,
                    className: undefined,
                  })}{" "}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#4A4A4A] text-[0.975rem] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="flex items-start mt-8">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 shrink-0">
                  <img
                    src={feature.src.src}
                    alt={feature.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 shrink-0"
                  />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-base font-normal text-[#380505]">
                    {feature.name}
                  </span>
                  <span className="text-[0.75rem] font-normal text-[#AC5757]">
                    {feature.job}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
