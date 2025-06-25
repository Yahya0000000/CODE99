import React from "react";
import { useRouter } from "next/router";

type Props = {
  project: {
    id?: string | string[];
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    edits: number;
  }
};

const ProjectDetailsPanel: React.FC<Props> = ({ project }) => {
  const router = useRouter();
  return (
    <section style={{
      background: "#23272f",
      borderRadius: "10px",
      padding: "28px 18px",
      maxWidth: "520px"
    }}>
      <div style={{marginBottom: "18px"}}>
        <div style={{fontWeight: "bold", color: "#0bf"}}>اسم المشروع:</div>
        <div style={{marginTop: "7px", color: "#fff"}}>{project.name}</div>
      </div>
      <div style={{marginBottom: "18px"}}>
        <div style={{fontWeight: "bold", color: "#0bf"}}>الوصف:</div>
        <div style={{marginTop: "7px", color: "#eee"}}>{project.description}</div>
      </div>
      <div style={{marginBottom: "18px"}}>
        <div style={{fontWeight: "bold", color: "#0bf"}}>تاريخ الإنشاء:</div>
        <div style={{marginTop: "7px", color: "#fff"}}>{project.createdAt}</div>
      </div>
      <div style={{marginBottom: "18px"}}>
        <div style={{fontWeight: "bold", color: "#0bf"}}>آخر تعديل:</div>
        <div style={{marginTop: "7px", color: "#fff"}}>{project.updatedAt}</div>
      </div>
      <div style={{marginBottom: "18px"}}>
        <div style={{fontWeight: "bold", color: "#0bf"}}>عدد التعديلات:</div>
        <div style={{marginTop: "7px", color: "#fff"}}>{project.edits}</div>
      </div>
      <button
        style={{
          marginTop: "18px",
          background: "linear-gradient(90deg,#0bf,#4f8cff)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "14px 30px",
          fontWeight: "bold",
          fontSize: "1.1em",
          cursor: "pointer"
        }}
        onClick={() => router.push(`/projects/${project.id}`)}
      >
        الانتقال إلى التحرير &rarr;
      </button>
    </section>
  );
};

export default ProjectDetailsPanel;