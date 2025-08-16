"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Download } from "lucide-react";
import ArticlesImage from "@/public/images/articles.png";
import AvatarDoutora from "@/public/images/avatar-doutora.png";
import { StaticImageData } from "next/image";
import { HeroGeneric } from "@/components/hero-generic";
import ArtigosHero from "@/components/artigos-hero";
import { View } from "@/public/extensions/icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { articles } from "./data/data-articles";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  date: string;
  description: string;
  author: {
    name: string;
    title: string;
    avatar: StaticImageData;
  };
  image: StaticImageData;
}

const ArticleCard: React.FC<{ article: Article; highlight?: boolean }> = ({
  article,
  highlight = false,
}) => {
  const router = useRouter();
  const handleArtigosViewDetail = () => {
    router.push(`/artigos/${article.id}`);
  };
  function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trimEnd() + "...";
  }

  return (
    <article
      className={`flex flex-col h-[42rem] sm:h-[43rem] md:h-[40rem]   bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow duration-300 ${
        highlight ? "border-gray-300" : "border-gray-300"
      }`}
    >
      {/* Imagem do artigo */}
      <div className="relative p-6">
        <img
          src={article.image.src}
          alt={`Imagem ilustrativa para ${article.title}`}
          width={500}
          height={400}
          className="rounded-2xl shadow-lg bg-white object-cover w-full"
        />
        {/* Overlay sutil para melhor contraste */}
      </div>

      {/* Conteúdo do card */}
      <div className="p-6 pb-0 flex-1">
        {/* Título */}
        <h2
          id={`article-title-${article.id}`}
          className="text-2xl font-semibold text-[#380505] mb-2 line-clamp-2"
        >
          {article.title}
        </h2>

        {/* Data */}
        <time
          className="text-sm text-[#4A4A4A] font-medium mb-4 block"
          dateTime={article.date}
        >
          {article.date}
        </time>

        {/* Descrição */}
        <p
          title={article.description}
          className="text-gray-600 text-sm leading-relaxed line-clamp-none"
        >
          {truncateText(article.description, 320)}
        </p>
      </div>
      {/* Footer com autor e botão de download */}
      <div className="flex items-center justify-between lg:mt-2 2xl:mt-2   p-6 pt-0">
        {/* Informações do autor */}
        <div className="flex items-center gap-3 mt-">
          <img
            src={article.author.avatar.src}
            alt={`Foto de ${article.author.name}`}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
          />
          <div>
            <p className="font-medium text-[#380505] text-sm">
              {article.author.name}
            </p>
            <p className="text-xs text-[#AC5757]">{article.author.title}</p>
          </div>
        </div>

        {/* Botão de view */}
        <button
          onClick={handleArtigosViewDetail}
          className="flex items-center justify-center w-10 h-10 rounded-sm border text-[#840C0C] hover:text-white  border-[#840C0C] hover:border-red-300 hover:bg-[#840C0C] transition-colors duration-200 group"
          aria-label={`Baixar artigo: ${article.title}`}
          type="button"
        >
          <View className="transition-colors duration-300" />
        </button>
      </div>
    </article>
  );
};

export default function FuncionalidadesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ArtigosHero />
      <main>
        <section className={`py-8`} aria-label="Artigos jurídicos">
          <div className="container mx-auto px-10">
            {/* Grid responsivo dos cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 gap-6">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  highlight={article.id === "2"}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center mt-8">
            <p className="text-[#4A4A4A] text-[1rem]">
              Tem um artigo jurídico para compartilhar?
            </p>
            {/* <Link href="/fale-com-a-gente?origem=artigos"> */}
            <Link href="https://wa.me/554188705498" target="_blank">
              <Button
                variant="outline"
                className="border-[1px] border-[#840C0C] text-[#840C0C] hover:text-white hover:bg-red-800 px-3 py-1 rounded-md"
              >
                Envie o seu material e publique aqui com a gente!
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
