import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectAILogsPanel from "../../../components/ProjectAILogsPanel";

const initialAILogs = [
  { id: 1, type: "prompt", message: "برومبت: أنشئ لعبة منصات بلغة JavaScript", date: "2025-06-25 09:38", status: "success" },
  { id: 2, type: "generation", message: "توليد ملفات الكود (4 ملفات)", date: "2025-06-25 09:39", status: "success" },
  { id: 3, type: "qa", message: "AI QA: اكتشف خطأ في الدالة startGame()", date: "2025-06-25 09:40", status: "error" },
  { id: 4, type: "prompt", message: "برومبت: أضف نظام نقاط", date: "2025-06-25 09:44", status: "success" },
  { id: 5, type: "generation", message: "تحديث ملف Score.js", date: "2025-06-25 09:45", status: "success" }
];

const ProjectAILogsPage = () => {
  const [logs, setLogs] = useState(initialAILogs);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>سجلات الذكاء الاصطناعي</h1>
        <ProjectAILogsPanel logs={logs} />
      </main>
    </div>
  );
};

export default ProjectAILogsPage;