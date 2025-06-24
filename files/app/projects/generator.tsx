"use client";
import { useState } from "react";
import Alert from "../components/Alert";

export default function ProjectGenerator() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const response = await fetch("/api/generate/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setResult(data.result || "");
    setLoading(false);
  }

  return (
    <div className="container mx-auto py-12 max-w-md">
      <h2 className="text-2xl font-bold mb-4">توليد مشروع بالذكاء الاصطناعي</h2>
      <form onSubmit={handleGenerate}>
        <textarea
          className="w-full p-2 border rounded mb-3"
          placeholder="اكتب وصف المشروع..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          rows={4}
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded" disabled={loading}>
          {loading ? "يتم التوليد..." : "توليد"}
        </button>
      </form>
      {result && <Alert message={result} type="success" />}
    </div>
  );
}