import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectExportGithubPanel from "../../../components/ProjectExportGithubPanel";

const ProjectExportGithubPage = () => {
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);

  const handleExport = (repoName: string, isNewRepo: boolean) => {
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1400);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>تصدير المشروع إلى GitHub</h1>
        <ProjectExportGithubPanel status={status} onExport={handleExport} />
      </main>
    </div>
  );
};

export default ProjectExportGithubPage;