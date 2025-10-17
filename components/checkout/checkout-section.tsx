"use client";
import { use, useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  CreditCard,
  Divide,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Search,
  User,
} from "lucide-react";
import Input from "../input/input";
import Select from "../select/select";
import { EMask } from "@/app/enum/enum";
import { UseCheckoutController } from "./checkout-section.controller";
import { Loading } from "../loading/loading";
import { ModalPix } from "../modalPix/modalPix";
import Modal from "../modalDefault/modalDefault";
import { useRouter } from "next/navigation";

export default function CheckoutSection({ id }: { id: string }) {
  const {
    hookForm,
    estados,
    plan,
    loading,
    paymentMethod,
    pixData,
    couponValid,
    isOpenModal,
    setIsOpenModal,
    handleTradePlan,
    handleSubmit,
    setPaymentMethod,
    setPixData,
    handleSearchZipCode,
    handleCouponValidate,
  } = UseCheckoutController(id);
  const onSubmit = async (data: any) => {
    await handleSubmit(data);
  };

  return (
    <div className="min-h-fit pb-24 pt-24 bg-white">
      {pixData && (
        <ModalPix
          qrCode={pixData.qrCode}
          expirationDate={pixData.expirationDate}
          copyPaste={pixData.copyPaste}
          onClose={() => {
            setPixData(null);
            window.location.href = "/";
          }}
        />
      )}
      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          description="Acompanhe em seu e-mail os próximos passos."
          onClick={() => {
            setIsOpenModal(false);
            window.location.href = "/";
          }}
          title="Sucesso!"
          btnDescription="Fechar"
        />
      )}

      <main className="max-w-[1800px] mx-auto py-12 px-4">
        {loading && <Loading />}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[30%] pr-10">
            {plan && (
              <div className="bg-white rounded-lg p-8 h-fit shadow-lg relative border border-red-500">
                <div className="text-start">
                  <h2 className="text-[1.5rem] sm:text-[1.5rem] md:text-[1.25rem] lg:text-2xl font-bold mb-6 text-[#380505]">
                    {plan.name}
                  </h2>
                  <div className="text-[#7A7A7A] mb-2">12x de</div>
                  <div className="mb-3 ">
                    <span className="text-[1.5rem] sm:text-[1.5rem] md:text-[1.7em] lg:text-3xl  font-bold text-[#380505]">
                      R$ {(plan.price / 12).toFixed(2)}
                    </span>
                    <span className="text-gray-600 ml-2">/ mês</span>
                  </div>
                  <div className="mb-5 text-[0.85rem] font-bold text-[#A3A3A3]">
                    <span className="">R$ {plan.price}</span>
                    <span className="ml-2">/ ano*</span>
                  </div>
                  <Divide className="w-full h-px bg-gray-300 mb-8" />
                  <ul className="space-y-3 mb-12 text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-[0.85rem] sm:text-[1rem] md:text-[0.75rem] lg:text-[1rem]">
                        {plan.planDetail.user}{" "}
                        {plan.planDetail.user === 1 ? "usuário" : "usuários"}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-[0.85rem] sm:text-[1rem] md:text-[0.75rem] lg:text-[1rem]">
                        Até {plan.planDetail.premiumBalance} pareceres por ano
                      </span>
                    </li>
                  </ul>
                  <div className="flex justify-start">
                    <button
                      onClick={handleTradePlan}
                      className="w-32 text-red-800 border border-red-800 py-2 rounded-md hover:bg-[#840C0C] hover:text-white transition duration-300 ease-in-out"
                    >
                      Alterar plano
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Formulário de pagamento */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">
              Informações de faturamento
            </h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-12 sm:gap-4 gap-4">
                <div className="col-span-12 md:col-span-8 mb-4 sm:mb-0">
                  <Input
                    type="text"
                    name="customer.fullName"
                    label="Nome completo"
                    iconLeft={
                      <User className="text-gray-400 mt-1 w-[1rem] h-[1rem]" />
                    }
                    mandatory
                    id="name"
                    control={hookForm.control}
                    errors={hookForm.formState.errors}
                    placeholder="Digite"
                  />
                </div>
                <div className="col-span-12 md:col-span-4 sm:gap-4 gap-4">
                  <Input
                    label="CPF / CNPJ"
                    mandatory
                    type="text"
                    name="customer.document"
                    mask={EMask.CPF_CNPJ}
                    id="document"
                    control={hookForm.control}
                    errors={hookForm.formState.errors}
                    placeholder="Digite"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-12 sm:gap-4 gap-4">
                <div className="col-span-12 md:col-span-6 mb-4 sm:mb-0">
                  <Input
                    label="E-mail"
                    mandatory
                    type="text"
                    iconLeft={
                      <Mail className="text-gray-400 mt-1 w-[1rem] h-[1rem]" />
                    }
                    control={hookForm.control}
                    errors={hookForm.formState.errors}
                    name="customer.email"
                    id="email"
                    placeholder="Digite"
                  />
                </div>
                <div className="col-span-12 md:col-span-3">
                  <Input
                    label="Telefone"
                    mandatory
                    type="text"
                    mask={EMask.PHONE_DYNAMIC}
                    iconLeft={
                      <PhoneCall className="text-gray-400 mt-1 w-[1rem] h-[1rem]" />
                    }
                    control={hookForm.control}
                    errors={hookForm.formState.errors}
                    name="customer.phone"
                    id="phone"
                    placeholder="Digite"
                  />
                </div>
                <div className="col-span-12 md:col-span-3">
                  <Input
                    label="Telefone móvel"
                    type="text"
                    mask={EMask.PHONE_DYNAMIC}
                    iconLeft={
                      <PhoneCall className="text-gray-400 mt-1 w-[1rem] h-[1rem]" />
                    }
                    control={hookForm.control}
                    errors={hookForm.formState.errors}
                    name="customer.mobilePhone"
                    id="mobilePhone"
                    placeholder="Digite"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-12 sm:gap-4 gap-2">
                <div className="col-span-12 md:col-span-3">
                  <Input
                    name="customer.address.zipCode"
                    label="CEP"
                    mandatory
                    type="text"
                    mask={EMask.CEP}
                    onChange={(event) => handleSearchZipCode(event)}
                    iconLeft={
                      <Search className="text-gray-400 mt-1 w-[1rem] h-[1rem]" />
                    }
                    control={hookForm.control}
                    placeholder="Digite"
                    errors={hookForm.formState.errors}
                    id="zipCode"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <Input
                    label="Rua"
                    mandatory
                    type="text"
                    control={hookForm.control}
                    id="street"
                    placeholder="Digite"
                    errors={hookForm.formState.errors}
                    name="customer.address.street"
                  />
                </div>
                <div className="col-span-12 md:col-span-3">
                  <Input
                    label="Número"
                    mandatory
                    type="text"
                    control={hookForm.control}
                    mask={EMask.NUMBERS_ONLY}
                    id="number"
                    placeholder="Digite"
                    errors={hookForm.formState.errors}
                    name="customer.address.number"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-12 sm:gap-4 gap-2">
                <div className="col-span-12 md:col-span-3">
                  <Input
                    label="Cidade"
                    mandatory
                    type="text"
                    control={hookForm.control}
                    id="customer.address.city"
                    placeholder="Digite"
                    errors={hookForm.formState.errors}
                    name="customer.address.city"
                  />
                </div>
                <div className="col-span-12 md:col-span-3">
                  <Select
                    label="Estado"
                    mandatory
                    control={hookForm.control}
                    id="state"
                    items={estados.map((item) => ({
                      value: item.sigla,
                      label: item.nome,
                    }))}
                    placeholder="Selecione"
                    errors={hookForm.formState.errors}
                    name="customer.address.state"
                  />
                </div>
                <div className="col-span-12 md:col-span-3">
                  <Input
                    label="Bairro"
                    mandatory
                    type="text"
                    control={hookForm.control}
                    id="district"
                    placeholder="Digite"
                    errors={hookForm.formState.errors}
                    name="customer.address.district"
                  />
                </div>
                <div className="col-span-12 md:col-span-3">
                  <Input
                    label="Complemento"
                    type="text"
                    control={hookForm.control}
                    id="complement"
                    placeholder="Digite"
                    errors={hookForm.formState.errors}
                    name="customer.address.complement"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-[1.4rem] mt-8 font-semibold mb-4">
                  Informações de pagamento
                </h3>
              </div>
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Modelo de pagamento */}
                <div>
                  <h4 className="text-lg mb-4">
                    Modelo de pagamento <span className="text-red-500">*</span>
                  </h4>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit"
                        checked={paymentMethod === "CreditCard"}
                        onChange={() => setPaymentMethod("CreditCard")}
                      />
                      <span className="text-gray-800">Cartão de Crédito</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="pix"
                        checked={paymentMethod === "Pix"}
                        onChange={() => setPaymentMethod("Pix")}
                      />{" "}
                      <span className="text-gray-800">Pix</span>
                    </label>
                  </div>
                </div>
              </div>

              {paymentMethod === "CreditCard" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6">
                      <Input
                        type="text"
                        placeholder="Digite"
                        label="Nome do titular"
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        name="payment.holderInfo.name"
                        id="holderName"
                        mandatory
                      />
                    </div>
                    <div className="col-span-12 md:col-span-3">
                      <Input
                        type="text"
                        placeholder="Digite"
                        mask={EMask.CPF_CNPJ}
                        label="CPF / CNPJ"
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        name="payment.holderInfo.document"
                        id="holderDocument"
                        mandatory
                      />
                    </div>

                    <div className="col-span-12 md:col-span-3 mb-4 sm:mb-0">
                      <Input
                        type="email"
                        placeholder="Digite"
                        label="E-mail"
                        iconLeft={
                          <Mail className=" text-gray-400 w-4 h-4 mt-1" />
                        }
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        name="payment.holderInfo.email"
                        id="holderEmail"
                        mandatory
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <Input
                        type="text"
                        placeholder="Digite"
                        iconLeft={
                          <CreditCard className=" text-gray-400 w-5 h-5" />
                        }
                        label="Número do cartão"
                        mask={EMask.CREDIT_CARD}
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        name="payment.creditCard.number"
                        id="cardNumber"
                        mandatory
                      />
                    </div>
                    <div className="col-span-12 md:col-span-2">
                      <Select
                        label="Mês de validade"
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        items={Array.from({ length: 12 }, (_, index) => ({
                          value: String(index + 1).padStart(2, "0"),
                          label: String(index + 1).padStart(2, "0"),
                        }))}
                        name="payment.creditCard.expiryMonth"
                        id="expiryMonth"
                        mandatory
                      />
                    </div>
                    <div className="col-span-12 md:col-span-2">
                      <Input
                        type="text"
                        placeholder="Digite"
                        label="Ano de validade"
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        name="payment.creditCard.expiryYear"
                        mask={EMask.NUMBERS_4_DIGITS}
                        id="expiryYear"
                        mandatory
                      />
                    </div>
                    <div className="col-span-12 md:col-span-2">
                      <Input
                        type="text"
                        placeholder="Digite"
                        mask={EMask.CVV}
                        label="Código CVV"
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        name="payment.creditCard.ccv"
                        id="ccv"
                        mandatory
                      />
                    </div>
                    <div className="col-span-12 md:col-span-3 mb-4 sm:mb-0">
                      <Select
                        label="Quantidade de parcelas"
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        items={Array.from({ length: 12 }, (_, index) => ({
                          value: Number(index + 1),
                          label: String(index + 1),
                        }))}
                        name="charge.installmentCount"
                        id="installmentCount"
                        mandatory
                      />
                    </div>
                    <div className="col-span-12 md:col-span-3 mb-4 sm:mb-0">
                      <Input
                        type="text"
                        placeholder="Digite"
                        label="Cupom de desconto"
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        onChange={(e) => handleCouponValidate(e.target.value)}
                        name="couponCode"
                        id="couponCode"
                      />
                      {couponValid == true && (
                        <span className="text-green-500 text-sm">
                          Cupom válido
                        </span>
                      )}
                    </div>
                    <div className="col-span-12 md:col-span-3 mb-4 sm:mb-0">
                      <Input
                        type="text"
                        placeholder="Digite"
                        label="Valor total"
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        name="totalValue"
                        disabled
                        id="totalValue"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "Pix" && (
                <div>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-3 mb-4 sm:mb-0">
                      <Input
                        type="text"
                        placeholder="Digite"
                        label="Cupom de desconto"
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        onChange={(e) => handleCouponValidate(e.target.value)}
                        name="couponCode"
                        id="couponCode"
                      />
                      {couponValid == true && (
                        <span className="text-green-500 text-sm">
                          Cupom válido
                        </span>
                      )}
                    </div>
                    <div className="col-span-12 md:col-span-3 mb-4 sm:mb-0">
                      <Input
                        type="text"
                        placeholder="Digite"
                        label="Valor total"
                        control={hookForm.control}
                        errors={hookForm.formState.errors}
                        name="totalValue"
                        disabled
                        id="totalValue"
                      />
                    </div>
                  </div>
                  <div className="p-4 border border-green-500 mt-6 rounded-md bg-green-50">
                    <p className="text-green-700 font-semibold">
                      Você escolheu pagar via Pix e ganhará 10% de desconto. Ao
                      continuar, receberá um QR Code para efetuar o pagamento.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex-col space-y-3 items-center gap-6">
                <Input
                  checkbox
                  name="termsOfUse"
                  id="termsOfUse"
                  label="Aceito os termos"
                  control={hookForm.control}
                  errors={hookForm.formState.errors}
                  mandatory
                />
                <Input
                  checkbox
                  name="productsInfo"
                  id="productsInfo"
                  label="Desejo receber informações sobre o produto e novidades."
                  control={hookForm.control}
                  errors={hookForm.formState.errors}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => handleSubmit(hookForm.getValues())}
                  disabled={loading}
                  className={`w-1/3 mt-6 text-white py-3 rounded-md font-normal transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#840C0C] hover:bg-red-800"
                  }`}
                >
                  {loading ? "Processando..." : "Começar a usar agora"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
