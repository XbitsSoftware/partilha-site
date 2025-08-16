// data/articles.ts
import { StaticImageData } from "next/image";
import ArticlesImage from "@/public/images/articles.png";
import AvatarDoutora from "@/public/images/avatar-doutora.png";

export interface Article {
  id: string;
  title: string;
  date: string;
  description: string;
  content?: string;
  author: {
    name: string;
    title: string;
    avatar: StaticImageData;
  };
  image: StaticImageData;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Artigo sobre sistema judiciário",
    date: "Maio, 22 de 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elementum sapien. Proin non augue vel est efficitur maximus. Nam a laoreet lacus. , sed volutpat neque porta. Suspendisse potenti. Aenea Donec dictum eros et erat posuere gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elementum sapien. Proin non augue vel est efficitur maximus. Nam a laoreet lacus. , sed volutpat neque porta. Suspendisse potenti. Aenea Donec dictum eros et erat posuere gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elementum sapien. Proin non augue vel est efficitur maximus. Nam a laoreet lacus. , sed volutpat neque porta. Suspendisse potenti. Aenea Donec dictum eros et erat posuere gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elementum sapien. Proin non augue vel est efficitur maximus. Nam a laoreet lacus. , sed volutpat neque porta. Suspendisse potenti. Aenea Donec dictum eros et erat posuere gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elementum sapien. Proin non augue vel est efficitur maximus. Nam a laoreet lacus. , sed volutpat neque porta. Suspendisse potenti. Aenea Donec dictum eros et erat posuere gravida.",
    content:
      "Conteúdo completo do artigo 1. Aqui você pode expandir mais ainda...",
    author: {
      name: "Dra. Maria",
      title: "Advogada especializada",
      avatar: AvatarDoutora,
    },
    image: ArticlesImage,
  },
  {
    id: "2",
    title: "Artigo sobre sistema judiciário",
    date: "Maio, 22 de 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elementum sapien. Proin non augue vel est efficitur maximus. Nam a laoreet lacus. Maecenas dictum lectus non sodales scelerisque. ",
    content:
      "Conteúdo completo do artigo 1. Aqui você pode expandir mais ainda...",
    author: {
      name: "Dra. Maria",
      title: "Advogada especializada",
      avatar: AvatarDoutora,
    },
    image: ArticlesImage,
  },
  {
    id: "3",
    title: "Artigo sobre sistema judiciário",
    date: "Maio, 22 de 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed ut elementum sapien. Proin non augue vel est efficitur maximus. Nam a laoreet lacus. Maecenas dictum lectus non sodales scelerisque. ",
    content:
      "Conteúdo completo do artigo 1. Aqui você pode expandir mais ainda...",
    author: {
      name: "Dra. Maria",
      title: "Advogada especializada",
      avatar: AvatarDoutora,
    },
    image: ArticlesImage,
  },
];
