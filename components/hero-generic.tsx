"use client";

import WomanOffice from "@/public/images/woman-office.png";

interface HeroGenericProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  height?: "sm" | "md" | "lg" | "xl";
}

export const HeroGeneric = ({
  title = "Fale com a gente",
  subtitle,
  backgroundImage,
  className = "",
  height = "md",
}: HeroGenericProps) => {
  const heightClasses = {
    sm: "h-32 md:h-40",
    md: "h-40 md:h-48 lg:h-56",
    lg: "h-48 md:h-56 lg:h-64",
    xl: "h-56 md:h-64 lg:h-72",
  };
  return (
    <header
      className={`relative w-full ${heightClasses[height]} overflow-hidden ${className}`}
      role="banner"
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage || WomanOffice.src})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-[#380505] via-[#380505]/90 to-[#380505]/20"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[500] text-[#E6C288] mb-2 tracking-wide">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg md:text-xl lg:text-2xl text-[#F7F7F7] font-[400] max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
