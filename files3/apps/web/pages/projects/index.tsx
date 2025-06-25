import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import ProjectList from "../../components/ProjectList";
import MainPromptBox from "../../components/MainPromptBox";
import NotificationsPanel from "../../components/NotificationsPanel";
import { useRouter } from "next/router";

// ... البيانات الأولية كما هي

const ProjectsPage = () => {
  const router = useRouter();
  // ... باقي الحالات
  const [notifications, setNotifications] = useState<any[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  // دالة إضافة إشعار
  const addNotification = (message: string, type: "success"|"error"|"info" = "info") => {
    setNotifications(notifications => [
      ...notifications,
      {
        id: Math.random().toString(36).slice(2),
        message,
        type,
        date: new Date().toLocaleString("ar-EG")
      }
    ]);
  };

  // دمج مع البرومبت: إشعار عند إنشاء مشروع
  const handlePrompt = (prompt: string) => {
    setPromptLoading(true);
    setTimeout(() => {
      const id = Math.random().toString(36).substring(2, 9);
      setProjects([
        {
          id,
          name: prompt.slice(0, 25) + (prompt.length > 25 ? "..." : ""),
          description: `مشروع تم إنشاؤه تلقائياً من البرومبت: "${prompt}"`,
          updatedAt: new Date().toISOString().split("T")[0]
        },
        ...projects
      ]);
      setPromptLoading(false);
      addNotification("تم إنشاء مشروع جديد بنجاح!", "success");
    }, 1200);
  };

  // عند حذف مشروع
  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
    router.push("/projects?deleted=1");
    addNotification("تم حذف المشروع.", "info");
  };

  // ... بقية الدوال

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#181818",
      color: "#fff"
    }}>
      <Sidebar
        onShowNotifications={()=>setShowNotifications(v=>!v)}
        newNotificationsCount={notifications.length}
      />
      <main style={{
        flex: 1,
        padding: "40px 32px"
      }}>
        {/* ... باقي الصفحة */}
        {showNotifications &&
          <NotificationsPanel
            notifications={notifications}
            onClose={id => setNotifications(notifications => notifications.filter(n => n.id !== id))}
          />
        }
      </main>
    </div>
  );
};

export default ProjectsPage;