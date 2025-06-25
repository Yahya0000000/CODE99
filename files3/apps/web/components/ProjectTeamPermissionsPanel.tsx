import React from "react";

type Member = {
  id: number;
  name: string;
  role: "owner" | "editor" | "viewer";
};

type Props = {
  members: Member[];
  onChangeRole: (id: number, newRole: "owner" | "editor" | "viewer") => void;
  onRemove: (id: number) => void;
};

const roleLabels: Record<Member["role"], string> = {
  owner: "مسؤول",
  editor: "محرر",
  viewer: "مشاهدة فقط"
};

const ProjectTeamPermissionsPanel: React.FC<Props> = ({ members, onChangeRole, onRemove }) => (
  <div style={{
    background: "#23272f",
    borderRadius: 12,
    padding: "32px",
    maxWidth: 720
  }}>
    <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
      إدارة صلاحيات أعضاء الفريق
    </div>
    <table style={{ width: "100%", borderCollapse: "collapse", color: "#fff" }}>
      <thead>
        <tr style={{ background: "#191b20" }}>
          <th style={{ padding: "10px 0" }}>العضو</th>
          <th>الدور</th>
          <th>تغيير الدور</th>
          <th>إزالة</th>
        </tr>
      </thead>
      <tbody>
        {members.map(m => (
          <tr key={m.id} style={{ borderBottom: "1px solid #444" }}>
            <td style={{ padding: "10px 0" }}>{m.name}</td>
            <td>{roleLabels[m.role]}</td>
            <td>
              <select
                value={m.role}
                onChange={e => onChangeRole(m.id, e.target.value as Member["role"])}
                disabled={m.role === "owner"}
                style={{
                  background: "#191b20", color: "#fff", border: "1px solid #444", borderRadius: 8, padding: "6px 16px"
                }}
              >
                <option value="owner">مسؤول</option>
                <option value="editor">محرر</option>
                <option value="viewer">مشاهدة فقط</option>
              </select>
            </td>
            <td>
              {m.role !== "owner" ? (
                <button
                  onClick={() => onRemove(m.id)}
                  style={{
                    background: "#c32b2b",
                    color: "#fff",
                    border: "none",
                    borderRadius: 7,
                    padding: "7px 18px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >إزالة</button>
              ) : (
                <span style={{ color: "#888" }}>لا يمكن إزالة المسؤول</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {members.length === 0 && (
      <div style={{ color: "#aaa", marginTop: 22 }}>لا يوجد أعضاء في الفريق.</div>
    )}
  </div>
);

export default ProjectTeamPermissionsPanel;