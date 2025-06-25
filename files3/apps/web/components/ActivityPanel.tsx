import React, { useState } from "react";

type Activity = {
  id: number;
  type: string;
  user: string;
  action: string;
  date: string;
};

const typeLabels: Record<string, string> = {
  edit: "تعديل",
  team: "فريق",
  run: "تشغيل",
  share: "مشاركة",
  import: "استيراد"
};

const typeColors: Record<string, string> = {
  edit: "#037cf9",
  team: "#119e57",
  run: "#a72cff",
  share: "#f7a30a",
  import: "#0bf"
};

type Props = {
  activities: Activity[];
};

const ActivityPanel: React.FC<Props> = ({ activities }) => {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? activities : activities.filter(a => a.type === filter);

  return (
    <div style={{
      background: "#23272f",
      borderRadius: 12,
      padding: "32px",
      maxWidth: 680
    }}>
      <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
        سجل النشاطات
      </div>
      <div style={{ marginBottom: 18, display: "flex", gap: 10 }}>
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={{
            background: "#191b20", color: "#fff", border: "1px solid #444", borderRadius: 8, padding: "8px 16px"
          }}
        >
          <option value="all">كل الأنواع</option>
          <option value="edit">تعديلات</option>
          <option value="team">فريق</option>
          <option value="run">تشغيل</option>
          <option value="share">مشاركة</option>
          <option value="import">استيراد</option>
        </select>
      </div>
      {filtered.length === 0 && (
        <div style={{ color: "#aaa", marginTop: 22 }}>لا توجد نشاطات من هذا النوع.</div>
      )}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.map(a => (
          <li key={a.id} style={{
            marginBottom: 18,
            background: "#191b20",
            borderRadius: 8,
            padding: "14px 20px",
            borderRight: `5px solid ${typeColors[a.type] || "#eee"}`
          }}>
            <div style={{ color: `${typeColors[a.type] || "#fff"}`, fontWeight: "bold" }}>
              [{typeLabels[a.type] || a.type}]
            </div>
            <div style={{ fontWeight: "bold", fontSize: "1.07em" }}>{a.action}</div>
            <div style={{ color: "#bbb", fontSize: "0.97em" }}>
              {a.user} – {a.date}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityPanel;