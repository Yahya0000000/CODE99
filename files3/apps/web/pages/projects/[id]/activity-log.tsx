import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectActivityLogPanel from "../../../components/ProjectActivityLogPanel";

const initialActivity = [
  { id: 1, type: "file_add", user: "يحيى المطور", message: "تمت إضافة ملف Main.tsx", date: "2025-06-25 10:15", link: "/projects/1/files/Main.tsx" },
  { id: 2, type: "ai_generate", user: "AI", message: "توليد الكود للعبة جديدة", date: "2025-06-25 10:16", link: "" },
  { id: 3, type: "comment", user: "محمد القارئ", message: "أضف دعم للغة بايثون", date: "2025-06-25 10:17", link: "/projects/1/comments" },
  { id: 4, type: "release", user: "سارة المصممة", message: "تم إنشاء إصدار v1.2.0", date: "2025-06-25 10:18", link: "/projects/1/releases" },
  { id: 5, type: "restore", user: "يحيى المطور", message: "استعادة نسخة v1.1.0", date: "2025-06-25 10:19", link: "/projects/1/restore-history" },
  { id: 6, type: "notification", user: "نظام", message: "تنبيه: هناك تحديث جديد متاح", date: "2025-06-25 10:20", link: "/projects/1/notifications" }
];

const ProjectActivityLogPage = () => {
  const [activity, setActivity] = useState(initialActivity);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>سجل نشاطات المشروع</h1>
        <ProjectActivityLogPanel activity={activity} />
      </main>
    </div>
  );
};

export default ProjectActivityLogPage;