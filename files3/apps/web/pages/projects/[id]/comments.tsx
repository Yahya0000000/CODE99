import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectCommentsPanel from "../../../components/ProjectCommentsPanel";

const initialComments = [
  { id: 1, user: "يحيى المطور", text: "فكرة جميلة جدًا! هل يمكن إضافة دعم للغة بايثون؟", date: "2025-06-25 09:55", replies: [
    { id: 11, user: "سارة المصممة", text: "أوافقك الرأي، دعم بايثون مهم.", date: "2025-06-25 09:58" }
  ] },
  { id: 2, user: "محمد القارئ", text: "هل يمكن شرح المزيد عن ميزة الذكاء الاصطناعي؟", date: "2025-06-25 10:10", replies: [] }
];

const ProjectCommentsPage = () => {
  const [comments, setComments] = useState(initialComments);

  const addComment = (text: string, user = "يحيى المطور") => {
    setComments([
      ...comments,
      { id: Math.random(), user, text, date: new Date().toLocaleString("ar-EG"), replies: [] }
    ]);
  };

  const addReply = (commentId: number, text: string, user = "يحيى المطور") => {
    setComments(comments.map(c =>
      c.id === commentId
        ? { ...c, replies: [...c.replies, { id: Math.random(), user, text, date: new Date().toLocaleString("ar-EG") }] }
        : c
    ));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>تعليقات المشروع</h1>
        <ProjectCommentsPanel comments={comments} onAdd={addComment} onReply={addReply} />
      </main>
    </div>
  );
};

export default ProjectCommentsPage;