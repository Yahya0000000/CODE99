"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import Alert from "../components/Alert";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [alert, setAlert] = useState<{ message: string, type: "success" | "error" } | null>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) router.push("/login");
      else setUser(data.user);
    });
  }, []);

  useEffect(() => {
    async function fetchFiles() {
      const { data, error } = await supabase.storage.from("user-files").list("public");
      if (!error && data) setFiles(data);
    }
    fetchFiles();
  }, []);

  async function handleDelete(filename: string) {
    const { error } = await supabase.storage.from("user-files").remove([`public/${filename}`]);
    if (!error) setFiles(files.filter(f => f.name !== filename));
    setAlert({ message: error ? "حدث خطأ أثناء الحذف" : "تم حذف الملف!", type: error ? "error" : "success" });
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">لوحة التحكم</h2>
      {alert && <Alert message={alert.message} type={alert.type} />}
      <div>
        <h3 className="font-bold mb-2">ملفاتك:</h3>
        <ul>
          {files.map(file =>
            <li key={file.name} className="mb-2 flex items-center gap-2">
              <span>{file.name}</span>
              <a href={`https://your-supabase-project-url.supabase.co/storage/v1/object/public/user-files/public/${file.name}`} className="text-blue-600 underline" target="_blank">تحميل</a>
              <button onClick={() => handleDelete(file.name)} className="text-red-600 underline">حذف</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}