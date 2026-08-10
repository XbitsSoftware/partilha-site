"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WomanOffice from "@/public/images/woman-office.png";
import WomanOfficeMobile from "@/public/images/woman-office-mobile.jpg";
import banner07 from "@/public/images/banner07.jpg";
import banner07Mobile from "@/public/images/banner07Mobile.jpg";
import AdvocateBannerDesktop from "@/public/images/banner-advocate-month.png";
import AdvocateBannerMobile from "@/public/images/banner-advocate-month-mobile.png";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import type React from "react";

const ADVOCATE_YELLOW = "#f9b122";
const MONTSERRAT = "var(--font-montserrat)";

function AdvocateMonthSlideContent() {
  return (
    <div className="w-full flex flex-col items-center text-center" style={{ fontFamily: MONTSERRAT }}>
      {/* Linha 1 — MÊS DO ADVOGADO */}
      <p
        className="uppercase font-semibold mb-1"
        style={{
          color: ADVOCATE_YELLOW,
          fontSize: "clamp(0.7rem, 1.2vw, 1.15rem)",
          letterSpacing: "0.15em",
        }}
      >
        Mês do Advogado!
      </p>

      {/* Linha 2 — [FACILITE SUA / PARTILHA COM] [15%] [OFF] em uma linha */}
      <div className="flex items-end justify-center leading-none mb-2" style={{ gap: "0.4rem" }}>
        {/* Sub-bloco "FACILITE SUA / PARTILHA COM" em 2 sub-linhas */}
        <div
          className="font-black text-white uppercase flex flex-col justify-end text-left"
          style={{
            fontSize: "clamp(1.1rem, 3vw, 2.7rem)",
            lineHeight: 1.05,
            paddingBottom: "0.15em",
          }}
        >
          <span>Facilite sua</span>
          <span>Partilha com</span>
        </div>

        {/* 15% */}
        <span
          className="font-black"
          style={{
            color: ADVOCATE_YELLOW,
            fontSize: "clamp(4rem, 11vw, 10rem)",
            lineHeight: 0.85,
            textShadow: "3px 5px 14px rgba(0,0,0,0.55)",
          }}
        >
          15%
        </span>

        {/* OFF */}
        <span
          className="font-black text-white uppercase"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 2.2rem)",
            lineHeight: 1,
            paddingBottom: "0.2em",
          }}
        >
          Off
        </span>
      </div>

      {/* Linha 3 — Descrição */}
      <p
        className="text-white leading-snug mb-3"
        style={{ fontSize: "clamp(0.7rem, 1.5vw, 1.25rem)", maxWidth: "38rem" }}
      >
        Em comemoração ao{" "}
        <strong className="font-bold">Dia do(a) Advogado(a)</strong>, oferecemos
        uma{" "}
        <strong className="font-bold">bonificação exclusiva</strong>{" "}
        no mês de agosto.
      </p>

      {/* Botão — fundo amarelo, texto branco, link para planos */}
      <Link
        href="/planos"
        className="font-bold uppercase tracking-widest rounded-full px-5 py-1.5 mb-2 text-white transition-all duration-200 hover:brightness-90 hover:scale-105 active:scale-95"
        style={{
          background: ADVOCATE_YELLOW,
          fontSize: "clamp(0.65rem, 1.2vw, 1rem)",
          letterSpacing: "0.12em",
          display: "inline-block",
        }}
      >
        Cupom ADV2026
      </Link>

      {/* Validade */}
      <p
        className="text-white/80 italic"
        style={{ fontSize: "clamp(0.6rem, 1.1vw, 0.95rem)" }}
      >
        Válido de{" "}
        <span style={{ color: ADVOCATE_YELLOW }} className="not-italic font-semibold">
          10
        </span>{" "}
        a{" "}
        <span style={{ color: ADVOCATE_YELLOW }} className="not-italic font-semibold">
          31
        </span>{" "}
        de agosto de 2026.
      </p>
    </div>
  );
}

type CarouselSlide = {
  imageDesktop: StaticImageData;
  imageMobile: StaticImageData;
  objectPosition: string;
  customContent?: React.ReactNode;
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

const carouselSlides: CarouselSlide[] = [
  {
    imageDesktop: AdvocateBannerDesktop,
    imageMobile: AdvocateBannerMobile,
    objectPosition: "center",
    customContent: <AdvocateMonthSlideContent />,
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
    buttonHref: "/planos",
  },
  {
    title: "O futuro da divisão patrimonial já está à sua disposição",
    description: "Comece sua primeira partilha agora mesmo.",
    buttonText: "Conhecer planos",
    imageDesktop: banner07,
    imageMobile: banner07Mobile,
    objectPosition: "top",
    buttonHref: "/planos",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
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
        {currentContent.customContent ? (
          currentContent.customContent
        ) : (
          <div className="max-w-xl text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#E6C288] mb-6 leading-tight">
              {currentContent.title}
            </h1>
            <p className="text-[0.875rem] font-normal md:text-lg text-[#F7F7F7] mb-8 leading-relaxed">
              {currentContent.description}
            </p>
            <Link
              href={currentContent.buttonHref ?? "/planos"}
              target="_self"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#840C0C] hover:bg-red-800 mb-12 text-white w-fit px-4 py-3 text-[0.875rem] md:text-[1rem] font-medium rounded-md"
              >
                {currentContent.buttonText}
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Indicadores de slide (sempre visíveis) */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-3">
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
    </section>
  );
}
