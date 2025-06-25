import React, { useState } from "react";
// ... باقي الاستيرادات
import Sidebar from "../../components/Sidebar";
import ProjectTabs from "../../components/ProjectTabs";
import CodeEditor from "../../components/CodeEditor";
import DesignEditor from "../../components/DesignEditor";
import PreviewPanel from "../../components/PreviewPanel";
import ProjectSettingsPanel from "../../components/ProjectSettingsPanel";
import ProjectAIPanel from "../../components/ProjectAIPanel";
import ProjectVersionHistoryPanel from "../../components/ProjectVersionHistoryPanel";

const ProjectWorkspace = () => {
  const [activeTab, setActiveTab] = useState<"code"|"design"|"preview"|"settings"|"aiqa"|"history">("code");
  const [showLocalRun, setShowLocalRun] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // ... باقي الحالات والمنطق

  const handleLocalRun = () => {
    setShowLocalRun(true);
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 2000); // محاكاة انتظار التشغيل
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#181818",
      color: "#fff"
    }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "0 0 0 0" }}>
        {/* أزرار القسم العلوي ... */}
        <ProjectTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          extraTabs={[
            { key: "aiqa", label: "اختبار وتحسين (AI QA)" },
            { key: "history", label: "تاريخ التعديلات" }
          ]}
        />
        <section style={{
          background: "#23272f",
          borderRadius: "0 0 12px 12px",
          minHeight: "60vh",
          padding: "32px",
          position: "relative"
        }}>
          {activeTab === "code" && <CodeEditor />}
          {activeTab === "design" && <DesignEditor />}
          {activeTab === "preview" && (
            <div>
              <button
                onClick={handleLocalRun}
                style={{
                  background: "#119e57",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 30px",
                  fontWeight: "bold",
                  fontSize: "1.07em",
                  marginBottom: 20,
                  cursor: "pointer"
                }}
              >
                تشغيل المشروع محليًا
              </button>
              <PreviewPanel />
            </div>
          )}
          {activeTab === "settings" && <ProjectSettingsPanel />}
          {activeTab === "aiqa" && <ProjectAIPanel />}
          {activeTab === "history" && <ProjectVersionHistoryPanel />}
          {showLocalRun && (
            <div style={{
              position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300
            }}>
              <div style={{
                background: "#23272f", borderRadius: 14, padding: 40, minWidth: 320, maxWidth: 420, textAlign: "center"
              }}>
                <div style={{fontWeight:"bold", color:"#0bf", marginBottom:14, fontSize:"1.11em"}}>تشغيل المشروع محليًا</div>
                <div style={{color:"#eee", fontSize:"1.05em", marginBottom:18}}>
                  {isRunning ? "جاري تشغيل المشروع على جهازك المحلي..." : "تم تشغيل المشروع محليًا بنجاح (محاكاة)"}
                </div>
                <button
                  onClick={()=>setShowLocalRun(false)}
                  style={{
                    background:"#119e57", color:"#fff", border:"none", borderRadius:8, padding:"9px 32px", fontWeight:"bold", fontSize:"1.07em"
                  }}
                >
                  إغلاق
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProjectWorkspace;