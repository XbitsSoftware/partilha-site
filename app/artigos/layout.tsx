import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Artigos - Partilha Online | Seu Assistente Jurídico na Divisão de Bens",
   description:
      "Conheça todas as Artigos do Partilha Online: preenchimento guiado, organização de casos complexos, cálculos automáticos e muito mais para otimizar sua atuação jurídica.",
   keywords: [
      "Artigos partilha online",
      "preenchimento guiado",
      "casos complexos",
      "cálculos hereditários",
      "sistema jurídico",
      "automação legal",
      "divisão de bens",
      "quinhões hereditários",
   ],
   openGraph: {
      title: "Artigos - Partilha Online",
      description:
         "Conheça todas as Artigos do Partilha Online para otimizar sua atuação jurídica.",
      url: "https://partilhaonline.com.br/Artigos",
   },
   alternates: {
      canonical: "https://partilhaonline.com.br/Artigos",
   },
};

export default function ArtigosLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return children;
}
