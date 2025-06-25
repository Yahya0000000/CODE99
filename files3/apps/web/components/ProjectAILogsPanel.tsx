import React, { useState } from "react";

type Log = {
  id: number;
  type: "prompt" | "generation" | "qa";
  message: string;
  date: string;
  status: "success" | "error";
};

const typeLabels: Record<Log["type"], string> = {
  prompt: "برومبت",
  generation: "توليد",
  qa: "AI QA"
};

const typeColors: Record<Log["type"], string> = {
  prompt: "#037cf9",
  generation: "#119e57",
  qa: "#f7a30a"
};

type Props = {
  logs: Log[];
};

const ProjectAILogsPanel: React.FC<Props> = ({ logs }) => {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? logs : logs.filter(l => l.type === filter);

  return (
    <div style={{
      background: "#23272f",
      borderRadius: 12,
      padding: "32px",
      maxWidth: 680
    }}>
      <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
        سجلات الذكاء الاصطناعي للمشروع
      </div>
      <div style={{ marginBottom: 18, display: "flex", gap: 10 }}>
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={{
            background: "#191b20", color: "#fff", border: "1px solid #444", borderRadius: 8, padding: "8px 16px"
          }}
        >
          <option value="all">كل السجلات</option>
          <option value="prompt">برومبتات</option>
          <option value="generation">توليد ملفات</option>
          <option value="qa">AI QA</option>
        </select>
      </div>
      {filtered.length === 0 && (
        <div style={{ color: "#aaa", marginTop: 22 }}>لا توجد سجلات من هذا النوع.</div>
      )}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.map(l => (
          <li key={l.id} style={{
            marginBottom: 18,
            background: "#191b20",
            borderRadius: 8,
            padding: "14px 20px",
            borderRight: `5px solid ${typeColors[l.type] || "#eee"}`
          }}>
            <div style={{ color: `${typeColors[l.type] || "#fff"}`, fontWeight: "bold" }}>
              [{typeLabels[l.type]}] {l.status === "error" && <span style={{ color: "#c32b2b" }}>خطأ</span>}
            </div>
            <div style={{ fontWeight: "bold", fontSize: "1.07em" }}>{l.message}</div>
            <div style={{ color: "#bbb", fontSize: "0.97em" }}>{l.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectAILogsPanel;