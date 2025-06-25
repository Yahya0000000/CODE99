import React, { useState } from "react";

type Props = {
  status: null | "success" | "error" | "loading";
  onExport: (repoName: string, isNewRepo: boolean) => void;
};

const ProjectExportGithubPanel: React.FC<Props> = ({ status, onExport }) => {
  const [repoName, setRepoName] = useState("");
  const [isNewRepo, setIsNewRepo] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (repoName) {
      onExport(repoName, isNewRepo);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: "#23272f", borderRadius: 12, padding: "32px", maxWidth: 520
    }}>
      <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.08em", marginBottom: 18 }}>
        اختر المستودع المراد التصدير إليه
      </div>
      <div style={{ marginBottom: 14 }}>
        <label>
          <input
            type="radio"
            checked={isNewRepo}
            onChange={() => setIsNewRepo(true)}
            style={{ marginLeft: 8 }}
          />
          مستودع جديد
        </label>
        <label style={{ marginRight: 36 }}>
          <input
            type="radio"
            checked={!isNewRepo}
            onChange={() => setIsNewRepo(false)}
            style={{ marginLeft: 8 }}
          />
          مستودع قائم
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={repoName}
          onChange={e => setRepoName(e.target.value)}
          placeholder={isNewRepo ? "اسم المستودع الجديد" : "اسم المستودع القائم"}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #444",
            background: "#191b20",
            color: "#fff"
          }}
        />
      </div>
      <button
        type="submit"
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
        disabled={!repoName || status === "loading"}
      >
        {status === "loading"
          ? "جاري التصدير..."
          : "تصدير إلى GitHub"
        }
      </button>
      {status === "success" && (
        <div style={{ color: "#119e57", fontWeight: "bold", marginTop: 18 }}>
          تم تصدير المشروع إلى GitHub بنجاح!
        </div>
      )}
      {status === "error" && (
        <div style={{ color: "#c32b2b", fontWeight: "bold", marginTop: 18 }}>
          حدث خطأ أثناء التصدير. حاول مرة أخرى.
        </div>
      )}
    </form>
  );
};

export default ProjectExportGithubPanel;