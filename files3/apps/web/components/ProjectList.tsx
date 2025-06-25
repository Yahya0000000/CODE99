import React from "react";
import { useRouter } from "next/router";

type Project = {
  id: string;
  name: string;
  description: string;
  updatedAt: string;
};

type Props = {
  projects: Project[];
  onDelete?: (id: string) => void;
  onEdit?: (id: string, data: { name: string; description: string }) => void;
};

const ProjectList: React.FC<Props> = ({ projects, onDelete, onEdit }) => {
  const router = useRouter();
  return (
    <div>
      {projects.length === 0 && (
        <div style={{color: "#aaa", fontSize: "1.08em", marginTop: 24}}>لا توجد مشاريع بعد!</div>
      )}
      {projects.map((p) => (
        <div key={p.id} style={{
          background: "#23272f",
          borderRadius: 10,
          padding: "22px 20px",
          marginBottom: 22,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }}>
          <div>
            <div style={{fontWeight: "bold", color: "#0bf", fontSize: "1.12em"}}>{p.name}</div>
            <div style={{color: "#fff", margin: "8px 0 0 0"}}>{p.description}</div>
            <div style={{color: "#aaa", fontSize: "0.98em", marginTop: 7}}>آخر تعديل: {p.updatedAt}</div>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: 10}}>
            <button
              style={{
                background: "#037cf9",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 18px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
              onClick={() => router.push(`/projects/details/${p.id}`)}
            >
              التفاصيل
            </button>
            <button
              style={{
                background: "#119e57",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 18px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
              onClick={() => router.push(`/projects/${p.id}`)}
            >
              تحرير
            </button>
            {onDelete && (
              <button
                style={{
                  background: "#c32b2b",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
                onClick={() => onDelete(p.id)}
              >
                حذف
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;