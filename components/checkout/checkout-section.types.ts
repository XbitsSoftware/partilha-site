import { z } from "zod";

// Validação de CPF e CNPJ simples
const cpfRegex = /^\d{11}$/;
const cnpjRegex = /^\d{14}$/;

// Validação de telefone e CEP
const zipCodeRegex = /^\d{8}$/;

// Validação de cartão de crédito
const creditCardNumberRegex = /^\d{14,19}$/; // suportando 14 a 19 dígitos
const ccvRegex = /^\d{3,4}$/;

export const formSchema = z
  .object({
    planId: z.string().optional(),
    couponCode: z.string().nullable(),
    typePayment: z.enum(["Charge"]),
    customer: z.object({
      fullName: z.string().min(7, "Digite seu nome completo"),
      document: z.string().min(14, "CPF/CNPJ obrigatório"),
      email: z.string().email("Email inválido"),
      phone: z.string().min(9, "Telefone obrigatório"),
      mobilePhone: z.string(),
      address: z.object({
        street: z.string().min(1, "Rua obrigatória"),
        district: z.string().min(1, "Bairro obrigatório"),
        city: z.string().min(2, "Cidade obrigatória"),
        number: z.string().min(1, "Número obrigatório"),
        complement: z
          .string()
          .optional()
          .refine((val) => !val || (val.length >= 2 && val.length <= 100), {
            message: "Complemento deve ter entre 2 e 100 caracteres",
          }),
        state: z.string().min(1, "Selecione um estado"),
        zipCode: z.string().min(8, "CEP obrigatório"),
        country: z.string().optional(),
      }),
    }),
    charge: z.object({
      billingType: z.enum(["CreditCard", "Boleto", "Pix"]),
      installmentCount: z.number().optional(),
      description: z.string().optional(),
    }),
    payment: z.object({
      creditCard: z.object({
        number: z.string().optional(),
        expiryMonth: z.string().optional(),
        expiryYear: z.string().optional(),
        ccv: z.string().optional(),
      }),
      holderInfo: z.object({
        name: z.string().optional(),
        email: z.string().optional(),
        document: z.string().optional(),
      }),
      remoteIp: z.string().optional(),
    }),
    termsOfUse: z
      .boolean()
      .refine((value) => value === true, "Aceite os termos de uso"),
    productsInfo: z.boolean().optional(),
    totalValue: z.string().min(1, "Total obrigatório"),
  })
  .superRefine((data, ctx) => {
    // Campos obrigatórios para cartão
    if (data.charge.billingType === "CreditCard") {
      if (
        !data.payment.creditCard.number ||
        data.payment.creditCard.number.length < 16
      ) {
        ctx.addIssue({
          path: ["payment", "creditCard", "number"],
          message: "Número do cartão vazio ou inválido",
          code: z.ZodIssueCode.custom,
        });
      }
      if (!data.charge.installmentCount) {
        ctx.addIssue({
          path: ["charge", "installmentCount"],
          message: "Campo obrigatório",
          code: z.ZodIssueCode.custom,
        });
      }
      if (
        !data.payment.creditCard.ccv ||
        data.payment.creditCard.ccv.length < 3
      ) {
        ctx.addIssue({
          path: ["payment", "creditCard", "ccv"],
          message: "CCV obrigatório",
          code: z.ZodIssueCode.custom,
        });
      }
      if (
        !data.payment.holderInfo.name ||
        data.payment.holderInfo.name.length < 5
      ) {
        ctx.addIssue({
          path: ["payment", "holderInfo", "name"],
          message: "Nome do titular obrigatório",
          code: z.ZodIssueCode.custom,
        });
      }
      if (
        !data.payment.holderInfo.document ||
        data.payment.holderInfo.document.length < 14
      ) {
        ctx.addIssue({
          path: ["payment", "holderInfo", "document"],
          message: "CPF ou CNPJ do titular obrigatório",
          code: z.ZodIssueCode.custom,
        });
      }
      if (
        !data.payment.holderInfo.email ||
        !data.payment.holderInfo.email.includes("@")
      ) {
        ctx.addIssue({
          path: ["payment", "holderInfo", "email"],
          message: "Email do titular obrigatório",
          code: z.ZodIssueCode.custom,
        });
      }
      if (
        !data.payment.creditCard.expiryMonth ||
        data.payment.creditCard.expiryMonth.length < 2
      ) {
        ctx.addIssue({
          path: ["payment", "creditCard", "expiryMonth"],
          message: "Mês de expiração obrigatório",
          code: z.ZodIssueCode.custom,
        });
      }
      if (
        !data.payment.creditCard.expiryYear ||
        data.payment.creditCard.expiryYear.length < 4
      ) {
        ctx.addIssue({
          path: ["payment", "creditCard", "expiryYear"],
          message: "Ano de expiração obrigatório",
          code: z.ZodIssueCode.custom,
        });
      }
      // e assim por diante para expiryMonth, expiryYear, holderInfo, etc.
    }
  });

export interface TFormState {
  planId: string;
  couponCode: string | null;
  typePayment: string;
  customer: {
    fullName: string;
    document: string;
    email: string;
    phone: string;
    mobilePhone: string;
    address: {
      street: string;
      district: string;
      city: string;
      number: string;
      complement: string;
      state: string;
      zipCode: string;
      country: string;
    };
  };
  charge: {
    billingType: string;
    installmentCount: number;
    description: string;
  };
  payment: {
    creditCard: {
      number: string;
      expiryMonth: string;
      expiryYear: string;
      ccv: string;
    };
    holderInfo: {
      name: string;
      email: string;
      document: string;
    };
    remoteIp: string;
  };
  termsOfUse: boolean;
  productsInfo: boolean;
  totalValue: string;
}
