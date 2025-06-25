import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import HelpPanel from "../../components/HelpPanel";

const HelpPage = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#181818",
      color: "#fff"
    }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{color: "#0bf", marginBottom: "32px"}}>المساعدة والدعم</h1>
        <HelpPanel onStartTour={() => setShowOnboarding(true)} />
        {showOnboarding && (
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999
          }}>
            <OnboardingTour onClose={() => setShowOnboarding(false)} />
          </div>
        )}
      </main>
    </div>
  );
};

export default HelpPage;

// مكون الجولة التعريفية (محاكاة)
const onboardingSteps = [
  {
    title: "مرحبًا بك في منصة الذكاء الاصطناعي",
    content: "هذه المنصة تمكنك من بناء تطبيقات وألعاب ومواقع من خلال الذكاء الاصطناعي بسهولة وسرعة."
  },
  {
    title: "شريط المشاريع والبرومبت",
    content: "استخدم مربع البرومبت لإنشاء أي مشروع عبر الأوامر العربية أو الإنجليزية."
  },
  {
    title: "Workspace متعدد التبويبات",
    content: "كل مشروع يفتح في مساحة عمل بداخلها كود وتصميم ومعاينة واختبار AI وتاريخ تعديلات."
  },
  {
    title: "تشغيل ومعاينة محلية",
    content: "يمكنك تجربة مشروعك وتشغيله محليًا مباشرة من الواجهة."
  },
  {
    title: "مشاركة وتصدير المشروع",
    content: "شارك مشروعك برابط أو نزّل كل ملفاته كحزمة واحدة."
  },
  {
    title: "هل تحتاج مزيدًا من الدعم؟",
    content: "تواصل مع الدعم الفني أو شاهد الشروحات التفصيلية."
  }
];

function OnboardingTour({onClose}:{onClose:()=>void}) {
  const [step, setStep] = useState(0);
  const isLast = step === onboardingSteps.length - 1;

  return (
    <div style={{
      background: "#23272f",
      borderRadius: 14,
      padding: "42px 38px",
      minWidth: 340,
      maxWidth: 430,
      color: "#fff",
      textAlign: "center"
    }}>
      <div style={{fontWeight:"bold", color:"#0bf", fontSize:"1.16em", marginBottom: 18}}>
        {onboardingSteps[step].title}
      </div>
      <div style={{fontSize:"1.07em", marginBottom: 28}}>
        {onboardingSteps[step].content}
      </div>
      <div style={{display: "flex", justifyContent: "center", gap: 14}}>
        {step > 0 && (
          <button onClick={()=>setStep(s=>s-1)} style={{
            background:"#444", color:"#fff", border:"none", borderRadius:8, padding:"10px 26px"
          }}>السابق</button>
        )}
        {!isLast ? (
          <button onClick={()=>setStep(s=>s+1)} style={{
            background:"#0bf", color:"#fff", border:"none", borderRadius:8, padding:"10px 26px"
          }}>التالي</button>
        ) : (
          <button onClick={onClose} style={{
            background:"#119e57", color:"#fff", border:"none", borderRadius:8, padding:"10px 26px"
          }}>إنهاء الجولة</button>
        )}
      </div>
    </div>
  );
}