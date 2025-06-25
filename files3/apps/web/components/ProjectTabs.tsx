import React from "react";

type Tab = "code" | "design" | "preview" | "settings";

const tabNames: Record<Tab, string> = {
  code: "الكود",
  design: "التصميم",
  preview: "المعاينة",
  settings: "إعدادات المشروع"
};

type Props = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
};

const ProjectTabs: React.FC<Props> = ({ activeTab, onTabChange }) => (
  <nav style={{
    display: "flex",
    gap: "2px",
    background: "#222",
    borderRadius: "12px 12px 0 0"
  }}>
    {(["code", "design", "preview", "settings"] as Tab[]).map(tab => (
      <button
        key={tab}
        type="button"
        onClick={() => onTabChange(tab)}
        style={{
          flex: 1,
          padding: "16px",
          background: activeTab === tab ? "linear-gradient(90deg,#0bf,#4f8cff)" : "transparent",
          color: activeTab === tab ? "#fff" : "#aaa",
          border: "none",
          borderRadius: tab === "code"
            ? "12px 0 0 0"
            : tab === "settings"
              ? "0 12px 0 0"
              : "0",
          fontWeight: "bold",
          fontSize: "1.08em",
          cursor: "pointer",
          transition: "background 0.2s"
        }}
      >
        {tabNames[tab]}
      </button>
    ))}
  </nav>
);

export default ProjectTabs;