export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Cadastre os dados do caso",
      description:
        "Nome do titular do patrimônio, vínculos, bens do titular do patrimônio e demais informações.",
    },
    {
      number: "2",
      title: "Sistema simula a partilha",
      description: "Com base nas regras legais, o cenário é gerado.",
    },
    {
      number: "3",
      title: "Baixe o documento",
      description: "Editável, claro e pronto para auxiliar sua atuação.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#f9f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-medium text-[#654615] mb-4">
            Como Funciona – Etapa por Etapa
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ">
          {steps.map((step, index) => (
            <div key={index} className="pt-6 flex flex-col">
              {/* Número com efeito quebra-cabeça */}

              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-md p-0 pb-6 pr-4 pt-0 flex flex-col flex-1">
                <div className=" left-0 z-10">
                  <div className="absolute bg-[#FBF6EE] h-[53px] w-[53px] rounded-br-xl">
                    <div className="w-12 h-12 bg-[#8F6C35] text-[#F7ECDA] rounded-tl-xl rounded-br-xl flex items-center justify-center text-3xl font-bold shadow-md">
                      {step.number}
                    </div>
                  </div>
                </div>
                <div className="pl-16">
                  <h3 className="text-[20px] pt-4 font-bold text-[#654615] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[16px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
