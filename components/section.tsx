import type React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  background?:
    | "white"
    | "gray"
    | "blue"
    | "dark"
    | "F2F2F2"
    | "F061837"
    | "D1E0FA"
    | "E5F2FF";
  padding?: "sm" | "md" | "lg" | "xl";
}

const backgroundStyles = {
  white: "bg-white",
  gray: "bg-gray-50",
  blue: "bg-blue-50",
  F2F2F2: "bg-[#F2F2F2]",
  F061837: "bg-[#061837]",
  D1E0FA: "bg-[#D1E0FA]",
  E5F2FF: "bg-[#E5F2FF]",
  dark: "bg-slate-900",
};

const paddingStyles = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-20",
  xl: "py-20 sm:py-24",
};

export function Section({
  children,
  className,
  containerSize = "xl",
  background = "white",
  padding = "lg",
}: SectionProps) {
  return (
    <section
      className={cn(
        backgroundStyles[background],
        paddingStyles[padding],
        className
      )}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
