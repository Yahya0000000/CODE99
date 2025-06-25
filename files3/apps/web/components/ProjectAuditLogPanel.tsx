import React from "react";

type Audit = {
  id: number;
  type: string;
  user: string;
  ip: string;
  date: string;
  details: string;
  severity: "info" | "warning" | "error";
};

const typeLabels: Record<string, string> = {
  login: "تسجيل دخول",
  permission_change: "تغيير صلاحيات",
  security_alert: "تنبيه أمني"
};

const severityColors: Record<string, string> = {
  info: "#037cf9",
  warning: "#f7a30a",
  error: "#c32b2b"
};

type Props = {
  audit: Audit[];
};

const ProjectAuditLogPanel: React.FC<Props> = ({ audit }) => (
  <div style={{
    background: "#23272f",
    borderRadius: 12,
    padding: "32px",
    maxWidth: 850
  }}>
    <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
      سجل عمليات الدخول والتدقيق الأمني
    </div>
    <table style={{ width: "100%", borderCollapse: "collapse", color: "#fff" }}>
      <thead>
        <tr style={{ background: "#191b20" }}>
          <th style={{ padding: "10px 0" }}>الوقت</th>
          <th>المستخدم</th>
          <th>العملية</th>
          <th>عنوان IP</th>
          <th>التفاصيل</th>
          <th>الخطورة</th>
        </tr>
      </thead>
      <tbody>
        {audit.map(a => (
          <tr key={a.id} style={{ borderBottom: "1px solid #444" }}>
            <td style={{ padding: "10px 0" }}>{a.date}</td>
            <td>{a.user}</td>
            <td>{typeLabels[a.type] || a.type}</td>
            <td>{a.ip}</td>
            <td>{a.details}</td>
            <td style={{ color: severityColors[a.severity], fontWeight: "bold" }}>
              {a.severity === "info" ? "معلومة" : a.severity === "warning" ? "تنبيه" : "خطأ"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {audit.length === 0 && (
      <div style={{ color: "#aaa", marginTop: 22 }}>لا يوجد بيانات تدقيق بعد.</div>
    )}
  </div>
);

export default ProjectAuditLogPanel;