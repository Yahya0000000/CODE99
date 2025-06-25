import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectCompareVersionsPanel from "../../../components/ProjectCompareVersionsPanel";

const versionsList = [
  { id: 1, version: "v1.0.0", title: "الإصدار الأول" },
  { id: 2, version: "v1.1.0", title: "دعم الذكاء الاصطناعي" },
  { id: 3, version: "v1.2.0", title: "تحسينات واجهة المستخدم" }
];

// محاكاة تغييرات بين إصدارات
const mockDiff = [
  { file: "Main.tsx", status: "modified", diff: "- const x = 1;\n+ const x = 2;" },
  { file: "Score.js", status: "added", diff: "+ إضافة ملف لحساب النقاط" },
  { file: "README.md", status: "modified", diff: "- مشروع تجريبي\n+ مشروع بلغة جافاسكريبت" }
];

const ProjectCompareVersionsPage = () => {
  const [fromVersion, setFromVersion] = useState(1);
  const [toVersion, setToVersion] = useState(2);
  const [diff, setDiff] = useState<any[]>([]);

  const handleCompare = () => {
    // محاكاة: إظهار نفس diff لكل مقارنة
    setDiff(mockDiff);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>مقارنة الإصدارات</h1>
        <ProjectCompareVersionsPanel
          versions={versionsList}
          fromVersion={fromVersion}
          toVersion={toVersion}
          onChangeFrom={setFromVersion}
          onChangeTo={setToVersion}
          onCompare={handleCompare}
          diff={diff}
        />
      </main>
    </div>
  );
};

export default ProjectCompareVersionsPage;