"use client";
import { useState } from "react";
import Alert from "../components/Alert";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    // ضع هنا كود إرسال الإيميل
    setMessage("تم إرسال رابط إعادة التعيين إلى بريدك (افتراضي)");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">استعادة كلمة المرور</h2>
      {message && <Alert message={message} type="success" />}
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button type="submit" className="btn-primary w-full">إرسال رابط إعادة التعيين</button>
      </form>
    </div>
  );
}