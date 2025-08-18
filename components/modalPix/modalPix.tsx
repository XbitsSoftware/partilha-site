"use client";
import {
  IconLogoPartilhaWithText,
  IconXWithCircle,
} from "@/public/extensions/icons";
import { Clock, CopyIcon } from "lucide-react";
import { useState } from "react";

export const ModalPix = ({
  qrCode,
  expirationDate,
  copyPaste,
  onClose,
}: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyPaste).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white p-4 md:p-6 lg:px-12 rounded-lg w-[80%] md:w-[70%] lg:w-[60%] 2xl:w-[40%] h-fit pb-10">
        <div className="flex justify-end mb-3">
          <IconXWithCircle onClick={onClose} className="cursor-pointer" />
        </div>

        {/* Container flex responsivo */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Lado esquerdo */}
          <div className="flex-1">
            <IconLogoPartilhaWithText
              height="80"
              width="80"
              className="mx-auto lg:mx-0"
            />
            <div className="my-4 border-b border-[#CCCCCC]"></div>

            <div className="flex flex-row justify-between gap-3 sm:gap-0">
              <div>
                <p className="text-[#7A7A7A] font-medium">
                  Prazo para pagamento
                </p>
                <p className="text-[#4A4A4A]">{formatDate(expirationDate)}</p>
              </div>
              <div className="flex items-center bg-[#E9E9E9] rounded p-2">
                <p className="flex items-center text-[#7A7A7A] font-bold gap-2">
                  <Clock size={14} /> 00:30s
                </p>
              </div>
            </div>

            <div className="my-6 border-b border-[#CCCCCC]"></div>

            <div>
              <p className="text-[#983131] font-medium mb-4">
                Como realizar o pagamento?
              </p>
              <ol className="list-decimal list-inside text-[#4A4A4A] space-y-2">
                <li>Abra o aplicativo do seu banco</li>
                <li>Escolha a opção de pagamento via PIX</li>
                <li>
                  Copie e cole o código do pagamento ou escaneie o QR Code ao
                  lado
                </li>
              </ol>
            </div>
          </div>

          {/* Lado direito */}
          <div className="flex flex-col items-center flex-1">
            <div className="flex justify-center border border-[#CCCCCC] p-2 rounded w-[200px] sm:w-[250px]">
              <img
                src={`data:image/png;base64,${qrCode}`}
                alt="QR Code Pix"
                className="max-w-full max-h-full"
              />
            </div>

            <span className="text-xs break-all text-[#A3A3A3] mt-2 pt-4 text-center">
              {copyPaste}
            </span>

            <button
              onClick={handleCopy}
              type="button"
              className="mt-4 flex items-center gap-2 bg-transparent border border-[#840C0C] text-[#840C0C] font-medium px-6 py-2 rounded"
            >
              <CopyIcon size={16} />
              {copied ? "Copiado!" : "Copiar PIX"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
