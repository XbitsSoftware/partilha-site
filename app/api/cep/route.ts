import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cep = searchParams.get("cep")?.replace(/\D/g, "");

  if (!cep) {
    return NextResponse.json({ error: "CEP não informado" }, { status: 400 });
  }

  let data: any = null;
  let service: string = "";

  try {
    // Tenta ViaCEP
    const viaCepRes = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const viaCepData = await viaCepRes.json();
    console.log("Resposta ViaCEP para CEP", cep, ":", viaCepData);

    if (!viaCepData.erro) {
      data = viaCepData;
      service = "ViaCEP";
    } else {
      // Se ViaCEP não encontrou, tenta BrasilAPI
      console.log("ViaCEP não encontrou, tentando BrasilAPI para CEP:", cep);
      const brasilApiRes = await fetch(
        `https://brasilapi.com.br/api/cep/v2/${cep}`
      );
      const brasilApiData = await brasilApiRes.json();

      if (!brasilApiData || brasilApiData.message) {
        return NextResponse.json(
          { error: "CEP não encontrado" },
          { status: 404 }
        );
      }

      data = brasilApiData;
      service = "BrasilAPI";
    }

    const result = {
      zipCode: cep,
      street: data.logradouro || data.street || "",
      district: data.bairro || data.neighborhood || "",
      city: data.localidade || data.city || "",
      state: data.uf || data.state || "",
      service, // Indica qual API retornou os dados
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    return NextResponse.json({ error: "Erro ao buscar CEP" }, { status: 500 });
  }
}
