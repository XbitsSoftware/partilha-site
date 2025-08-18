import { EMask } from "@/app/enum/enum";

type TRegexDicionary = {
  regex: RegExp;
  replace: string;
  maxLength: number;
};

const regexMask: Partial<Record<EMask, TRegexDicionary>> = {
  [EMask.CPF]: {
    regex: /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/,
    replace: "$1.$2.$3-$4",
    maxLength: 11,
  },
  [EMask.CPF_CNPJ]: {
    regex: /^(\d*)$/,
    replace: "$1",
    maxLength: 14,
  },
  [EMask.CNPJ]: {
    regex: /^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})$/,
    replace: "$1.$2.$3/$4-$5",
    maxLength: 14,
  },
  [EMask.CEP]: {
    regex: /^(\d{0,5})(\d{0,3})$/,
    replace: "$1-$2",
    maxLength: 8,
  },
  [EMask.PHONE]: {
    regex: /^(\d{0,2})(\d{0,5})(\d{0,4})$/,
    replace: "($1) $2-$3",
    maxLength: 11,
  },
  [EMask.PHONE_NO_DDD]: {
    regex: /^(\d{0,5})(\d{0,4})$/,
    replace: "$1-$2",
    maxLength: 9,
  },
  [EMask.PHONE_DYNAMIC]: {
    regex: /^(\d*)$/,
    replace: "$1",
    maxLength: 11,
  },
  [EMask.DATE]: {
    regex: /^(\d{0,2})(\d{0,2})(\d{0,4})$/,
    replace: "$1/$2/$3",
    maxLength: 8,
  },
  [EMask.TIME]: {
    regex: /^(\d{0,2})(\d{0,2})$/,
    replace: "$1:$2",
    maxLength: 4,
  },
  [EMask.CREDIT_CARD]: {
    regex: /^(\d*)$/,
    replace: "$1",
    maxLength: 16,
  },
  [EMask.NUMBERS_4_DIGITS]: {
    regex: /^(\d{0,4})$/,
    replace: "$1",
    maxLength: 4,
  },
  [EMask.CVV]: {
    regex: /^(\d*)$/,
    replace: "$1",
    maxLength: 4,
  },
};

export const useMask = (
  text: string | null | undefined,
  mask: EMask
): string => {
  if (!text) return "";

  switch (mask) {
    case EMask.TEXT_ONLY:
      return text.replace(/[0-9]/g, "");

    case EMask.CREDIT_CARD: {
      let cleanedText = text.replace(/\D/g, ""); // só números

      // Detecta bandeira pelo BIN
      const firstTwoDigits = cleanedText.slice(0, 2);
      let maxLength = 16; // padrão
      let formatRegex: RegExp;

      if (firstTwoDigits === "34" || firstTwoDigits === "37") {
        // Amex
        maxLength = 15;
        formatRegex = /^(\d{0,4})(\d{0,6})(\d{0,5})$/;
      } else if (firstTwoDigits === "36" || firstTwoDigits === "38") {
        // Diners Club
        maxLength = 14;
        formatRegex = /^(\d{0,4})(\d{0,6})(\d{0,4})$/;
      } else {
        // Visa, MasterCard, Discover, JCB etc.
        maxLength = 19;
        // Cria blocos de 4 e, se sobrar, bloco de 3 ou 1
        formatRegex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,3})$/;
      }

      cleanedText = cleanedText.slice(0, maxLength);
      const match = cleanedText.match(formatRegex);
      if (!match) return cleanedText;

      return match.slice(1).filter(Boolean).join(" ");
    }

    case EMask.CVV: {
      // Remove tudo que não for número
      let cleanedText = text.replace(/\D/g, "");

      // Limita o número de dígitos (3 por padrão, 4 se for Amex)
      const maxLength = 4; // ou 3 se quiser ignorar Amex
      cleanedText = cleanedText.slice(0, maxLength);

      return cleanedText;
    }

    case EMask.NUMBERS_ONLY:
      return text.replace(/\D/g, "");

    case EMask.NUMBERS_4_DIGITS: {
      let cleanedText = text.replace(/\D/g, ""); // só números
      return cleanedText.slice(0, 4); // limita a 4 dígitos
    }

    case EMask.CPF_CNPJ: {
      let cleanedText = text.replace(/\D/g, "");
      const isCpf = cleanedText.length <= 11;

      const maskValues = isCpf ? regexMask[EMask.CPF] : regexMask[EMask.CNPJ];
      if (!maskValues) return cleanedText;

      const { regex, replace, maxLength } = maskValues;
      cleanedText = cleanedText.slice(0, maxLength);

      return cleanedText.replace(regex, replace).replace(/[\.\-\/:]+$/, "");
    }

    case EMask.PHONE_DYNAMIC: {
      let cleanedText = text.replace(/\D/g, "");

      // Decide pelo tamanho
      switch (cleanedText.length) {
        case 8: // fixo sem DDD
          return cleanedText.replace(/^(\d{4})(\d{4})$/, "$1-$2");

        case 9: // celular sem DDD
          return cleanedText.replace(/^(\d{5})(\d{4})$/, "$1-$2");

        case 10: // fixo com DDD
          return cleanedText.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");

        case 11: // celular com DDD
          return cleanedText.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");

        default:
          // Aplica máscara progressiva enquanto digita
          if (cleanedText.length <= 2) {
            return cleanedText;
          } else if (cleanedText.length <= 6) {
            return cleanedText.replace(/^(\d{2})(\d*)$/, "($1) $2");
          } else if (cleanedText.length <= 10) {
            return cleanedText.replace(/^(\d{2})(\d{4})(\d*)$/, "($1) $2-$3");
          } else {
            return cleanedText.replace(/^(\d{2})(\d{5})(\d*)$/, "($1) $2-$3");
          }
      }
    }

    default:
      const maskValues = regexMask[mask];
      if (!maskValues) return text;

      const { regex, replace, maxLength } = maskValues;
      let cleanedText = text.replace(/\D/g, "");
      cleanedText = cleanedText.slice(0, maxLength);
      return cleanedText.replace(regex, replace).replace(/[\.\-\/:]+$/, "");
  }
};
