import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";

interface ModalButton {
  description: string;
  onClick: () => void;
  style?:
    | "primary"
    | "primary-outline"
    | "secondary"
    | "secondary-outline"
    | "tertiary"
    | "tertiary-outline";
  type?: "button" | "submit" | "reset";
  maxWidth?: string | number;
  maxHeight?: string | number;
  id?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  title: string;
  description: React.ReactNode;
  btnDescription?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onClick,
  title,
  description,
  btnDescription,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  if (!isOpen) return null;

  const handleClickButton = async (fn: () => void) => {
    setIsLoading(true);
    const result: unknown = fn();

    if (result instanceof Promise) {
      await result.finally(() => {
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-4 shadow-lg">
        <div className="flex items-center my-4 ml-2 justify-between">
          <h2 className="text-lg font-semibold text-red-700">{title}</h2>
        </div>

        <hr className="my-3 text-gray-300 ml-2" />

        <div className="text-sm ml-2 pt-4 pb-4 text-gray-700">
          {description}
        </div>

        <hr className="my-3 text-gray-300 ml-2" />

        <div className="flex justify-end gap-2 flex-wrap">
          <Button
            className="bg-red-700 hover:bg-red-700/80"
            onClick={onClick && (() => handleClickButton(onClick))}
          >
            {isLoading ? "Carregando..." : btnDescription}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
