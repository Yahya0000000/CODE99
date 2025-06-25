import React, { useState } from "react";
import { sendPromptToAI } from "../utils/aiApi";

type Props = {
  onSubmit: (response: string) => void;
};

const PromptBox: React.FC<Props> = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const aiResponse = await sendPromptToAI(prompt);
    onSubmit(aiResponse);
    setPrompt("");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: "flex",
      gap: "12px",
      alignItems: "flex-end"
    }}>
      <textarea
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="اكتب هنا ما تريد أن ينفذه الذكاء الاصطناعي (مثال: أنشئ لي لعبة بسيطة 2D)..."
        style={{
          flex: 1,
          minHeight: "60px",
          padding: "14px",
          borderRadius: "8px",
          border: "1px solid #333",
          background: "#23272f",
          color: "#fff",
          fontSize: "1.1em"
        }}
        required
        disabled={loading}
      />
      <button type="submit" style={{
        background: "linear-gradient(90deg,#0bf,#4f8cff)",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "14px 22px",
        fontWeight: "bold",
        fontSize: "1.12em",
        cursor: "pointer",
        minHeight: "48px",
        opacity: loading ? 0.7 : 1
      }} disabled={loading}>
        {loading ? "جاري التنفيذ..." : "تنفيذ"}
      </button>
    </form>
  );
};

export default PromptBox;