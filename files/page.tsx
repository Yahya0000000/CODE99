"use client";
import { useState } from "react";
import Link from "next/link";
import Alert from "./components/Alert";

export default function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      if (data.result) setResult(data.result);
      else setResult(data.error || "خطأ غير متوقع");
    } catch {
      setResult("حدث خطأ أثناء التوليد");
    }
    setLoading(false);
  };

  return (
    <section className="text-center space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">
        منصتك الذكية للملفات والمشاريع
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        إدارة مشاريعك وملفاتك، دفع آمن، وتوليد ذكي باستخدام الذكاء الاصطناعي.
      </p>

      {/* مربع البرومبت */}
      <form onSubmit={handleGenerate} className="mx-auto max-w-xl bg-white shadow rounded-lg p-6 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-blue-600"
          placeholder="اكتب وصف المشروع أو ما تريد توليده..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary min-w-[120px]" disabled={loading}>
          {loading ? "جاري التوليد..." : "توليد"}
        </button>
      </form>

      {result && (
        <div className="max-w-xl mx-auto mt-6">
          <Alert message={result} type={result.startsWith("خطأ") ? "error" : "success"} />
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
        <Link href="/signup" className="btn-primary px-8 py-3 text-lg">جرب مجاناً</Link>
        <Link href="/pricing" className="btn-outline px-8 py-3 text-lg">خطط الأسعار</Link>
      </div>
      <img src="/dashboard-preview.png" alt="لقطة من المنصة" className="rounded-xl shadow-lg mx-auto max-w-full h-80 object-cover mt-8" />
    </section>
  );
}