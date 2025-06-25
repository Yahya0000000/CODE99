import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ProjectDetailsPanel from "../../../components/ProjectDetailsPanel";
import { useRouter } from "next/router";

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // بيانات المشروع وهمية (في المستقبل تُجلب من قاعدة البيانات)
  const [project, setProject] = useState({
    id,
    name: "مشروعي الأول",
    description: "مشروع تجريبي لتجربة منصة الذكاء الاصطناعي.",
    createdAt: "2025-06-01",
    updatedAt: "2025-06-25",
    edits: 8
  });

  const [showDelete, setShowDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editName, setEditName] = useState(project.name);
  const [editDescription, setEditDescription] = useState(project.description);
  const [editSuccess, setEditSuccess] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/projects?deleted=1");
    }, 1000);
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setProject({
        ...project,
        name: editName,
        description: editDescription,
        updatedAt: "2025-06-25",
        edits: project.edits + 1
      });
      setLoading(false);
      setShowEdit(false);
      setEditSuccess(true);
      setTimeout(() => setEditSuccess(false), 1800);
    }, 900);
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
        <h1 style={{color: "#0bf", marginBottom: "32px"}}>تفاصيل المشروع</h1>
        <ProjectDetailsPanel project={project} />
        <div style={{marginTop: 36, display: "flex", gap: 10}}>
          <button
            style={{
              background: "#037cf9",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px 28px",
              fontWeight: "bold",
              fontSize: "1.06em",
              cursor: "pointer"
            }}
            onClick={() => {
              setEditName(project.name);
              setEditDescription(project.description);
              setShowEdit(true);
            }}
          >
            تعديل المشروع
          </button>
          <button
            style={{
              background: "#c32b2b",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px 28px",
              fontWeight: "bold",
              fontSize: "1.06em",
              cursor: "pointer"
            }}
            onClick={() => setShowDelete(true)}
          >
            حذف المشروع
          </button>
        </div>

        {showEdit && (
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100
          }}>
            <form onSubmit={handleEdit} style={{
              background: "#23272f", borderRadius: 12, padding: 36, minWidth: 320, maxWidth: 420
            }}>
              <div style={{marginBottom: 18, fontWeight: "bold", color: "#037cf9"}}>تعديل بيانات المشروع</div>
              <div style={{marginBottom: "18px"}}>
                <label style={{color: "#0bf", fontWeight: "bold"}}>اسم المشروع:</label>
                <input
                  type="text"
                  value={editName}
                  onChange={e => setEditName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "6px",
                    borderRadius: "6px",
                    border: "1px solid #444",
                    background: "#191b20",
                    color: "#fff"
                  }}
                  required
                />
              </div>
              <div style={{marginBottom: "18px"}}>
                <label style={{color: "#0bf", fontWeight: "bold"}}>الوصف:</label>
                <textarea
                  value={editDescription}
                  onChange={e => setEditDescription(e.target.value)}
                  style={{
                    width: "100%",
                    minHeight: "70px",
                    padding: "10px",
                    marginTop: "6px",
                    borderRadius: "6px",
                    border: "1px solid #444",
                    background: "#191b20",
                    color: "#fff",
                    fontFamily: "inherit"
                  }}
                  required
                />
              </div>
              <div style={{marginTop: 18, display: "flex", gap: 8, justifyContent: "flex-end"}}>
                <button onClick={()=>setShowEdit(false)} type="button" style={{padding: "8px 18px", border: "none", borderRadius: 8, background: "#444", color: "#fff"}} disabled={loading}>إلغاء</button>
                <button type="submit" style={{padding: "8px 18px", border: "none", borderRadius: 8, background: "#037cf9", color: "#fff", opacity: loading?0.7:1}} disabled={loading}>{loading ? "جارٍ الحفظ..." : "حفظ التعديلات"}</button>
              </div>
            </form>
          </div>
        )}

        {showDelete && (
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100
          }}>
            <div style={{
              background: "#23272f", borderRadius: 12, padding: 36, minWidth: 280, maxWidth: 400, textAlign: "center"
            }}>
              <div style={{marginBottom: 14, fontWeight: "bold", color: "#c32b2b", fontSize: "1.1em"}}>
                تأكيد حذف المشروع
              </div>
              <div style={{color: "#eee", marginBottom: 18}}>
                هل أنت متأكد أنك تريد حذف هذا المشروع؟ هذا الإجراء لا يمكن التراجع عنه.
              </div>
              <div style={{marginTop: 18, display: "flex", gap: 10, justifyContent: "center"}}>
                <button onClick={()=>setShowDelete(false)} style={{padding: "8px 18px", border: "none", borderRadius: 8, background: "#444", color: "#fff"}} disabled={loading}>إلغاء</button>
                <button onClick={handleDelete} style={{padding: "8px 18px", border: "none", borderRadius: 8, background: "#c32b2b", color: "#fff", opacity: loading?0.7:1}} disabled={loading}>{loading ? "جار الحذف..." : "تأكيد الحذف"}</button>
              </div>
            </div>
          </div>
        )}

        {editSuccess && (
          <div style={{
            position: "fixed", top: 32, right: 32, background: "#119e57", color: "#fff",
            padding: "16px 32px", borderRadius: 10, fontWeight: "bold", zIndex: 200, fontSize: "1.1em"
          }}>
            تم حفظ التعديلات بنجاح!
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectDetails;