export const COMPANY_INFO = {
  name: "XBits",
  fullName: "XBits - Soluções Inteligentes",
  tagline: "Softwares sob medida para ideias sem limites ",
  phone: "+55 (41) 98816-9417",
  email: "contato@xbits.com.br",
  address: {
    street: "R. Zeila Moura dos Santos, n.°101 – Sala 1014",
    city: "Cristo Rei – Curitiba/PR",
    zipCode: "CEP. 80.050-605",
  },
  social: {
    instagram:
      "https://www.instagram.com/partilhaon?igsh=MW5rY2c2a3J4OTlubw%3D%3D",
    facebook:
      "hhttps://web.facebook.com/profile.php?id=61576015531632&_rdc=1&_rdr#",
    linkedin:
      "https://www.linkedin.com/company/partilha-online/posts/?feedView=all",
    whatsapp: "https://wa.me/5541988705498",
  },
} as const;

export type NavigationItem = {
  href: string;
  target?: string;
  label: string;
  hasDropdown?: boolean;
  subItems?: NavigationItem[];
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/sobre-nos", label: "Quem somos" },
  { href: "/solucoes", label: "Soluções" },
  {
    href: "/produtos",
    label: "Produtos",
  },
  // { href: "/casos-de-sucesso", label: "Casos de sucesso" },
  {
    href: "https://wa.me/5541988169417?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.",
    label: "Fale conosco",
    target: "_blank",
    // hasDropdown: true,
    // subItems: [
    //   { href: "/fale-conosco", label: "Fale Conosco" },
    //   { href: "/fale-conosco/trabalhe-conosco", label: "Trabalhe Conosco" },
    //   { href: "/fale-conosco/faq", label: "Tire sua dúvida FAQ" },
    // ],
  },
];

export const PRODUCTS = [
  {
    id: "meu-ponto-online",
    name: "Meu Ponto Online",
    description:
      "Unimos plataformas e bancos de dados para garantir que seus processos sejam integrados, seguros e eficientes.",
    features: [
      "Controle de ponto digital",
      "Relatórios automatizados",
      "Integração com folha de pagamento",
      "Acesso via web e mobile",
    ],
  },
  {
    id: "eventos",
    name: "Eventos",
    description:
      "Analisamos sua estrutura, indicamos as tecnologias ideais e traçamos um plano para evolução digital sustentável.",
    features: [
      "Gestão completa de eventos",
      "Inscrições online",
      "Controle de participantes",
      "Relatórios em tempo real",
    ],
  },
  {
    id: "gateway",
    name: "Gateway",
    description:
      "Mapeamos, simplificamos e automatizamos fluxos operacionais para reduzir custos e aumentar a eficiência.",
    features: [
      "Integração de sistemas",
      "API Gateway",
      "Monitoramento em tempo real",
      "Segurança avançada",
    ],
  },
  {
    id: "partilha-online",
    name: "Partilha Online",
    description:
      "Reforçamos sua equipe com especialistas sob medida, garantindo flexibilidade e entregas ágeis e de qualidade.",
    features: [
      "Compartilhamento seguro",
      "Controle de acesso",
      "Versionamento de arquivos",
      "Colaboração em tempo real",
    ],
  },
] as const;
