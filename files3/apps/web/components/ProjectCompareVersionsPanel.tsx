import React from "react";

type Version = {
  id: number;
  version: string;
  title: string;
};

type Diff = {
  file: string;
  status: "added" | "modified" | "removed";
  diff: string;
};

type Props = {
  versions: Version[];
  fromVersion: number;
  toVersion: number;
  onChangeFrom: (id: number) => void;
  onChangeTo: (id: number) => void;
  onCompare: () => void;
  diff: Diff[];
};

const statusColors: Record<string, string> = {
  added: "#119e57",
  modified: "#037cf9",
  removed: "#c32b2b"
};

const statusLabels: Record<string, string> = {
  added: "مضاف",
  modified: "معدل",
  removed: "محذوف"
};

const ProjectCompareVersionsPanel: React.FC<Props> = ({
  versions, fromVersion, toVersion, onChangeFrom, onChangeTo, onCompare, diff
}) => (
  <div style={{
    background: "#23272f",
    borderRadius: 12,
    padding: "32px",
    maxWidth: 720
  }}>
    <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
      اختر الإصدارات للمقارنة
    </div>
    <div style={{ display: "flex", gap: 16, marginBottom: 18 }}>
      <div>
        <label style={{ fontWeight: "bold", color: "#fff" }}>من إصدار:</label>
        <select
          value={fromVersion}
          onChange={e => onChangeFrom(Number(e.target.value))}
          style={{
            background: "#191b20", color: "#fff", border: "1px solid #444",
            borderRadius: 8, padding: "8px 18px", marginRight: 8
          }}
        >
          {versions.map(v => (
            <option key={v.id} value={v.id}>{v.version} - {v.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label style={{ fontWeight: "bold", color: "#fff" }}>إلى إصدار:</label>
        <select
          value={toVersion}
          onChange={e => onChangeTo(Number(e.target.value))}
          style={{
            background: "#191b20", color: "#fff", border: "1px solid #444",
            borderRadius: 8, padding: "8px 18px"
          }}
        >
          {versions.map(v => (
            <option key={v.id} value={v.id}>{v.version} - {v.title}</option>
          ))}
        </select>
      </div>
      <button
        onClick={onCompare}
        style={{
          background: "#0bf", color: "#fff", border: "none", borderRadius: 8,
          padding: "10px 26px", fontWeight: "bold", cursor: "pointer", alignSelf: "flex-end", marginRight: 18
        }}
      >قارن</button>
    </div>
    {diff.length > 0 && (
      <div>
        <div style={{ fontWeight: "bold", color: "#0bf", marginBottom: 10 }}>الاختلافات بين الإصدارات:</div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {diff.map((d, i) => (
            <li key={i} style={{
              marginBottom: 18,
              background: "#191b20",
              borderRadius: 8,
              padding: "14px 20px",
              borderRight: `5px solid ${statusColors[d.status]}`
            }}>
              <div style={{ color: statusColors[d.status], fontWeight: "bold" }}>
                [{statusLabels[d.status]}] {d.file}
              </div>
              <pre style={{
                background: "#222",
                color: "#fff",
                padding: "12px",
                borderRadius: "8px",
                marginTop: 10,
                overflowX: "auto"
              }}>{d.diff}</pre>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default ProjectCompareVersionsPanel;