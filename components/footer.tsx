import Link from "next/link";

import {
  IconFacebookLogo,
  IconInstagramLogo,
  IconLinkedinLogo,
  IconLogoPartilha,
  IconWhatsappLogo,
} from "@/public/extensions/icons";

export default function Footer() {
  const socialLinks = [
    {
      icon: IconFacebookLogo,
      href: "https://www.facebook.com/profile.php?id=61576015531632",
      label: "Facebook",
    },
    {
      icon: IconInstagramLogo,
      href: "https://www.instagram.com/partilhaon?igsh=MW5rY2c2a3J4OTlubw==",
      label: "Instagram",
    },
    {
      icon: IconLinkedinLogo,
      href: "https://www.linkedin.com/company/partilha-online/",
      label: "LinkedIn",
    },
    {
      icon: IconWhatsappLogo,
      href: "https://wa.me/554188705498",
      label: "Whatsapp",
    },
  ];

  const footerLinks = {
    links: [
      { name: "Home", href: "/" },
      { name: "Funcionalidades", href: "/funcionalidades" },
      { name: "Planos", href: "/planos" },
      // { name: "Depoimentos", href: "depoimentos" },
      {
        name: "Área do cliente",
        href: "http://app.partilhaonline.com/login",
        target: "_blank",
      },
      {
        name: "Fale com a gente",
        href: "https://wa.me/554188705498",
        target: "_blank",
      },
    ],
  };

  return (
    <footer className="bg-[#380505] text-white" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-12  lg:pl-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2 text-center justify-center sm:justify-start sm:text-start">
            {/* <div className="flex items-start justify-center lg:justify-start">
              <p className=" mb-6 leading-relaxed">
                R. Dr. Manoel Pedro, 365 – Conj. 504, Sala 4
                <br />
                Cabral – Curitiba/PR – CEP 80035-030
              </p>
            </div> */}
            <div className="flex items-start mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <span className="text-[#E6C288]">+55 (41) 98870-5498</span>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center gap-3 mt-4">
                <span className="text-[#E6C288]">
                  contato@partilhaonline.com
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links MOBILE*/}
          <div className="col-span-2 lg:hidden lg:col-span-3 flex justify-center gap-12">
            <ul className="space-y-2 text-left">
              {footerLinks.links.slice(0, 3).map((link) => (
                <li className="pb-2" key={link.name}>
                  <Link
                    href={link.href}
                    target={link.target}
                    className="text-[#FFFFFF] hover:text-[#E6C288] text-[0.875rem]  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-amber-900 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-2 text-left">
              {footerLinks.links.slice(3).map((link) => (
                <li className="pb-2" key={link.name}>
                  <Link
                    href={link.href}
                    target={link.target}
                    className="text-[#FFFFFF] text-[0.875rem] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-amber-900 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Links WEB*/}
          <div className="col-span-2 hidden lg:col-span-3 lg:grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {Array.from({ length: 3 }).map((_, columnIndex) => (
              <ul className="space-y-2 text-left" key={columnIndex}>
                {footerLinks.links
                  .slice(columnIndex * 2, columnIndex * 2 + 2)
                  .map((link) => (
                    <li className="pb-2" key={link.name}>
                      <Link
                        href={link.href}
                        target={link.target}
                        className="text-[#FFFFFF] hover:text-[#E6C288] text-[0.875rem] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-amber-900 rounded"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            ))}
          </div>

          <div
            className="flex flex-col col-span-2 lg:col-span-1
           items-center justify-center ml-3 text-center"
          >
            <IconLogoPartilha
              height="70px"
              width="70px"
              className="mx-auto mb-2"
            />
            <span className="text-light text-sm text-[#FFFFFF] mt-1 md:mt-0">
              PARTILHA ONLINE
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#5E0909] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#FFFFFF] text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem]">
              <span className="mr-2">
                © X-Bits - Todos os direitos reservados
              </span>{" "}
              <span className="text-[#5E0909]">|</span>
              <span className="mx-2">Termos de uso</span>{" "}
              <span className="text-[#5E0909]">|</span>{" "}
              <a className="mx-2" href="politica-de-privacidade">Política de privacidade</a>
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 bg-[#5E0909] rounded-xl flex items-center justify-center hover:bg-amber-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-amber-900"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
