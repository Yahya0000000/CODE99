import React from "react";

type Settings = {
  name: string;
  description: string;
  type: string;
  autoAI: boolean;
  protected: boolean;
};

type Props = {
  settings: Settings;
  onChange: (field: string, value: any) => void;
  onSave: () => void;
};

const ProjectAdvancedSettingsPanel: React.FC<Props> = ({ settings, onChange, onSave }) => (
  <div style={{
    background: "#23272f",
    borderRadius: 12,
    padding: "32px",
    maxWidth: 560
  }}>
    <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
      الإعدادات المتقدمة
    </div>
    <div style={{ marginBottom: 16 }}>
      <label style={{ color: "#0bf", fontWeight: "bold" }}>اسم المشروع:</label>
      <input
        type="text"
        value={settings.name}
        onChange={e => onChange("name", e.target.value)}
        style={{
          width: "100%", marginTop: 7, marginBottom: 10, padding: "10px",
          borderRadius: "8px", border: "1px solid #444",
          background: "#191b20", color: "#fff"
        }}
      />
    </div>
    <div style={{ marginBottom: 16 }}>
      <label style={{ color: "#0bf", fontWeight: "bold" }}>وصف المشروع:</label>
      <textarea
        value={settings.description}
        onChange={e => onChange("description", e.target.value)}
        style={{
          width: "100%", marginTop: 7, marginBottom: 10, padding: "10px",
          borderRadius: "8px", border: "1px solid #444",
          background: "#191b20", color: "#fff", minHeight: 70
        }}
      />
    </div>
    <div style={{ marginBottom: 16 }}>
      <label style={{ color: "#0bf", fontWeight: "bold" }}>نوع المشروع:</label>
      <select
        value={settings.type}
        onChange={e => onChange("type", e.target.value)}
        style={{
          background: "#191b20", color: "#fff", border: "1px solid #444",
          borderRadius: 8, padding: "10px 18px", marginTop: 7
        }}
      >
        <option value="webapp">تطبيق ويب</option>
        <option value="game">لعبة</option>
        <option value="site">موقع</option>
        <option value="other">أخرى</option>
      </select>
    </div>
    <div style={{ marginBottom: 18 }}>
      <label style={{ color: "#0bf", fontWeight: "bold", marginLeft: 8 }}>
        <input
          type="checkbox"
          checked={settings.autoAI}
          onChange={e => onChange("autoAI", e.target.checked)}
          style={{ marginLeft: 8 }}
        />
        تفعيل التكامل التلقائي مع الذكاء الاصطناعي
      </label>
    </div>
    <div style={{ marginBottom: 22 }}>
      <label style={{ color: "#0bf", fontWeight: "bold", marginLeft: 8 }}>
        <input
          type="checkbox"
          checked={settings.protected}
          onChange={e => onChange("protected", e.target.checked)}
          style={{ marginLeft: 8 }}
        />
        حماية المشروع من التعديلات غير المصرح بها
      </label>
    </div>
    <button
      onClick={onSave}
      style={{
        background: "#119e57", color: "#fff", border: "none",
        borderRadius: 8, padding: "12px 36px", fontWeight: "bold",
        fontSize: "1.08em", cursor: "pointer"
      }}
    >حفظ الإعدادات</button>
  </div>
);

export default ProjectAdvancedSettingsPanel;