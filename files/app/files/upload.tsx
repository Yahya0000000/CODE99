"use client";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import Alert from "../components/Alert";

const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
const maxSize = 5 * 1024 * 1024; // 5MB

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [alert, setAlert] = useState<{ message: string, type: "success" | "error" } | null>(null);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    if (!allowedTypes.includes(file.type)) {
      setAlert({ message: "نوع الملف غير مسموح", type: "error" });
      return;
    }
    if (file.size > maxSize) {
      setAlert({ message: "حجم الملف كبير جداً", type: "error" });
      return;
    }
    const { error } = await supabase.storage.from("user-files").upload(`public/${file.name}`, file);
    setAlert({ message: error ? "فشل رفع الملف" : "تم رفع الملف!", type: error ? "error" : "success" });
  }

  return (
    <div className="container mx-auto py-12 max-w-md">
      <h2 className="text-2xl font-bold mb-4">رفع ملف جديد</h2>
      {alert && <Alert message={alert.message} type={alert.type} />}
      <form onSubmit={handleUpload}>
        <input
          type="file"
          className="w-full mb-3"
          onChange={e => setFile(e.target.files?.[0] || null)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">رفع</button>
      </form>
    </div>
  );
}