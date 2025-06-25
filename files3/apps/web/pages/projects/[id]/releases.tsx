import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectReleasesPanel from "../../../components/ProjectReleasesPanel";

const initialReleases = [
  { id: 1, version: "v1.0.0", title: "الإصدار الأول", description: "الإصدار الأول من المشروع مع الوظائف الأساسية.", date: "2025-06-25 09:20", downloadable: true },
  { id: 2, version: "v1.1.0", title: "دعم الذكاء الاصطناعي", description: "تمت إضافة دعم الذكاء الاصطناعي وتوليد الكود.", date: "2025-06-25 10:05", downloadable: true }
];

const ProjectReleasesPage = () => {
  const [releases, setReleases] = useState(initialReleases);

  const addRelease = (release: any) => {
    setReleases([
      { ...release, id: Math.random(), date: new Date().toLocaleString("ar-EG"), downloadable: true },
      ...releases
    ]);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>إدارة إصدارات المشروع</h1>
        <ProjectReleasesPanel releases={releases} onAdd={addRelease} />
      </main>
    </div>
  );
};

export default ProjectReleasesPage;