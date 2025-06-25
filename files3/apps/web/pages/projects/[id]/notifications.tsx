import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectNotificationsPanel from "../../../components/ProjectNotificationsPanel";

const initialNotifications = [
  { id: 1, type: "success", from: "AI", text: "تم توليد ملفات الكود بنجاح.", date: "2025-06-25 10:10", read: false },
  { id: 2, type: "warning", from: "نظام", text: "هناك تحديث جديد متاح للمشروع.", date: "2025-06-25 10:12", read: false },
  { id: 3, type: "info", from: "يحيى المطور", text: "تم إضافة عضو جديد للفريق.", date: "2025-06-25 10:13", read: true },
  { id: 4, type: "error", from: "AI", text: "فشل اختبار الوحدة في ملف Score.js.", date: "2025-06-25 10:14", read: false }
];

const ProjectNotificationsPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إشعارات المشروع</h1>
        <ProjectNotificationsPanel
          notifications={notifications}
          onRead={markAsRead}
          onRemove={removeNotification}
        />
      </main>
    </div>
  );
};

export default ProjectNotificationsPage;