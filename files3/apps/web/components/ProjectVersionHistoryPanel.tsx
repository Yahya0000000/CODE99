import React, { useState } from "react";

type Version = {
  id: string;
  date: string;
  summary: string;
};

const initialVersions: Version[] = [
  { id: "v3", date: "2025-06-25 09:25", summary: "تعديل التصميم ليصبح داكن وإضافة زر تسجيل دخول بارز" },
  { id: "v2", date: "2025-06-24 17:45", summary: "إصلاح خطأ في دالة renderMain وتحسين الأداء" },
  { id: "v1", date: "2025-06-22 13:12", summary: "إنشاء المشروع وتوليد الكود والتصميم الأولي" }
];

const ProjectVersionHistoryPanel: React.FC = () => {
  const [versions, setVersions] = useState<Version[]>(initialVersions);

  const handleRestore = (id: string) => {
    alert(`تم استرجاع النسخة: ${id} (محاكاة فقط)`);
  };

  return (
    <div style={{
      background: "#23272f",
      borderRadius: 12,
      padding: "30px 24px",
      minHeight: 260
    }}>
      <div style={{fontWeight:"bold", color:"#0bf", fontSize:"1.13em", marginBottom: 18}}>
        تاريخ التعديلات (الإصدارات السابقة)
      </div>
      {versions.length === 0 && (
        <div style={{color:"#aaa", fontSize:"1.07em"}}>لا توجد إصدارات محفوظة.</div>
      )}
      {versions.map(v => (
        <div key={v.id} style={{
          background: "#191b20",
          border: "1px solid #353535",
          borderRadius: 8,
          padding: "15px 16px",
          marginBottom: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div>
            <div style={{fontWeight:"bold", color:"#fff"}}>{v.summary}</div>
            <div style={{color:"#aaa", fontSize:"0.97em"}}>التاريخ: {v.date}</div>
            <div style={{color:"#bbb", fontSize:"0.93em"}}>الإصدار: {v.id}</div>
          </div>
          <button
            onClick={()=>handleRestore(v.id)}
            style={{
              background: "#0bf",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "9px 20px",
              fontWeight: "bold",
              fontSize: "1.02em",
              cursor: "pointer"
            }}
          >
            استرجاع هذه النسخة
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectVersionHistoryPanel;