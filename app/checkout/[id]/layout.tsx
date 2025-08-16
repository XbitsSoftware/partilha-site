import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos e Preços - Partilha Online | Escolha o Plano Ideal para Você",
  description:
    "Conheça nossos planos acessíveis: Essencial, Profissional e Corporativo. Tecnologia jurídica que se adapta ao seu momento profissional com diversos benefícios.",
  keywords: [
    "planos partilha online",
    "preços partilha online",
    "plano essencial",
    "plano profissional",
    "plano corporativo",
    "assinatura jurídica",
    "software jurídico preços",
    "divisão de bens preços",
  ],
  openGraph: {
    title: "Planos e Preços - Partilha Online",
    description:
      "Escolha o plano ideal para sua atuação jurídica. Planos acessíveis com diversos benefícios.",
    url: "https://partilhaonline.com.br/planos",
  },
  alternates: {
    canonical: "https://partilhaonline.com.br/planos",
  },
};

export default function PlanosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
