import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";

const NewProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // محاكاة إنشاء مشروع جديد (في المستقبل: API)
    setTimeout(() => {
      // في التطبيق الفعلي: احصل على ID المشروع الجديد بعد الإنشاء
      router.push("/projects/12345");
    }, 1000);
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#181818",
      color: "#fff"
    }}>
      <Sidebar />
      <main style={{
        flex: 1,
        padding: "40px 32px"
      }}>
        <h1 style={{color: "#0bf", marginBottom: "32px"}}>إنشاء مشروع جديد</h1>
        <form onSubmit={handleSubmit}
          style={{
            background: "#23272f",
            borderRadius: "10px",
            padding: "28px 18px",
            maxWidth: "520px"
          }}>
          <div style={{marginBottom: "18px"}}>
            <label style={{color: "#0bf", fontWeight: "bold"}}>اسم المشروع:</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "6px",
                borderRadius: "6px",
                border: "1px solid #444",
                background: "#191b20",
                color: "#fff"
              }}
              required
            />
          </div>
          <div style={{marginBottom: "18px"}}>
            <label style={{color: "#0bf", fontWeight: "bold"}}>الوصف:</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              style={{
                width: "100%",
                minHeight: "70px",
                padding: "10px",
                marginTop: "6px",
                borderRadius: "6px",
                border: "1px solid #444",
                background: "#191b20",
                color: "#fff",
                fontFamily: "inherit"
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: "10px",
              background: "linear-gradient(90deg,#0bf,#4f8cff)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "14px 30px",
              fontWeight: "bold",
              fontSize: "1.1em",
              cursor: "pointer",
              opacity: loading ? 0.7 : 1
            }}
            disabled={loading}
          >
            {loading ? "يتم الإنشاء..." : "إنشاء المشروع"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default NewProject;