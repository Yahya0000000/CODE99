import React, { useState } from "react";

type Review = {
  id: number;
  file: string;
  line: number;
  user: string;
  status: "accepted" | "changes" | "rejected";
  comment: string;
  date: string;
};

const statusLabels: Record<Review["status"], string> = {
  accepted: "مقبول",
  changes: "بحاجة تعديل",
  rejected: "مرفوض"
};

const statusColors: Record<Review["status"], string> = {
  accepted: "#119e57",
  changes: "#f7a30a",
  rejected: "#c32b2b"
};

type Props = {
  reviews: Review[];
  onAdd: (r: Omit<Review, "id" | "date">) => void;
};

const ProjectCodeReviewPanel: React.FC<Props> = ({ reviews, onAdd }) => {
  const [filter, setFilter] = useState<string>("all");
  const [file, setFile] = useState("");
  const [line, setLine] = useState<number>(1);
  const [status, setStatus] = useState<Review["status"]>("accepted");
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("يحيى المطور");

  const filtered = filter === "all" ? reviews : reviews.filter(r => r.status === filter);

  const handleAdd = () => {
    if (file && comment) {
      onAdd({ file, line, user, status, comment });
      setFile(""); setLine(1); setStatus("accepted"); setComment("");
    }
  };

  return (
    <div style={{
      background: "#23272f",
      borderRadius: 12,
      padding: "32px",
      maxWidth: 720
    }}>
      <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
        مراجعات الكود
      </div>
      <div style={{ marginBottom: 18, display: "flex", gap: 10 }}>
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={{
            background: "#191b20", color: "#fff", border: "1px solid #444", borderRadius: 8, padding: "8px 16px"
          }}
        >
          <option value="all">كل الحالات</option>
          <option value="accepted">مقبول</option>
          <option value="changes">بحاجة تعديل</option>
          <option value="rejected">مرفوض</option>
        </select>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.map(r => (
          <li key={r.id} style={{
            marginBottom: 18,
            background: "#191b20",
            borderRadius: 8,
            padding: "14px 20px",
            borderRight: `5px solid ${statusColors[r.status]}`
          }}>
            <div style={{ color: statusColors[r.status], fontWeight: "bold" }}>
              [{statusLabels[r.status]}]
            </div>
            <div style={{ fontWeight: "bold", fontSize: "1.07em" }}>
              {r.file} : سطر {r.line}
            </div>
            <div style={{ color: "#eee", fontSize: "1em", marginBottom: 4 }}>{r.comment}</div>
            <div style={{ color: "#bbb", fontSize: "0.97em" }}>
              {r.user} – {r.date}
            </div>
          </li>
        ))}
      </ul>
      <div style={{ borderTop: "1px solid #444", marginTop: 18, paddingTop: 18 }}>
        <div style={{ fontWeight: "bold", color: "#0bf", marginBottom: 8, fontSize: "1.08em" }}>
          إضافة مراجعة جديدة
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          <input
            type="text"
            value={file}
            onChange={e => setFile(e.target.value)}
            placeholder="اسم الملف"
            style={{
              padding: "8px", borderRadius: 7, border: "1px solid #444", background: "#191b20", color: "#fff", flex: 2
            }}
          />
          <input
            type="number"
            value={line}
            onChange={e => setLine(Number(e.target.value))}
            min={1}
            placeholder="السطر"
            style={{
              padding: "8px", borderRadius: 7, border: "1px solid #444", background: "#191b20", color: "#fff", width: 80
            }}
          />
          <select
            value={status}
            onChange={e => setStatus(e.target.value as Review["status"])}
            style={{
              background: "#191b20", color: "#fff", border: "1px solid #444", borderRadius: 8, padding: "8px 14px"
            }}
          >
            <option value="accepted">مقبول</option>
            <option value="changes">بحاجة تعديل</option>
            <option value="rejected">مرفوض</option>
          </select>
        </div>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="تعليق المراجعة"
          style={{
            width: "100%", minHeight: 50, padding: "8px", borderRadius: 7, border: "1px solid #444",
            background: "#191b20", color: "#fff", marginBottom: 8
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            background: "#0bf", color: "#fff", border: "none", borderRadius: 8, padding: "10px 26px", fontWeight: "bold", cursor: "pointer"
          }}
          disabled={!file || !comment}
        >إضافة</button>
      </div>
    </div>
  );
};

export default ProjectCodeReviewPanel;