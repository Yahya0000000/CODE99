import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectCodeReviewPanel from "../../../components/ProjectCodeReviewPanel";

const initialReviews = [
  { id: 1, file: "Main.tsx", line: 12, user: "يحيى المطور", status: "accepted", comment: "الكود منظم وواضح.", date: "2025-06-25 09:55" },
  { id: 2, file: "Score.js", line: 30, user: "سارة المصممة", status: "changes", comment: "يفضل استخدام useState بدلاً من متغير عادي.", date: "2025-06-25 09:57" },
  { id: 3, file: "assets/sprites.ts", line: 4, user: "محمد القارئ", status: "rejected", comment: "هناك خطأ في اسم الملف المستورد.", date: "2025-06-25 10:01" }
];

const ProjectCodeReviewPage = () => {
  const [reviews, setReviews] = useState(initialReviews);

  const addReview = (review: any) => {
    setReviews([...reviews, { ...review, id: Math.random(), date: new Date().toLocaleString("ar-EG") }]);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>مراجعة الكود</h1>
        <ProjectCodeReviewPanel reviews={reviews} onAdd={addReview} />
      </main>
    </div>
  );
};

export default ProjectCodeReviewPage;