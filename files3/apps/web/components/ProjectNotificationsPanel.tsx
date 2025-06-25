import React from "react";

type Notification = {
  id: number;
  type: "success" | "error" | "warning" | "info";
  from: string;
  text: string;
  date: string;
  read: boolean;
};

type Props = {
  notifications: Notification[];
  onRead: (id: number) => void;
  onRemove: (id: number) => void;
};

const typeColors: Record<Notification["type"], string> = {
  success: "#119e57",
  error: "#c32b2b",
  warning: "#f7a30a",
  info: "#037cf9"
};

const typeLabels: Record<Notification["type"], string> = {
  success: "نجاح",
  error: "خطأ",
  warning: "تنبيه",
  info: "ملاحظة"
};

const ProjectNotificationsPanel: React.FC<Props> = ({ notifications, onRead, onRemove }) => (
  <div style={{
    background: "#23272f",
    borderRadius: 12,
    padding: "32px",
    maxWidth: 720
  }}>
    <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
      سجل إشعارات المشروع
    </div>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {notifications.map(n => (
        <li key={n.id} style={{
          marginBottom: 18,
          background: n.read ? "#20222a" : "#191b20",
          borderRadius: 8,
          padding: "14px 20px",
          borderRight: `5px solid ${typeColors[n.type]}`,
          opacity: n.read ? 0.7 : 1
        }}>
          <div style={{ color: typeColors[n.type], fontWeight: "bold" }}>
            [{typeLabels[n.type]}] من: {n.from}
          </div>
          <div style={{ color: "#eee", fontSize: "1em", marginBottom: 4 }}>{n.text}</div>
          <div style={{ color: "#bbb", fontSize: "0.97em" }}>{n.date}</div>
          <div style={{ marginTop: 8, display: "flex", gap: 10 }}>
            {!n.read && (
              <button
                onClick={() => onRead(n.id)}
                style={{
                  background: "#037cf9",
                  color: "#fff",
                  border: "none",
                  borderRadius: 7,
                  padding: "7px 18px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >تمييز كمقروء</button>
            )}
            <button
              onClick={() => onRemove(n.id)}
              style={{
                background: "#c32b2b",
                color: "#fff",
                border: "none",
                borderRadius: 7,
                padding: "7px 18px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >حذف</button>
          </div>
        </li>
      ))}
    </ul>
    {notifications.length === 0 && (
      <div style={{ color: "#aaa", marginTop: 22 }}>لا توجد إشعارات حالياً.</div>
    )}
  </div>
);

export default ProjectNotificationsPanel;