import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectRestoreVersionPanel from "../../../components/ProjectRestoreVersionPanel";

const versionsList = [
  { id: 1, version: "v1.0.0", title: "الإصدار الأول", date: "2025-06-25 09:20" },
  { id: 2, version: "v1.1.0", title: "دعم الذكاء الاصطناعي", date: "2025-06-25 10:05" },
  { id: 3, version: "v1.2.0", title: "تحسينات واجهة المستخدم", date: "2025-06-25 10:20" }
];

const ProjectRestoreVersionPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [restoredVersion, setRestoredVersion] = useState<string | null>(null);

  const handleRestore = () => {
    setShowConfirm(false);
    if (selectedId != null) {
      const v = versionsList.find(v => v.id === selectedId);
      setRestoredVersion(v ? v.version : null);
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181818", color: "#fff" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{ color: "#0bf", marginBottom: "32px" }}>استعادة نسخة سابقة</h1>
        <ProjectRestoreVersionPanel
          versions={versionsList}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onConfirmRestore={() => setShowConfirm(true)}
          restoredVersion={restoredVersion}
        />
        {showConfirm && (
          <div style={{
            position: "fixed", left: 0, top: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000
          }}>
            <div style={{
              background: "#23272f", borderRadius: 14, padding: "38px 38px", color: "#fff", minWidth: 320, maxWidth: 430
            }}>
              <div style={{ fontWeight: "bold", color: "#c32b2b", fontSize: "1.16em", marginBottom: 18 }}>
                هل أنت متأكد أنك تريد استعادة هذه النسخة؟
              </div>
              <div style={{ color: "#eee", marginBottom: 22 }}>
                سيتم استبدال كل الملفات الحالية بنسخة الإصدار السابق. لا يمكن التراجع بعد هذه العملية.
              </div>
              <div style={{ display: "flex", gap: 18, justifyContent: "flex-end" }}>
                <button onClick={handleRestore}
                  style={{ background: "#119e57", color: "#fff", border: "none", borderRadius: 8, padding: "10px 26px", fontWeight: "bold", cursor: "pointer" }}>
                  نعم، استعادة
                </button>
                <button onClick={() => setShowConfirm(false)}
                  style={{ background: "#c32b2b", color: "#fff", border: "none", borderRadius: 8, padding: "10px 26px", fontWeight: "bold", cursor: "pointer" }}>
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectRestoreVersionPage;