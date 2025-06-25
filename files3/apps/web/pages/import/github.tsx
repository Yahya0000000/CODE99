import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

const ImportGithubPage = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);

  const handleImport = () => {
    if (!repoUrl) return;
    setStatus("loading");
    setTimeout(() => {
      // محاكاة نجاح الاستيراد
      setStatus("success");
    }, 1200);
  };

  return (
    <div style={{display: "flex", minHeight: "100vh", background: "#181818", color: "#fff"}}>
      <Sidebar />
      <main style={{flex: 1, padding: "40px 32px"}}>
        <h1 style={{color: "#0bf", marginBottom: "32px"}}>استيراد مشروع من GitHub</h1>
        <div style={{
          background: "#23272f", borderRadius: 12, padding: "32px", maxWidth: 520
        }}>
          <label style={{color: "#0bf", fontWeight: "bold"}}>رابط المستودع على GitHub:</label>
          <input
            type="text"
            value={repoUrl}
            onChange={e => setRepoUrl(e.target.value)}
            placeholder="مثال: https://github.com/Yahya0000000/ai-project"
            style={{
              width: "100%",
              marginTop: 10,
              marginBottom: 18,
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "#191b20",
              color: "#fff"
            }}
          />
          <button
            onClick={handleImport}
            style={{
              background: "#037cf9",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 34px",
              fontWeight: "bold",
              fontSize: "1.08em",
              cursor: "pointer"
            }}
            disabled={!repoUrl || status === "loading"}
          >
            {status === "loading" ? "جاري الاستيراد..." : "استيراد"}
          </button>
          {status === "success" && (
            <div style={{color: "#119e57", fontWeight: "bold", marginTop: 18}}>
              تم استيراد المشروع بنجاح!
            </div>
          )}
          {status === "error" && (
            <div style={{color: "#c32b2b", fontWeight: "bold", marginTop: 18}}>
              حدث خطأ أثناء الاستيراد. تأكد من صحة الرابط.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ImportGithubPage;