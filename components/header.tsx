"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconLogoPartilha } from "@/public/extensions/icons";

export const dynamic = "force-static";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/", target: "" },
    { name: "Funcionalidades", href: "/funcionalidades", target: "" },
    { name: "Planos", href: "/planos", target: "" },
    // { name: "Depoimentos", href: "/depoimentos", target: "" },
    // { name: "Artigos", href: "/artigos", target: "" },
    {
      name: "Área do cliente",
      href: "http://app.partilhaonline.com/login",
      target: "_blank",
    },
  ];

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isAtTop ? "bg-[#380505] text-white" : "bg-white shadow text-black"
      }`}
    >
      <nav
        className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center gap-3"
            onClick={() => (window.location.href = "/")}
          >
            <div className="w-10 h-8 relative">
              {/* Geometric triangle logo */}
              <IconLogoPartilha width="45" height="35" />
            </div>
            <span className={`text-xl font-light `}>PARTILHA ONLINE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  target={item.target}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-normal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 rounded-md ${
                    isAtTop
                      ? "text-white hover:text-amber-200 focus:ring-offset-[#380505]"
                      : "text-red-950 hover:text-amber-200 focus:ring-offset-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              href="https://wa.me/554188705498"
              target="_blank"
              className="bg-[#840C0C] hover:bg-red-800 text-white px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200"
            >
              Fale com a gente
            </Link>
            <Link
              href="https://calendar.app.google/Zm6FifWArGsMX1468"
              target="_blank"
              className={`bg-transparent hover:bg-[#840C0C] hover:text-white hover:border-[#840C0C] border border-[#FDECEC] text-[#FDECEC] px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                isAtTop
                  ? "text-white hover:text-amber-200 focus:ring-offset-[#380505]"
                  : "text-red-800 border-red-800 hover:text-amber-200 "
              }`}
            >
              Agende uma demonstração
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-red-700 hover:bg-red-800 text-white w-12 h-10 rounded-md flex items-center justify-center"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-200 ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 left-0 h-full w-full max-w-[300px] bg-[#380505] z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
          id="mobile-menu"
        >
          <div
            className="flex flex-row items-center px-4 py-6 gap-2"
            onClick={() => (window.location.href = "/")}
          >
            <IconLogoPartilha width="50" height="35" />
            <span className="text-white text-lg font-light">
              PARTILHA ONLINE
            </span>
          </div>
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-amber-200 block px-3 py-2 text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-amber-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href={"https://wa.me/554188705498"} target="_blank">
              <Button className="bg-red-700 hover:bg-red-800 text-white w-full px-3 py-2 text-base font-medium rounded-md">
                Fale com a gente
              </Button>
            </Link>
            <Link
              href={"https://calendar.app.google/Zm6FifWArGsMX1468"}
              target="_blank"
            >
              <Button className="bg-transparent fit-content w-full hover:bg-[#840C0C] hover:text-white hover:border-[#840C0C] border border-[#FDECEC] text-[#FDECEC] px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200">
                Agende uma demonstração
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
