"use client";
import { useState } from "react";
import Link from "next/link";
import Alert from "../components/Alert";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // ضع هنا كود المصادقة مع Supabase أو API خاص بك
    setMessage("تم تسجيل الدخول (افتراضي - استبدل بالكود الفعلي)");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">تسجيل الدخول</h2>
      {message && <Alert message={message} type="success" />}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button type="submit" className="btn-primary w-full">دخول</button>
      </form>
      <div className="text-center mt-4">
        <Link href="/reset-password" className="text-blue-700">نسيت كلمة المرور؟</Link>
      </div>
      <div className="text-center mt-2">
        <span>ليس لديك حساب؟ </span>
        <Link href="/signup" className="text-blue-700">سجّل الآن</Link>
      </div>
    </div>
  );
}