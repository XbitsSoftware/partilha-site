import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image = "/images/og-default.jpg",
  url = "",
  type = "website",
}: SEOProps): Metadata {
  const siteName =
    "Partilha Online - Seu assistente jurídico na divisão patrimonial";
  const fullTitle = title.includes("Partilha Online")
    ? title
    : `${title} | ${siteName}`;
  const fullUrl = `https://partilhaonline.com.br${url}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Partilha Online" }],
    creator: "Partilha Online",
    publisher: "Partilha Online",
    robots: "index, follow",
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@xbits",
    },
    alternates: {
      canonical: fullUrl,
    },
    other: {
      "theme-color": "#1e40af",
      "msapplication-TileColor": "#1e40af",
    },
  };
}

export const defaultSEO = {
  title: "Softwares sob medida para ideias sem limites",
  description:
    "Desenvolvemos soluções tecnológicas personalizadas para transformar seu negócio e impulsionar sua eficiência.",
  keywords: [
    "desenvolvimento de software",
    "sistemas sob medida",
    "transformação digital",
    "consultoria em TI",
    "automação de processos",
  ],
};
