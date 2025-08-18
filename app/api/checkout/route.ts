import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Rota /api/checkout chamada!");

    let body;
    try {
      body = await req.json();
      console.log("Body recebido:", body);
    } catch (err) {
      console.error("Erro ao ler body:", err);
      return NextResponse.json({ error: "Body inválido" }, { status: 400 });
    }

    let apiUrl = "";
    if (body.charge.billingType === "CreditCard") {
      apiUrl =
        "http://localhost:5224/api/AsaasIntegration/signup_payment_with_card";
    } else if (body.charge.billingType === "Pix") {
      apiUrl =
        "http://localhost:5224/api/AsaasIntegration/signup_payment_with_pix";
    } else {
      return NextResponse.json(
        { error: "Tipo de pagamento inválido" },
        { status: 400 }
      );
    }

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Erro geral:", error);
    return NextResponse.json(
      { error: "Erro ao processar pagamento" },
      { status: 500 }
    );
  }
}
