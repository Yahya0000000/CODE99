"use client";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import Alert from "../components/Alert";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState<{ message: string, type: "success" | "error" } | null>(null);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) setAlert({ message: error.message, type: "error" });
    else setAlert({ message: "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك.", type: "success" });
  }

  return (
    <div className="container mx-auto py-12 max-w-md">
      <h2 className="text-2xl font-bold mb-4">إعادة تعيين كلمة المرور</h2>
      {alert && <Alert message={alert.message} type={alert.type} />}
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full p-2 border mb-3 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-yellow-600 text-white py-2 rounded">إرسال رابط إعادة التعيين</button>
      </form>
    </div>
  );
}