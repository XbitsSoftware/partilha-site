import { useState } from "react";

interface CepData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

interface UseCepSearchReturn {
  searchCep: (cep: string) => Promise<CepData | null>;
  loading: boolean;
  error: string | null;
}

export const useCepSearch = (): UseCepSearchReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cleanCep = (cep: string): string => {
    return cep.replace(/\D/g, "");
  };

  const validateCep = (cep: string): boolean => {
    const cleanedCep = cleanCep(cep);
    return cleanedCep.length === 8 && /^\d{8}$/.test(cleanedCep);
  };

  const searchCep = async (cep: string): Promise<CepData | null> => {
    const cleanedCep = cleanCep(cep);

    if (!validateCep(cep)) {
      setError("");
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cleanedCep}/json/`
      );

      if (!response.ok) {
        throw new Error("Erro na consulta do CEP");
      }

      const data: CepData = await response.json();

      if (data.erro) {
        setError("CEP não encontrado");
        return null;
      }

      return data;
    } catch (err) {
      setError("Erro ao buscar CEP. Tente novamente.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    searchCep,
    loading,
    error,
  };
};
