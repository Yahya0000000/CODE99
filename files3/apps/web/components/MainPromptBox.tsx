import React, { useState } from "react";

type Props = {
  onPrompt: (prompt: string) => void;
  loading: boolean;
};

const MainPromptBox: React.FC<Props> = ({ onPrompt, loading }) => {
  const [input, setInput] = useState("");

  return (
    <div style={{
      background: "#20242b",
      borderRadius: 12,
      padding: "20px 22px",
      marginBottom: 24,
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>
      <input
        type="text"
        value={input}
        onChange={e=>setInput(e.target.value)}
        placeholder="اكتب طلبك لإنشاء مشروع (مثال: صمم لي لعبة منصات فيها شخصية تقفز...)"
        style={{
          flex: 1,
          padding: "15px 16px",
          borderRadius: 7,
          border: "1px solid #444",
          fontSize: "1.11em",
          background: "#23272f",
          color: "#fff"
        }}
        disabled={loading}
        onKeyDown={e => {
          if (e.key === "Enter" && input.trim() && !loading) {
            onPrompt(input);
            setInput("");
          }
        }}
      />
      <button
        onClick={() => {
          if(input.trim() && !loading) {
            onPrompt(input);
            setInput("");
          }
        }}
        style={{
          background: "linear-gradient(90deg,#0bf,#4f8cff)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "13px 28px",
          fontWeight: "bold",
          fontSize: "1.08em",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1
        }}
        disabled={loading}
      >
        {loading ? "جاري الإنشاء..." : "إنشاء"}
      </button>
    </div>
  );
};

export default MainPromptBox;