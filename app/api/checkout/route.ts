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
      apiUrl = "http://localhost:5224/api/Customer/signup_payment_with_card";
    } else if (body.charge.billingType === "Pix") {
      apiUrl = "http://localhost:5224/api/Customer/signup_payment_with_pix";
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

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const code = searchParams.get("Code");
    const productId = searchParams.get("ProductId");
    const planId = searchParams.get("PlanId");
    const billingType = searchParams.get("BillingType");

    if (!code || !productId || !planId || !billingType) {
      return NextResponse.json(
        { error: "Parâmetros obrigatórios ausentes" },
        { status: 400 }
      );
    }

    const apiUrl = `http://localhost:5224/api/Coupon/validate_coupon?Code=${code}&ProductId=${productId}&PlanId=${planId}&BillingType=${billingType}`;

    const res = await fetch(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Erro geral:", error);
    return NextResponse.json(
      { error: "Erro ao processar validação do cupom" },
      { status: 500 }
    );
  }
}
