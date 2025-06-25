import React from "react";

type PromptItem = {
  id: string;
  prompt: string;
  type: "project" | "code" | "design";
  date: string;
  result: string;
};

type Props = {
  prompts: PromptItem[];
  onReuse: (prompt: string) => void;
  onEdit: (id: string) => void;
};

const PromptHistoryList: React.FC<Props> = ({ prompts, onReuse, onEdit }) => (
  <div>
    {prompts.length === 0 && (
      <div style={{color: "#aaa", fontSize: "1.08em", marginTop: 24}}>لا يوجد برومبتات بعد!</div>
    )}
    {prompts.map((p) => (
      <div key={p.id} style={{
        background: "#23272f",
        borderRadius: 10,
        padding: "22px 20px",
        marginBottom: 22,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }}>
        <div style={{fontWeight: "bold", color: "#0bf", fontSize: "1.12em"}}>برومبت: {p.prompt}</div>
        <div style={{color: "#aaa", fontSize: "0.98em"}}>النوع: {p.type === "project" ? "مشروع" : p.type === "code" ? "كود" : "تصميم"}</div>
        <div style={{color: "#aaa", fontSize: "0.98em"}}>التاريخ: {p.date}</div>
        <div style={{color: "#eee", margin: "6px 0"}}>النتيجة: {p.result}</div>
        <div style={{display: "flex", gap: 10}}>
          <button
            style={{
              background: "#037cf9",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "8px 18px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
            onClick={() => onReuse(p.prompt)}
          >
            إعادة استخدام البرومبت
          </button>
          <button
            style={{
              background: "#119e57",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "8px 18px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
            onClick={() => onEdit(p.id)}
          >
            تعديل البرومبت
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default PromptHistoryList;