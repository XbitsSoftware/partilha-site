import type React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { IconAtentionToast, IconSucessToast } from "@/public/extensions/icons";

const inter = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Partilha Online - Seu Assistente Jurídico na Divisão de Bens",
  description:
    "Plataforma inteligente para advogados que agiliza processos de divisão patrimonial, inventários e divórcios. Automatize cálculos complexos e gere documentos padronizados com segurança e eficiência.",
  keywords: [
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
    title: "Partilha Online - Seu Assistente Jurídico na Divisão de Bens",
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
    title: "Partilha Online - Seu Assistente Jurídico na Divisão de Bens",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#92400e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              padding: "16px",
              borderRadius: "8px",
            },
            success: {
              style: { background: "#2ABB7F", color: "#FFFFFF" },
              icon: <IconSucessToast height={20} width={20} />,
            },
            error: {
              style: { background: "#EF5C48", color: "#FFFFFF" },
              icon: <IconAtentionToast height={20} width={20} />,
            },
          }}
        />{" "}
      </body>
    </html>
  );
}
