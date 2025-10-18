import { useForm } from "react-hook-form";
import { formSchema, TFormState } from "./checkout-section.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Modal from "../modalDefault/modalDefault";

export const UseCheckoutController = (planId: string, couponCode?: string) => {
  const [plan, setPlan] = useState<any | null>(null);
  const [plans, setPlans] = useState<any[]>([]);
  const productId = "add7e59b-ab1c-4a6d-8811-d2188f232590";
  const urlGatewayApi = "https://api.xgateway.com.br/api/";
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("CreditCard");
  const [couponValid, setCouponValid] = useState(false);
  const [valueCoupon, setValueCoupon] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [pixData, setPixData] = useState<null | {
    qrCode: string;
    expirationDate: string;
    copyPaste: string;
  }>(null);
  const router = useRouter();
  const hookForm = useForm<TFormState>({
    defaultValues: {
      planId: "",
      couponCode: "" as string | null,
      typePayment: "Charge",
      customer: {
        fullName: "",
        document: "",
        email: "",
        phone: "",
        mobilePhone: "",
        address: {
          street: "",
          district: "",
          city: "",
          number: "",
          complement: "",
          state: "",
          zipCode: "",
          country: "",
        },
      },
      charge: {
        billingType: paymentMethod,
        installmentCount: 1,
        description: "Compra realizada no Partilha Online",
      },
      payment: {
        creditCard: {
          number: "",
          expiryMonth: "",
          expiryYear: "",
          ccv: "",
        },
        holderInfo: {
          name: "",
          email: "",
          document: "",
        },
        remoteIp: "",
      },
      termsOfUse: false,
      productsInfo: false,
      totalValue: plan?.price ?? "0.00",
    },
    resolver: zodResolver(formSchema),
  });

  const estados = [
    { sigla: "AC", nome: "Acre" },
    { sigla: "AL", nome: "Alagoas" },
    { sigla: "AP", nome: "Amapá" },
    { sigla: "AM", nome: "Amazonas" },
    { sigla: "BA", nome: "Bahia" },
    { sigla: "CE", nome: "Ceará" },
    { sigla: "DF", nome: "Distrito Federal" },
    { sigla: "ES", nome: "Espírito Santo" },
    { sigla: "GO", nome: "Goiás" },
    { sigla: "MA", nome: "Maranhão" },
    { sigla: "MT", nome: "Mato Grosso" },
    { sigla: "MS", nome: "Mato Grosso do Sul" },
    { sigla: "MG", nome: "Minas Gerais" },
    { sigla: "PA", nome: "Pará" },
    { sigla: "PB", nome: "Paraíba" },
    { sigla: "PR", nome: "Paraná" },
    { sigla: "PE", nome: "Pernambuco" },
    { sigla: "PI", nome: "Piauí" },
    { sigla: "RJ", nome: "Rio de Janeiro" },
    { sigla: "RN", nome: "Rio Grande do Norte" },
    { sigla: "RS", nome: "Rio Grande do Sul" },
    { sigla: "RO", nome: "Rondônia" },
    { sigla: "RR", nome: "Roraima" },
    { sigla: "SC", nome: "Santa Catarina" },
    { sigla: "SP", nome: "São Paulo" },
    { sigla: "SE", nome: "Sergipe" },
    { sigla: "TO", nome: "Tocantins" },
  ];

  const fetchPlans = async () => {
    try {
      const result = await fetch(
        `${urlGatewayApi}Plan/find_plan_by_product_id?productId=${productId}`
      ).then((res) => res.json());

      setPlans(result);
    } catch (error) {
      console.error("Erro ao buscar planos:", error);
    }
  };
  const handleSubmit = async (formData: any) => {
    hookForm.setValue("charge.billingType", paymentMethod);
    const validation = await hookForm.trigger();
    if (!validation) return;
    const payload = {
      planId: planId,
      couponCode: formData.couponCode,
      typePayment: formData.typePayment,
      customer: {
        fullName: formData.customer.fullName,
        document: unmask(formData.customer.document), // CPF/CNPJ
        email: formData.customer.email,
        phone: unmask(formData.customer.phone), // telefone
        mobilePhone: unmask(formData.customer.mobilePhone), // celular
        address: {
          street: formData.customer.address.street,
          district: formData.customer.address.district,
          city: formData.customer.address.city,
          number: formData.customer.address.number,
          complement: formData.customer.address.complement?.trim()
            ? formData.customer.address.complement
            : null,
          state: formData.customer.address.state,
          zipCode: unmask(formData.customer.address.zipCode), // CEP
          country: "Brasil",
        },
      },
      charge: {
        billingType: paymentMethod,
        installmentCount: formData.charge.installmentCount,
        description: formData.charge.description,
      },
      payment: {
        creditCard: {
          number: unmask(formData.payment.creditCard.number), // cartão
          expiryMonth: formData.payment.creditCard.expiryMonth,
          expiryYear: formData.payment.creditCard.expiryYear,
          ccv: formData.payment.creditCard.ccv,
        },
        holderInfo: {
          name: formData.payment.holderInfo.name,
          email: formData.payment.holderInfo.email,
          document: unmask(formData.payment.holderInfo.document), // CPF/CNPJ do titular
        },
        remoteIp: formData.payment.remoteIp,
      },
    };

    if (!payload.couponCode) {
      delete (payload as { couponCode?: string }).couponCode;
    }
    buyPlan(payload);
  };

  const buyPlan = async (formData: any) => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMessage = data?.[0]?.value || "Erro desconhecido";
        toast.error(
          <div>
            <strong className="block text-lg font-medium">Atenção!</strong>
            <span className="text-sm font-normal">{errorMessage}</span>
          </div>
        );
        return;
      }
      // Se o pagamento for com cartão de credito
      if (formData.charge.billingType === "CreditCard" && res.ok) {
        setIsOpenModal(true);
        toast.success(
          <div>
            <strong className="block text-lg font-medium">Sucesso!</strong>
            <span className="text-sm font-normal">
              Acompanhe em seu e-mail os próximos passos.
            </span>
          </div>
        );
        return;
      }

      // Se o pagamento for com piix
      if (formData.charge.billingType === "Pix" && data.encodedImage) {
        toast.success(
          <div>
            <strong className="block text-lg font-medium">Sucesso!</strong>
            <span className="text-sm font-normal">
              Após o pagamento, acompanhe em seu e-mail os próximos passos.
            </span>
          </div>
        );
        setPixData({
          qrCode: data.encodedImage,
          expirationDate: data.expirationDate,
          copyPaste: data.payload,
        });
      }
    } catch (err) {
      toast.error("Erro ao enviar pagamento");
      console.error("Erro ao enviar pagamento", err);
    } finally {
      setLoading(false);
    }
  };

  const handleTradePlan: (e: React.FormEvent) => void = (
    e: React.FormEvent
  ) => {
    router.push("/planos");
  };
  const unmask = (value: string | undefined | null) => {
    if (!value) return "";
    return value.replace(/\D/g, "");
  };

  const setValueInTotalValue = () => {
    if (!plan) {
      hookForm.setValue("totalValue", "0.00");
      return;
    }

    const value = String(plan?.price ?? "0");
    const numericValue = Number(
      value.replace("R$", "").replace(/\./g, "").replace(",", ".")
    );

    if (isNaN(numericValue)) {
      hookForm.setValue("totalValue", "0.00");
      return;
    }

    let finalValue = numericValue;

    if (paymentMethod === "Pix") {
      finalValue = numericValue * 0.9; // aplica 10% de desconto
    }

    if (couponValid) {
      finalValue = valueCoupon;
    }

    hookForm.setValue("totalValue", finalValue.toString().replace(".", ","));
  };

  const handleSearchZipCode = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const zipCode = unmask(event.target.value).trim();
    try {
      if (zipCode.length == 8) {
        const response = await fetch(`/api/cep?cep=${zipCode}`);
        const data = await response.json();
        if (!data || !data.street) {
          return;
        }
        hookForm.setValue("customer.address.city", data.city);
        hookForm.setValue("customer.address.state", data.state);
        hookForm.setValue("customer.address.street", data.street);
        hookForm.setValue("customer.address.district", data.district);
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  const handleCouponValidate = async (couponCode: string) => {
    const code = couponCode.trim();
    if (code.length <= 13) {
      hookForm.setValue("totalValue", plan?.price.toString() ?? "0.00");
      setCouponValid(false);
      setValueCoupon(0);
      return;
    }

    try {
      const response = await fetch(
        `/api/checkout?Code=${code}&ProductId=add7e59b-ab1c-4a6d-8811-d2188f232590&PlanId=${plan?.id}&BillingType=${paymentMethod}`
      );

      const data = await response.json();

      if (data.result === "Valid") {
        hookForm.setValue("totalValue", data.valueForDiscount.toString());
        setValueCoupon(data.valueForDiscount);
        setCouponValid(true);
      } else {
        setValueCoupon(0);
        setCouponValid(false);
      }
    } catch (error) {
      console.error("Erro ao validar cupom:", error);
      setValueCoupon(0);
      setCouponValid(false);
      toast.error("Erro ao validar cupom. Tente novamente mais tarde.");
    }
  };
  const hasCouponInUrl = async (code: string) => {
    if (code && code.length > 0) {
      hookForm.setValue("couponCode", code);
      await handleCouponValidate(code);
    } else {
      hookForm.setValue("couponCode", "");
    }
  };

  useEffect(() => {
    setValueInTotalValue();
    handleCouponValidate(hookForm.getValues("couponCode") ?? "");
  }, [paymentMethod, plan, couponValid]);

  useEffect(() => {
    if (planId && plans.length > 0) {
      const selectedPlan = plans.find((p) => p.id === planId);
      if (selectedPlan) {
        setPlan(selectedPlan);
      }
    }
  }, [planId, plans]);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        hookForm.setValue("payment.remoteIp", data.ip);
      })
      .catch((err) => console.error("Erro ao obter IP:", err));
  }, []);

  useEffect(() => {
    fetchPlans();
    hasCouponInUrl(couponCode || "");
  }, []);

  return {
    hookForm,
    estados,
    plan,
    loading,
    paymentMethod,
    pixData,
    couponValid,
    isOpenModal,
    setIsOpenModal,
    handleSubmit,
    unmask,
    handleTradePlan,
    setPaymentMethod,
    setPixData,
    handleSearchZipCode,
    handleCouponValidate,
  };
};
