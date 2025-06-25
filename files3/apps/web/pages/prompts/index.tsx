import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import PromptHistoryList from "../../components/PromptHistoryList";

const initialPrompts = [
  {
    id: "1",
    prompt: "صمم لي لعبة منصات فيها شخصية تقفز",
    type: "project",
    date: "2025-06-22",
    result: "مشروع لعبة منصات مع كود وتصميم أولي"
  },
  {
    id: "2",
    prompt: "حسّن كود دالة renderMain",
    type: "code",
    date: "2025-06-23",
    result: "تم تحسين الكود بنجاح"
  },
  {
    id: "3",
    prompt: "اجعل التصميم داكن وأضف زر تسجيل دخول بارز",
    type: "design",
    date: "2025-06-24",
    result: "تم تعديل التصميم كما طلبت"
  }
];

const PromptsPage = () => {
  const [prompts, setPrompts] = useState(initialPrompts);

  // إعادة استخدام البرومبت (محاكاة: إظهار رسالة أو إعادة إرسال البرومبت)
  const reusePrompt = (prompt: string) => {
    alert(`تمت إعادة إرسال البرومبت: "${prompt}" (محاكاة فقط)`);
  };

  // تعديل البرومبت (محاكاة: فتح نافذة إدخال جديدة)
  const editPrompt = (id: string) => {
    const newText = prompt("اكتب البرومبت الجديد:");
    if (newText) {
      setPrompts(prompts.map(p => p.id === id ? { ...p, prompt: newText } : p));
    }
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#181818",
      color: "#fff"
    }}>
      <Sidebar />
      <main style={{
        flex: 1,
        padding: "40px 32px"
      }}>
        <h1 style={{color: "#0bf", marginBottom: "32px"}}>سجل البرومبتات السابقة</h1>
        <PromptHistoryList
          prompts={prompts}
          onReuse={reusePrompt}
          onEdit={editPrompt}
        />
      </main>
    </div>
  );
};

export default PromptsPage;