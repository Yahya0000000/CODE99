import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  if (!prompt) return NextResponse.json({ error: "يرجى إدخال وصف" }, { status: 400 });
  // ضع هنا الربط الفعلي مع Huggingface أو أي API للذكاء الاصطناعي
  // مثال افتراضي:
  return NextResponse.json({ result: `تم توليد نص بناء على: ${prompt}` });
}