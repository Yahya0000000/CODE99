"use client";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/navigation";
import Alert from "../components/Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState<{ message: string, type: "success" | "error" } | null>(null);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAlert({ message: error.message, type: "error" });
    else router.push("/dashboard");
  }

  return (
    <div className="container mx-auto py-12 max-w-md">
      <h2 className="text-2xl font-bold mb-4">تسجيل الدخول</h2>
      {alert && <Alert message={alert.message} type={alert.type} />}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full p-2 border mb-3 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full p-2 border mb-3 rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">دخول</button>
      </form>
      <div className="mt-4">
        <a href="/reset-password" className="text-blue-600 underline">نسيت كلمة المرور؟</a>
      </div>
    </div>
  );
}