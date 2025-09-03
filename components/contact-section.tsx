"use client";

import type React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Phone, Mail, MapPin, User, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoogleMap from "@/components/google-map";
import { IconClip } from "@/public/extensions/icons";

export default function ContactSection({ origem }: { origem?: string }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    file: {
      name: "",
      extensao: "",
      size: 0,
    },
    termos: false,
    newsletter: false,
  });
  const [formErrors, setFormErrors] = useState({
    nome: "",
    email: "",
    termos: "",
    mensagem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" && "checked" in target ? target.checked : value,
    }));
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData((prev: any) => ({
        ...prev,
        file,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: typeof formErrors = {
      nome: "",
      email: "",
      mensagem: "",
      termos: "",
    };

    if (!formData.nome.trim()) {
      errors.nome = "O campo nome é obrigatório.";
    }

    if (!formData.email.trim()) {
      errors.email = "O campo e-mail é obrigatório.";
    }
    if (!formData.mensagem.trim()) {
      errors.mensagem = "O campo mensagem é obrigatório.";
    }

    if (!formData.termos) {
      errors.termos = "Você precisa aceitar os termos.";
    }

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) return;

    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso!");
    window.location.reload();
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
      file: {
        name: "",
        extensao: "",
        size: 0,
      },
      termos: false,
      newsletter: false,
    });

    setFormErrors({
      nome: "",
      email: "",
      termos: "",
      mensagem: "",
    });
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-700" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    +55 (41) 98870-5498
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-700" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    contato@partilhaonline.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-700" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    R. Dr. Manoel Pedro, 365 – Conj. 504, Sala 4
                  </p>
                  <p className="text-gray-600">
                    Cabral – Curitiba/PR – CEP 80035-030
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="mt-1 pl-10 block w-full border border-gray-300 rounded-md p-[0.65rem] 
    bg-white text-gray-900
    focus:outline-none focus:ring-2 focus:ring-[#E2B874] focus:border-[#E2B874]"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  {formErrors.nome && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.nome}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 pl-10 block w-full border border-gray-300 rounded-md p-[0.65rem] 
    bg-white text-gray-900
    focus:outline-none focus:ring-2 focus:ring-[#E2B874] focus:border-[#E2B874]"
                        placeholder="mail@email.com"
                      />
                    </div>
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefone
                    </label>
                    <div className="relative">
                      <PhoneCall className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="mt-1 pl-10 block w-full border border-gray-300 rounded-md p-[0.65rem] 
    bg-white text-gray-900
    focus:outline-none focus:ring-2 focus:ring-[#E2B874] focus:border-[#E2B874]"
                        placeholder="Digite"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem
                  </label>
                  <div className="relative">
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-[0.65rem] 
    bg-white text-gray-900
    focus:outline-none focus:ring-2 focus:ring-[#E2B874] focus:border-[#E2B874]"
                      placeholder="Digite"
                    />
                  </div>
                </div>

                {origem === "artigos" && (
                  <div>
                    <label
                      htmlFor="file"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Arquivo do artigo
                    </label>
                    <div className="relative">
                      <IconClip className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <button
                        type="button"
                        onClick={handleButtonClick}
                        className="absolute text-[#840C0C] text-[0.785rem] font-medium right-3 top-1/2 transform -translate-y-1/2 border-[1px] rounded md:pl-4 md:pr-4 pl-1 pr-1 border-[#840C0C] p-1"
                      >
                        Selecionar arquivo
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <input
                        type="text"
                        readOnly
                        value={formData.file.name || ""}
                        onClick={handleButtonClick}
                        placeholder="Selecionar arquivo"
                        className="mt-1 block w-full border pl-8 md:pl-10 border-gray-300 rounded-md p-[0.65rem] 
            bg-white text-gray-900 placeholder:text-sm
            focus:outline-none focus:ring-2 focus:ring-[#E2B874] focus:border-[#E2B874]"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <input
                    type="checkbox"
                    className="mr-2"
                    name="termos"
                    checked={formData.termos}
                    onChange={handleInputChange}
                  />
                  <label className="text-sm font-medium text-gray-700">
                    Aceito os termos
                  </label>
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                    />

                    <label className="text-sm font-medium text-gray-700">
                      Desejo receber informações sobre o produto e novidades
                    </label>
                  </div>
                  {formErrors.termos && (
                    <p className="mt-1 text-sm text-red-600">
                      {formErrors.termos}
                    </p>
                  )}
                </div>

                <div className="w-1/2 flex justify-end">
                  <Button
                    type="submit"
                    className="w-full bg-[#840C0C] hover:bg-red-800 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200"
                    size="lg"
                  >
                    Enviar mensagem
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <GoogleMap />
    </>
  );
}
