import { NextRequest, NextResponse } from "next/server";
import { generateWithHuggingface } from "../../../utils/huggingface";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  if (!prompt) return NextResponse.json({ error: "يرجى إدخال وصف" }, { status: 400 });
  try {
    const output = await generateWithHuggingface(prompt);
    return NextResponse.json({ result: output?.[0]?.generated_text || "تم التوليد" });
  } catch {
    return NextResponse.json({ error: "فشل التوليد" }, { status: 500 });
  }
}