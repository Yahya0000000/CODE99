import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAuditLogPanel from "../../../components/ProjectAuditLogPanel";

const initialAudit = [
  { id: 1, type: "login", user: "يحيى المطور", ip: "192.168.1.100", date: "2025-06-25 10:30", details: "تسجيل دخول ناجح", severity: "info" },
  { id: 2, type: "permission_change", user: "سارة المصممة", ip: "192.168.1.101", date: "2025-06-25 10:32", details: "تغيير دور محمد القارئ من مشاهدة فقط إلى محرر", severity: "warning" },
  { id: 3, type: "security_alert", user: "نظام", ip: "8.8.8.8", date: "2025-06-25 10:34", details: "محاولة تسجيل دخول فاشلة", severity: "error" }
];

const ProjectAuditLogPage = () => {
  const [audit, setAudit] = useState(initialAudit);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>سجل التدقيق والأمان</h1>
        <ProjectAuditLogPanel audit={audit} />
      </main>
    </div>
  );
};

export default ProjectAuditLogPage;