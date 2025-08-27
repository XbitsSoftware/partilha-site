import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Depoimentos - Partilha Online | Seu assistente jurídico na divisão patrimonial",
  description:
    "Conheça todos os depoimentos do Partilha Online: preenchimento guiado, organização de casos complexos, cálculos automáticos e muito mais para otimizar sua atuação jurídica.",
  keywords: [
    "depoimentos partilha online",
    "preenchimento guiado",
    "casos complexos",
    "cálculos hereditários",
    "sistema jurídico",
    "automação legal",
    "divisão de bens",
    "quinhões hereditários",
  ],
  openGraph: {
    title: "Depoimentos - Partilha Online",
    description:
      "Conheça todas as funcionalidades do Partilha Online para otimizar sua atuação jurídica.",
    url: "https://partilhaonline.com.br/funcionalidades",
  },
  alternates: {
    canonical: "https://partilhaonline.com.br/funcionalidades",
  },
};

export default function DepoimentosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
