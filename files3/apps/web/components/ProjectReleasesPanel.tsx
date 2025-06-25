import React, { useState } from "react";

type Release = {
  id: number;
  version: string;
  title: string;
  description: string;
  date: string;
  downloadable: boolean;
};

type Props = {
  releases: Release[];
  onAdd: (r: Omit<Release, "id" | "date" | "downloadable">) => void;
};

const ProjectReleasesPanel: React.FC<Props> = ({ releases, onAdd }) => {
  const [version, setVersion] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (version && title) {
      onAdd({ version, title, description });
      setVersion(""); setTitle(""); setDescription("");
    }
  };

  return (
    <div style={{
      background: "#23272f",
      borderRadius: 12,
      padding: "32px",
      maxWidth: 720
    }}>
      <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
        قائمة الإصدارات
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginBottom: 22 }}>
        {releases.map(r => (
          <li key={r.id} style={{
            marginBottom: 18,
            background: "#191b20",
            borderRadius: 8,
            padding: "14px 20px",
            borderRight: "5px solid #037cf9"
          }}>
            <div style={{ fontWeight: "bold", fontSize: "1.07em", color: "#0bf" }}>
              {r.version} – {r.title}
            </div>
            <div style={{ color: "#eee", fontSize: "1em", marginBottom: 4 }}>{r.description}</div>
            <div style={{ color: "#bbb", fontSize: "0.97em" }}>{r.date}</div>
            {r.downloadable && (
              <button
                style={{
                  background: "#119e57", marginTop: 6, color: "#fff", border: "none", borderRadius: 7, padding: "8px 20px", fontWeight: "bold", cursor: "pointer"
                }}
                onClick={() => alert("تحميل ملف الإصدار (محاكاة)")}
              >تنزيل الإصدار</button>
            )}
          </li>
        ))}
      </ul>
      <div style={{ borderTop: "1px solid #444", marginTop: 18, paddingTop: 18 }}>
        <div style={{ fontWeight: "bold", color: "#0bf", marginBottom: 8, fontSize: "1.08em" }}>
          إنشاء إصدار جديد
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          <input
            type="text"
            value={version}
            onChange={e => setVersion(e.target.value)}
            placeholder="رقم الإصدار (مثال: v1.2.0)"
            style={{
              padding: "8px", borderRadius: 7, border: "1px solid #444", background: "#191b20", color: "#fff", flex: 1
            }}
          />
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="عنوان الإصدار"
            style={{
              padding: "8px", borderRadius: 7, border: "1px solid #444", background: "#191b20", color: "#fff", flex: 2
            }}
          />
        </div>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="وصف التغييرات أو الميزات في هذا الإصدار"
          style={{
            width: "100%", minHeight: 50, padding: "8px", borderRadius: 7, border: "1px solid #444",
            background: "#191b20", color: "#fff", marginBottom: 8
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            background: "#0bf", color: "#fff", border: "none", borderRadius: 8, padding: "10px 26px", fontWeight: "bold", cursor: "pointer"
          }}
          disabled={!version || !title}
        >إنشاء إصدار</button>
      </div>
    </div>
  );
};

export default ProjectReleasesPanel;