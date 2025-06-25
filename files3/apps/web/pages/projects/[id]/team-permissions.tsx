import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectTeamPermissionsPanel from "../../../components/ProjectTeamPermissionsPanel";

const initialMembers = [
  { id: 1, name: "يحيى المطور", role: "owner" },
  { id: 2, name: "سارة المصممة", role: "editor" },
  { id: 3, name: "محمد القارئ", role: "viewer" }
];

const ProjectTeamPermissionsPage = () => {
  const [members, setMembers] = useState(initialMembers);

  const handleChangeRole = (id: number, newRole: string) => {
    setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m));
  };

  const handleRemove = (id: number) => {
    setMembers(members.filter(m => m.id !== id));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>صلاحيات الفريق</h1>
        <ProjectTeamPermissionsPanel
          members={members}
          onChangeRole={handleChangeRole}
          onRemove={handleRemove}
        />
      </main>
    </div>
  );
};

export default ProjectTeamPermissionsPage;