"use client";

import Image from "next/image";
import { Article, articles } from "@/app/artigos/data/data-articles";
import { useEffect, useState } from "react";

export default function ArtigoDetalhesPage({ id }: { id: string }) {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (id) {
      const found = articles.find((a) => a.id === id);
      setArticle(found || null);
    }
  }, [id]);

  if (!article) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold text-center">
          Artigo não encontrado
        </h1>
      </main>
    );
  }

  return (
    <main>
      <section className="py-8" aria-label="Artigos jurídicos">
        <div className="container mx-auto px-10">
          <section className="py-8" aria-label="Artigo detalhado">
            <div className="container mx-auto px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                {/* Imagem do artigo */}
                <div className="lg:col-span-1 order-1 lg:order-2">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src={article.image.src}
                      alt="Profissional jurídico em seu escritório"
                      className="w-full rounded-lg h-full object-contain"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>

                {/* Conteúdo do artigo */}
                <div className="order-2 lg:order-1 mt-8">
                  <p className="text-[1rem] font-normal text-[#4A4A4A]">
                    {article.description}
                  </p>
                  {/* Autor */}
                  <div className="flex mt-16 items-center">
                    <img
                      src={article.author.avatar.src}
                      alt="Foto da autora"
                      className="w-[48px] h-[48px] rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="text-lg font-semibold text-[#380505]">
                        {article.author.name}
                      </p>
                      <p className="text-sm text-[#AC5757]">
                        {article.author.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
