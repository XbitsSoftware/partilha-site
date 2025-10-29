"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WomanOffice from "@/public/images/woman-office.png";
import WomanOfficeMobile from "@/public/images/woman-office-mobile.jpg";
import banner07 from "@/public/images/banner07.jpg";
import banner07Mobile from "@/public/images/banner07Mobile.jpg";
import bannerFenallaw25 from "@/public/bannerFenallaw25Desktop.jpg";
import bannerFenallaw25Mobile from "@/public/bannerFenallaw25Mobile.jpg";
import bannerIBDFAMobile from "@/public/bannerIBDFAM25Mobile.png";
import bannerIBDFADesktop from "@/public/bannerIBDFAM25Desktop.png";
import Link from "next/link";

const carouselSlides = [
  {
    title: "Estamos no IBDFAM 2025!",
    description: (
      <>
        <span>
          Apresentando soluções que transformam a rotina jurídica com
          tecnologia, agilidade e precisão. Realize seu pré-cadastro e receba um
          cupom com até
          <strong> 10% de desconto!</strong>
        </span>
        <br />
        <strong>Oferta válida até 31/10/2025.</strong>
      </>
    ),
    buttonText: "Pré-Cadastro",
    imageDesktop: bannerIBDFADesktop,
    imageMobile: bannerIBDFAMobile,
    objectPosition: "center",
    link: "https://api.whatsapp.com/send/?phone=5541988705498&text=Ol%C3%A1.+Quero+aproveitar+os+descontos+da+IBDFAM.%0A%0A%2A%2ANome+completo%3A%2A%2A%0A%2A%2ATelefone%3A%2A%2A%0A%2A%2AE-mail%3A%2A%2A&type=phone_number&app_absent=0", // <- AQUI está o link personalizado
  },
  {
    title: "A Fenalaw 2025 foi incrível!",
    description: (
      <>
        <span>
          E as condições especiais do <strong>Partilha Online</strong> continuam
          por tempo limitado. Realize seu pré-cadastro e receba um cupom com até
          <br />
          <strong> 10% de desconto!</strong>
        </span>
        <br />
        <strong>Oferta válida até 31/10/2025.</strong>
      </>
    ),
    buttonText: "Pré-Cadastro",
    imageDesktop: bannerFenallaw25,
    imageMobile: bannerFenallaw25Mobile,
    objectPosition: "top",
    link: "https://api.whatsapp.com/send/?phone=5541988705498&text=Ol%C3%A1.+Quero+aproveitar+os+descontos+da+Fenalaw.%0A%0A%2A%2ANome+completo%3A%2A%2A%0A%2A%2ATelefone%3A%2A%2A%0A%2A%2AE-mail%3A%2A%2A&type=phone_number&app_absent=0", // <- AQUI está o link personalizado
  },
  {
    title: (
      <>
        <span className="text-[#E6C288]">Seu assistente </span>
        <span className="text-[#FBF6EE]">jurídico </span>
        <br />
        <span className="text-[#FBF6EE]">na </span>
        <span className="text-[#E6C288]">divisão patrimonial</span>
      </>
    ),
    description:
      "Otimize seu tempo e minimize riscos com uma ferramenta que aprimora sua atuação profissional.",
    buttonText: "Conheça nossos planos e aproveite",
    imageDesktop: WomanOffice,
    imageMobile: WomanOfficeMobile,
    objectPosition: "center",
  },
  {
    title: "O futuro da divisão patrimonial já está à sua disposição",
    description: "Comece sua primeira partilha agora mesmo.",
    buttonText: "Conhecer planos",
    imageDesktop: banner07,
    imageMobile: banner07Mobile,
    objectPosition: "top",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta se está em mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // breakpoint md
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 16000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentContent = carouselSlides[currentSlide];
  const currentImage = isMobile
    ? currentContent.imageMobile
    : currentContent.imageDesktop;

  return (
    <section className="relative h-[25rem] w-full md:h-[28rem] 2xl:h-[32rem] overflow-hidden flex items-center justify-center">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentImage}
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="w-full h-full object-cover"
          style={{ objectPosition: currentContent.objectPosition }}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-24 max-w-7xl">
        <div className="max-w-xl text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#E6C288] mb-6 leading-tight">
            {currentContent.title}
          </h1>
          <p className="text-[0.875rem] font-normal md:text-lg text-[#F7F7F7] mb-8 leading-relaxed">
            {currentContent.description}
          </p>
          <Link
            href={currentContent.link || "/planos"}
            target={currentContent.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#840C0C] hover:bg-red-800 mb-12 text-white w-fit px-4 py-3 text-[0.875rem] md:text-[1rem]  font-medium rounded-md"
            >
              {currentContent.buttonText}
            </Button>
          </Link>

          {/* Indicadores */}
          <div className="flex space-x-3 mt-6 mb-5">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-12 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-amber-300"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
