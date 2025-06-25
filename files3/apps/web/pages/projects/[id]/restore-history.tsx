import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectRestoreHistoryPanel from "../../../components/ProjectRestoreHistoryPanel";

const initialHistory = [
  { id: 1, user: "يحيى المطور", fromVersion: "v1.2.0", toVersion: "v1.1.0", date: "2025-06-25 10:21", canUndo: true },
  { id: 2, user: "سارة المصممة", fromVersion: "v1.1.0", toVersion: "v1.0.0", date: "2025-06-24 19:14", canUndo: false }
];

const ProjectRestoreHistoryPage = () => {
  const [history, setHistory] = useState(initialHistory);

  const handleUndo = (id: number) => {
    setHistory(h =>
      h.map(item =>
        item.id === id ? { ...item, canUndo: false } : item
      )
    );
    alert("تم التراجع عن عملية الاستعادة (محاكاة فقط).");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>سجل استعادة النسخ</h1>
        <ProjectRestoreHistoryPanel history={history} onUndo={handleUndo} />
      </main>
    </div>
  );
};

export default ProjectRestoreHistoryPage;