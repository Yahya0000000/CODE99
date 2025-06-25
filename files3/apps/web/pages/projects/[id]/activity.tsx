import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ActivityPanel from "../../../components/ActivityPanel";

const initialActivities = [
  { id: 1, type: "edit", user: "يحيى المطور", action: "عدل ملف Main.tsx", date: "2025-06-25 09:25" },
  { id: 2, type: "team", user: "سارة المصممة", action: "انضمت إلى الفريق", date: "2025-06-25 08:18" },
  { id: 3, type: "run", user: "يحيى المطور", action: "شغل المشروع محلياً", date: "2025-06-25 08:10" },
  { id: 4, type: "share", user: "محمد القارئ", action: "شارك المشروع مع رابط عام", date: "2025-06-24 23:54" },
  { id: 5, type: "import", user: "يحيى المطور", action: "استورد مشروع من GitHub", date: "2025-06-24 22:01" }
];

const ActivityPage = () => {
  const [activities, setActivities] = useState(initialActivities);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>سجل النشاطات</h1>
        <ActivityPanel activities={activities} />
      </main>
    </div>
  );
};

export default ActivityPage;