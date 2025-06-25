import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectNotificationSettingsPanel from "../../../components/ProjectNotificationSettingsPanel";

const initialSettings = [
  { id: 1, user: "يحيى المطور", ai: true, review: true, comment: true, release: true, restore: false, errorsOnly: false },
  { id: 2, user: "سارة المصممة", ai: false, review: false, comment: true, release: true, restore: true, errorsOnly: true }
];

const ProjectNotificationSettingsPage = () => {
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = (id: number, field: string, value: boolean) => {
    setSettings(settings.map(s =>
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إعدادات إشعارات المشروع</h1>
        <ProjectNotificationSettingsPanel
          settings={settings}
          onChange={handleChange}
        />
      </main>
    </div>
  );
};

export default ProjectNotificationSettingsPage;