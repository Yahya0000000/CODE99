import React from "react";

const PreviewPanel: React.FC = () => (
  <div style={{
    background: "#20262e",
    borderRadius: "10px",
    padding: "24px",
    minHeight: "220px",
    color: "#fff",
    border: "1px solid #254"
  }}>
    <div style={{color: "#0bf", fontWeight: "bold", marginBottom: "16px"}}>معاينة المشروع</div>
    <p style={{color: "#aaa"}}>
      هنا ستظهر معاينة حية لمخرجات المشروع البرمجي/التصميمي عند التفعيل.<br/>
      (سيتم تنفيذ الرندر التلقائي لاحقًا وربطه بالكود والتصميم الفعلي)
    </p>
  </div>
);

export default PreviewPanel;