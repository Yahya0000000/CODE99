import React, { useState } from "react";

type Reply = {
  id: number;
  user: string;
  text: string;
  date: string;
};

type Comment = {
  id: number;
  user: string;
  text: string;
  date: string;
  replies: Reply[];
};

type Props = {
  comments: Comment[];
  onAdd: (text: string, user?: string) => void;
  onReply: (commentId: number, text: string, user?: string) => void;
};

const ProjectCommentsPanel: React.FC<Props> = ({ comments, onAdd, onReply }) => {
  const [input, setInput] = useState("");
  const [replyInput, setReplyInput] = useState<Record<number, string>>({});

  return (
    <div style={{
      background: "#23272f",
      borderRadius: 12,
      padding: "32px",
      maxWidth: 720
    }}>
      <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
        التعليقات العامة على المشروع
      </div>
      <div style={{ marginBottom: 18 }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="أضف تعليقًا جديدًا..."
          style={{
            width: "100%", minHeight: 48, padding: "8px", borderRadius: 7, border: "1px solid #444",
            background: "#191b20", color: "#fff"
          }}
        />
        <button
          onClick={() => { if (input.trim()) { onAdd(input); setInput(""); } }}
          disabled={!input.trim()}
          style={{
            background: "#037cf9", color: "#fff", border: "none", borderRadius: 8,
            padding: "10px 26px", fontWeight: "bold", cursor: "pointer", marginTop: 10
          }}
        >إرسال</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {comments.map(c => (
          <li key={c.id} style={{
            marginBottom: 18, background: "#191b20", borderRadius: 8,
            padding: "14px 20px", borderRight: `5px solid #0bf`
          }}>
            <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.07em" }}>
              {c.user}
            </div>
            <div style={{ color: "#eee", marginBottom: 4 }}>{c.text}</div>
            <div style={{ color: "#bbb", fontSize: "0.92em", marginBottom: 4 }}>{c.date}</div>
            <div style={{ marginTop: 8, marginBottom: 4 }}>
              <textarea
                value={replyInput[c.id] ?? ""}
                onChange={e => setReplyInput(r => ({ ...r, [c.id]: e.target.value }))}
                placeholder="رد..."
                style={{
                  width: "90%", minHeight: 30, padding: "6px", borderRadius: 7, border: "1px solid #444",
                  background: "#181a20", color: "#fff"
                }}
              />
              <button
                onClick={() => { if ((replyInput[c.id] ?? "").trim()) { onReply(c.id, replyInput[c.id] ?? ""); setReplyInput(r => ({ ...r, [c.id]: "" })); } }}
                disabled={!(replyInput[c.id] ?? "").trim()}
                style={{
                  background: "#119e57", color: "#fff", border: "none", borderRadius: 7,
                  padding: "7px 18px", fontWeight: "bold", cursor: "pointer", marginRight: 5
                }}
              >رد</button>
            </div>
            {c.replies && c.replies.length > 0 && (
              <ul style={{ listStyle: "none", padding: 0, marginTop: 8 }}>
                {c.replies.map(r => (
                  <li key={r.id} style={{
                    marginBottom: 6, marginRight: 18, background: "#222", borderRadius: 7, padding: "10px 15px"
                  }}>
                    <div style={{ color: "#119e57", fontWeight: "bold" }}>{r.user}</div>
                    <div style={{ color: "#eee" }}>{r.text}</div>
                    <div style={{ color: "#bbb", fontSize: "0.92em" }}>{r.date}</div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {comments.length === 0 && (
        <div style={{ color: "#aaa", marginTop: 22 }}>لا توجد تعليقات بعد.</div>
      )}
    </div>
  );
};

export default ProjectCommentsPanel;