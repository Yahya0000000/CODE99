import React from "react";

type Activity = {
  id: number;
  type: string;
  user: string;
  message: string;
  date: string;
  link: string;
};

const typeLabels: Record<string, string> = {
  file_add: "إضافة ملف",
  file_edit: "تعديل ملف",
  file_delete: "حذف ملف",
  ai_generate: "توليد AI",
  comment: "تعليق",
  release: "إصدار",
  restore: "استعادة نسخة",
  notification: "إشعار",
  review: "مراجعة كود"
};

const typeColors: Record<string, string> = {
  file_add: "#119e57",
  file_edit: "#f7a30a",
  file_delete: "#c32b2b",
  ai_generate: "#037cf9",
  comment: "#0bf",
  release: "#9933ff",
  restore: "#c32b2b",
  notification: "#f7a30a",
  review: "#0cf"
};

type Props = {
  activity: Activity[];
};

const ProjectActivityLogPanel: React.FC<Props> = ({ activity }) => (
  <div style={{
    background: "#23272f",
    borderRadius: 12,
    padding: "32px",
    maxWidth: 780
  }}>
    <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
      كل نشاطات المشروع
    </div>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {activity.map(a => (
        <li key={a.id} style={{
          marginBottom: 18,
          background: "#191b20",
          borderRadius: 8,
          padding: "14px 20px",
          borderRight: `5px solid ${typeColors[a.type] || "#eee"}`
        }}>
          <div style={{ color: typeColors[a.type] || "#fff", fontWeight: "bold" }}>
            [{typeLabels[a.type] || a.type}] {a.user}
          </div>
          <div style={{ color: "#eee" }}>{a.message}</div>
          <div style={{ color: "#bbb", fontSize: "0.97em" }}>{a.date}</div>
          {a.link && (
            <div style={{ marginTop: 8 }}>
              <a href={a.link} style={{ color: "#0bf", textDecoration: "underline", fontSize: "0.98em" }}>
                الانتقال إلى النشاط
              </a>
            </div>
          )}
        </li>
      ))}
    </ul>
    {activity.length === 0 && (
      <div style={{ color: "#aaa", marginTop: 22 }}>لا يوجد سجل نشاطات بعد.</div>
    )}
  </div>
);

export default ProjectActivityLogPanel;