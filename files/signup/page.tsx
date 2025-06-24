"use client";
import { useState } from "react";
import Link from "next/link";
import Alert from "../components/Alert";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // ضع هنا كود التسجيل الحقيقي مع Supabase أو API خاص بك
    setMessage("تم إنشاء الحساب بنجاح (افتراضي - استبدل بالكود الفعلي)");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">إنشاء حساب جديد</h2>
      {message && <Alert message={message} type="success" />}
      <form onSubmit={handleSignup}>
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
        <button type="submit" className="btn-primary w-full">إنشاء حساب</button>
      </form>
      <div className="text-center mt-4">
        <span>لديك حساب بالفعل؟ </span>
        <Link href="/login" className="text-blue-700">دخول</Link>
      </div>
    </div>
  );
}