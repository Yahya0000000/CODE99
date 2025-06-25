import React, { useState } from "react";

const ProjectSettingsPanel: React.FC = () => {
  const [projectName, setProjectName] = useState("مشروعي الأول");
  const [description, setDescription] = useState("وصف مختصر للمشروع...");

  return (
    <form style={{
      background: "#21242b",
      borderRadius: "10px",
      padding: "24px",
      maxWidth: "480px",
      color: "#fff",
      border: "1px solid #334"
    }}>
      <div style={{marginBottom: "18px"}}>
        <label style={{color: "#0bf", fontWeight: "bold"}}>اسم المشروع:</label>
        <input
          type="text"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "6px",
            borderRadius: "6px",
            border: "1px solid #444",
            background: "#191b20",
            color: "#fff"
          }}
        />
      </div>
      <div style={{marginBottom: "18px"}}>
        <label style={{color: "#0bf", fontWeight: "bold"}}>الوصف:</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{
            width: "100%",
            minHeight: "70px",
            padding: "10px",
            marginTop: "6px",
            borderRadius: "6px",
            border: "1px solid #444",
            background: "#191b20",
            color: "#fff",
            fontFamily: "inherit"
          }}
        />
      </div>
      <div style={{color: "#aaa", fontSize: "0.99em"}}>
        <span>خصائص أخرى ستضاف لاحقًا: نوع المشروع، إعدادات متقدمة، حذف المشروع، ...</span>
      </div>
    </form>
  );
};

export default ProjectSettingsPanel;