import React, { useState } from "react";

const themes = [
  { label: "داكن", value: "dark" },
  { label: "فاتح", value: "light" }
];

const languages = [
  { label: "العربية", value: "ar" },
  { label: "English", value: "en" }
];

const SettingsPanel: React.FC = () => {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("ar");

  return (
    <section style={{
      background: "#23272f",
      borderRadius: "10px",
      padding: "28px 18px",
      maxWidth: "420px"
    }}>
      <div style={{marginBottom: "28px"}}>
        <label style={{color: "#0bf"}}>سمة الواجهة:</label>
        <select
          value={theme}
          onChange={e => setTheme(e.target.value)}
          style={{
            width: "100%",
            marginTop: "8px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #444",
            background: "#181818",
            color: "#fff"
          }}
        >
          {themes.map(t => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label style={{color: "#0bf"}}>لغة الواجهة:</label>
        <select
          value={lang}
          onChange={e => setLang(e.target.value)}
          style={{
            width: "100%",
            marginTop: "8px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #444",
            background: "#181818",
            color: "#fff"
          }}
        >
          {languages.map(l => (
            <option key={l.value} value={l.value}>{l.label}</option>
          ))}
        </select>
      </div>
      <div style={{marginTop: "32px", color: "#aaa", fontSize: "0.98em"}}>
        <span>خصائص أخرى ستضاف لاحقًا (حساب، تكاملات، مزامنة، ...)</span>
      </div>
    </section>
  );
};

export default SettingsPanel;