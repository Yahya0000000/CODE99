import React from "react";

type Props = {
  onStartTour: () => void;
};

const HelpPanel: React.FC<Props> = ({ onStartTour }) => (
  <div style={{
    background: "#23272f",
    borderRadius: 12,
    padding: "32px",
    maxWidth: 560,
    marginBottom: 22
  }}>
    <div style={{fontWeight:"bold", color:"#0bf", fontSize:"1.08em", marginBottom: 13}}>
      كيف تستخدم المنصة؟
    </div>
    <ul style={{color:"#eee", marginBottom:18, fontSize:"1.04em"}}>
      <li>ابدأ بإنشاء مشروع جديد من مربع البرومبت في الصفحة الرئيسية.</li>
      <li>استعرض الكود والتصميم والمعاينة وعدّلها بكل سهولة.</li>
      <li>استخدم الذكاء الاصطناعي لتحسين المشروع أو حل المشاكل تلقائيًا.</li>
      <li>راجع تاريخ التعديلات وصحح الأخطاء بسرعة.</li>
      <li>شارك مشروعك أو صدّره كملف مضغوط.</li>
    </ul>
    <div style={{marginBottom: 22}}>
      <button
        onClick={onStartTour}
        style={{
          background: "#037cf9",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "12px 32px",
          fontWeight: "bold",
          fontSize: "1.07em",
          cursor: "pointer"
        }}
      >ابدأ جولة تعريفية</button>
    </div>
    <div style={{marginBottom: 10, color:"#aaa", fontSize:"0.98em"}}>
      لمزيد من الشروحات شاهد:
    </div>
    <ul style={{color:"#fff", fontSize:"1.02em", marginBottom: 0}}>
      <li>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener" style={{color:"#4f8cff", textDecoration:"underline"}}>فيديو تعريفي على يوتيوب</a>
      </li>
      <li>
        <a href="https://ai-ide.com/docs" target="_blank" rel="noopener" style={{color:"#4f8cff", textDecoration:"underline"}}>التوثيق الكامل للمنصة</a>
      </li>
    </ul>
  </div>
);

export default HelpPanel;