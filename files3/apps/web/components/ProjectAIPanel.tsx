import React from "react";

type Props = {
  aiStatus: "idle" | "testing" | "done";
  aiResult: string;
  onTest: () => void;
  onAutofix: () => void;
};

const ProjectAIPanel: React.FC<Props> = ({
  aiStatus,
  aiResult,
  onTest,
  onAutofix
}) => (
  <div style={{
    minHeight: 340,
    background: "#20242b",
    borderRadius: 10,
    padding: "30px 22px",
    color: "#fff"
  }}>
    <div style={{fontWeight: "bold", color: "#0bf", fontSize: "1.13em", marginBottom: 18}}>
      اختبار وتحسين المشروع (AI QA & Autolinking)
    </div>
    <div style={{marginBottom: 18, color: "#aaa"}}>
      يقوم الذكاء الاصطناعي بمراجعة الكود والتصميم والربط بين الأجزاء، ويقترح تحسينات أو ينفذها تلقائيًا.
    </div>
    {aiStatus === "idle" && (
      <button
        onClick={onTest}
        style={{
          background: "#037cf9",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "13px 38px",
          fontWeight: "bold",
          fontSize: "1.07em",
          cursor: "pointer"
        }}
      >
        تشغيل اختبار الذكاء الاصطناعي
      </button>
    )}
    {aiStatus === "testing" && (
      <div style={{marginTop: 28, color: "#0bf", fontWeight: "bold"}}>
        ...جاري تشغيل الاختبار الذكي
      </div>
    )}
    {aiStatus === "done" && (
      <div>
        <div style={{
          background: "#292f3b",
          borderRadius: 8,
          padding: "18px 15px",
          marginBottom: 22,
          fontSize: "1.06em"
        }}>
          {aiResult}
        </div>
        <button
          onClick={onAutofix}
          style={{
            background: "#119e57",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "12px 32px",
            fontWeight: "bold",
            fontSize: "1.07em",
            cursor: "pointer"
          }}
        >
          إعادة تحسين تلقائي
        </button>
      </div>
    )}
  </div>
);

export default ProjectAIPanel;