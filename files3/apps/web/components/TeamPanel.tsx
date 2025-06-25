import React, { useState } from "react";

type Member = { id: string, name: string, email: string, role: string };

type Props = {
  team: Member[];
  onAdd: (m: { name: string; email: string; role: string }) => void;
  onRemove: (id: string) => void;
  onUpdateRole: (id: string, role: string) => void;
};

const roles = [
  { value: "owner", label: "مالك" },
  { value: "editor", label: "محرر" },
  { value: "viewer", label: "مشاهدة فقط" }
];

const TeamPanel: React.FC<Props> = ({ team, onAdd, onRemove, onUpdateRole }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("viewer");

  const handleAdd = () => {
    if (name && email) {
      onAdd({ name, email, role });
      setName("");
      setEmail("");
      setRole("viewer");
    }
  };

  return (
    <div style={{
      background: "#23272f",
      borderRadius: 12,
      padding: "32px",
      maxWidth: 640
    }}>
      <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.08em", marginBottom: 13 }}>
        أعضاء الفريق
      </div>
      <table style={{
        width: "100%", color: "#fff", marginBottom: 22, borderSpacing: 0
      }}>
        <thead>
          <tr>
            <th style={{ textAlign: "right", padding: "8px 8px" }}>الاسم</th>
            <th style={{ textAlign: "right", padding: "8px 8px" }}>البريد</th>
            <th style={{ textAlign: "right", padding: "8px 8px" }}>الدور</th>
            <th style={{ textAlign: "center", padding: "8px 8px" }}>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {team.map(m => (
            <tr key={m.id} style={{ borderBottom: "1px solid #333" }}>
              <td style={{ padding: "8px 8px" }}>{m.name}</td>
              <td style={{ padding: "8px 8px" }}>{m.email}</td>
              <td style={{ padding: "8px 8px" }}>
                <select
                  value={m.role}
                  onChange={e => onUpdateRole(m.id, e.target.value)}
                  disabled={m.role === "owner"}
                  style={{
                    background: "#191b20", color: "#fff", border: "1px solid #444", borderRadius: 8, padding: "6px 18px"
                  }}
                >
                  {roles.map(r => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </td>
              <td style={{ padding: "8px 8px", textAlign: "center" }}>
                {m.role !== "owner" && (
                  <button
                    onClick={() => onRemove(m.id)}
                    style={{
                      background: "#c32b2b", color: "#fff", border: "none", borderRadius: 8, padding: "7px 18px", fontWeight: "bold", cursor: "pointer"
                    }}
                  >إزالة</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{
        borderTop: "1px solid #444", paddingTop: 18, marginTop: 12, display: "flex", gap: 12, alignItems: "center"
      }}>
        <input
          type="text"
          placeholder="اسم العضو"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{
            padding: "10px", borderRadius: 7, border: "1px solid #444", background: "#191b20", color: "#fff", flex: 1
          }}
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            padding: "10px", borderRadius: 7, border: "1px solid #444", background: "#191b20", color: "#fff", flex: 1
          }}
        />
        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          style={{
            background: "#191b20", color: "#fff", border: "1px solid #444", borderRadius: 8, padding: "10px 18px"
          }}
        >
          {roles.map(r => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
        <button
          onClick={handleAdd}
          style={{
            background: "#119e57", color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: "bold", cursor: "pointer"
          }}
        >إضافة</button>
      </div>
    </div>
  );
};

export default TeamPanel;