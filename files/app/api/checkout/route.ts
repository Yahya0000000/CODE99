import { NextRequest, NextResponse } from "next/server";
import stripe from "../../../utils/stripeClient";

export async function POST(req: NextRequest) {
  const { priceId, successUrl, cancelUrl } = await req.json();
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      success_url: successUrl,
      cancel_url: cancelUrl,
    });
    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "فشل إنشاء جلسة الدفع" }, { status: 500 });
  }
}