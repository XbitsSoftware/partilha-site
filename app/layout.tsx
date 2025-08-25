import type React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Partilha Online - Seu assistente jurídico na divisão patrimonial",
  description:
    "Plataforma inteligente para advogados que agiliza processos de divisão patrimonial, inventários e divórcios. Automatize cálculos complexos e gere documentos padronizados com segurança e eficiência.",
  keywords: [
    "divisão patrimonial",
    "inventário de bens",
    "divisão de bens",
    "inventário",
    "divórcio",
    "partilha patrimonial",
    "advogado",
    "direito de família",
    "sucessões",
    "plataforma jurídica",
    "automatização jurídica",
  ],
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png",
  },
  authors: [{ name: "Partilha Online" }],
  creator: "Partilha Online",
  publisher: "Partilha Online",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://partilhaonline.com.br",
    siteName: "Partilha Online",
    title: "Partilha Online - Seu assistente jurídico na divisão patrimonial",
    description:
      "Plataforma inteligente para advogados que agiliza processos de divisão patrimonial, inventários e divórcios.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Partilha Online - Plataforma Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partilha Online - Seu assistente jurídico na divisão patrimonial",
    description:
      "Plataforma inteligente para advogados que agiliza processos de divisão patrimonial.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://partilhaonline.com.br",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#92400e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
