import React from "react";

type History = {
  id: number;
  user: string;
  fromVersion: string;
  toVersion: string;
  date: string;
  canUndo: boolean;
};

type Props = {
  history: History[];
  onUndo: (id: number) => void;
};

const ProjectRestoreHistoryPanel: React.FC<Props> = ({ history, onUndo }) => (
  <div style={{
    background: "#23272f",
    borderRadius: 12,
    padding: "32px",
    maxWidth: 720
  }}>
    <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
      سجل عمليات استعادة النسخ السابقة
    </div>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {history.map(h => (
        <li key={h.id} style={{
          marginBottom: 18,
          background: "#191b20",
          borderRadius: 8,
          padding: "14px 20px",
          borderRight: "5px solid #0bf"
        }}>
          <div style={{ fontWeight: "bold", fontSize: "1.07em", color: "#0bf" }}>
            {h.fromVersion} ← {h.toVersion}
          </div>
          <div style={{ color: "#eee", fontSize: "1em", marginBottom: 4 }}>
            {h.user} – {h.date}
          </div>
          <div style={{ marginTop: 8 }}>
            {h.canUndo ? (
              <button
                onClick={() => onUndo(h.id)}
                style={{
                  background: "#f7a30a",
                  color: "#fff",
                  border: "none",
                  borderRadius: 7,
                  padding: "8px 20px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >تراجع عن الاستعادة</button>
            ) : (
              <span style={{ color: "#888" }}>لا يمكن التراجع</span>
            )}
          </div>
        </li>
      ))}
    </ul>
    {history.length === 0 && (
      <div style={{ color: "#aaa", marginTop: 22 }}>لا يوجد سجل لاستعادة النسخ.</div>
    )}
  </div>
);

export default ProjectRestoreHistoryPanel;