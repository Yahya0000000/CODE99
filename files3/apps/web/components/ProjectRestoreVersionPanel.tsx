import React from "react";

type Version = {
  id: number;
  version: string;
  title: string;
  date: string;
};

type Props = {
  versions: Version[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  onConfirmRestore: () => void;
  restoredVersion: string | null;
};

const ProjectRestoreVersionPanel: React.FC<Props> = ({
  versions, selectedId, onSelect, onConfirmRestore, restoredVersion
}) => (
  <div style={{
    background: "#23272f",
    borderRadius: 12,
    padding: "32px",
    maxWidth: 720
  }}>
    <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
      اختر نسخة سابقة لاستعادتها
    </div>
    <ul style={{ listStyle: "none", padding: 0, marginBottom: 22 }}>
      {versions.map(v => (
        <li key={v.id} style={{
          marginBottom: 18,
          background: selectedId === v.id ? "#204070" : "#191b20",
          borderRadius: 8,
          padding: "14px 20px",
          borderRight: "5px solid #037cf9",
          cursor: "pointer"
        }}
          onClick={() => onSelect(v.id)}
        >
          <div style={{ fontWeight: "bold", fontSize: "1.07em", color: "#0bf" }}>
            {v.version} – {v.title}
          </div>
          <div style={{ color: "#eee", fontSize: "1em", marginBottom: 4 }}>{v.date}</div>
        </li>
      ))}
    </ul>
    <button
      onClick={onConfirmRestore}
      style={{
        background: "#c32b2b",
        color: "#fff",
        border: "none",
        borderRadius: 8,
        padding: "10px 28px",
        fontWeight: "bold",
        fontSize: "1.08em",
        cursor: "pointer"
      }}
      disabled={selectedId == null}
    >استعادة النسخة المحددة</button>
    {restoredVersion && (
      <div style={{ color: "#119e57", fontWeight: "bold", marginTop: 24 }}>
        تم استعادة النسخة: {restoredVersion} بنجاح!
      </div>
    )}
  </div>
);

export default ProjectRestoreVersionPanel;