import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import TeamPanel from "../../../components/TeamPanel";

const initialTeam = [
  { id: "u1", name: "يحيى المطور", email: "yahya@example.com", role: "owner" },
  { id: "u2", name: "سارة المصممة", email: "sara@ai.com", role: "editor" },
  { id: "u3", name: "محمد القارئ", email: "mohammed@ai.com", role: "viewer" }
];

const TeamPage = () => {
  const [team, setTeam] = useState(initialTeam);

  const addMember = (member: { name: string; email: string; role: string }) => {
    setTeam([...team, { ...member, id: Math.random().toString(36).substring(2, 9) }]);
  };
  const removeMember = (id: string) => {
    setTeam(team.filter(t => t.id !== id));
  };
  const updateRole = (id: string, role: string) => {
    setTeam(team.map(t => t.id === id ? { ...t, role } : t));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إدارة فريق المشروع</h1>
        <TeamPanel
          team={team}
          onAdd={addMember}
          onRemove={removeMember}
          onUpdateRole={updateRole}
        />
      </main>
    </div>
  );
};

export default TeamPage;