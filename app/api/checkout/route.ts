import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let apiUrl = "";
    if (body.charge.billingType === "CreditCard") {
      apiUrl =
        "https://api.xgateway.com.br/api/Customer/signup_payment_with_card";
    } else if (body.charge.billingType === "Pix") {
      apiUrl =
        "https://api.xgateway.com.br/api/Customer/signup_payment_with_pix";
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
    const text = res.status === 200 ? await res.text() : null;

    try {
      if (res.status === 200 && text) {
        const json = JSON.parse(text);
        return NextResponse.json(json, { status: res.status });
      } else {
        const json = JSON.parse("{}");
        return new NextResponse(json, {
          status: 204,
          headers: { "Content-Type": "text/plain" },
        });
      }
    } catch {
      return new NextResponse(text, {
        status: res.status,
        headers: { "Content-Type": "text/plain" },
      });
    }
  } catch (error) {
    console.error("Erro geral:", error);
    return NextResponse.json(
      { error: "Erro ao processar requisição" },
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

    const apiUrl = `https://api.xgateway.com.br/api/Coupon/validate_coupon?Code=${code}&ProductId=${productId}&PlanId=${planId}&BillingType=${billingType}`;

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
