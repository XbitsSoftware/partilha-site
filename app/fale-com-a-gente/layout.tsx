import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fale com a Gente - Partilha Online | Entre em Contato Conosco",
  description:
    "Entre em contato com a equipe Partilha Online. Estamos prontos para esclarecer suas dúvidas e ajudar com sua atuação jurídica. Telefone, email e endereço disponíveis.",
  keywords: [
    "contato partilha online",
    "fale conosco",
    "suporte partilha online",
    "telefone partilha online",
    "email partilha online",
    "endereço partilha online",
    "atendimento jurídico",
    "contato advogado",
  ],
  openGraph: {
    title: "Fale com a Gente - Partilha Online",
    description: "Entre em contato conosco. Estamos prontos para ajudar com sua atuação jurídica.",
    url: "https://partilhaonline.com.br/fale-com-a-gente",
    images: [
      {
        url: "/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Fale com a Gente - Partilha Online",
      },
    ],
  },
  alternates: {
    canonical: "https://partilhaonline.com.br/fale-com-a-gente",
  },
}

export default function FaleComAGenteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
