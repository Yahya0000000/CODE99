import React from "react";

type Setting = {
  id: number;
  user: string;
  ai: boolean;
  review: boolean;
  comment: boolean;
  release: boolean;
  restore: boolean;
  errorsOnly: boolean;
};

type Props = {
  settings: Setting[];
  onChange: (id: number, field: keyof Setting, value: boolean) => void;
};

const ProjectNotificationSettingsPanel: React.FC<Props> = ({ settings, onChange }) => (
  <div style={{
    background: "#23272f",
    borderRadius: 12,
    padding: "32px",
    maxWidth: 820
  }}>
    <div style={{ fontWeight: "bold", color: "#0bf", fontSize: "1.10em", marginBottom: 18 }}>
      إعدادات الإشعارات لكل عضو في المشروع
    </div>
    <table style={{ width: "100%", borderCollapse: "collapse", color: "#fff" }}>
      <thead>
        <tr style={{ background: "#191b20" }}>
          <th style={{ padding: "9px 0" }}>العضو</th>
          <th>AI</th>
          <th>مراجعة كود</th>
          <th>تعليقات</th>
          <th>إصدارات</th>
          <th>استعادة</th>
          <th>فقط أخطاء</th>
        </tr>
      </thead>
      <tbody>
        {settings.map(s => (
          <tr key={s.id} style={{ borderBottom: "1px solid #444" }}>
            <td style={{ padding: "10px 0" }}>{s.user}</td>
            <td>
              <input type="checkbox" checked={s.ai} onChange={e => onChange(s.id, "ai", e.target.checked)} />
            </td>
            <td>
              <input type="checkbox" checked={s.review} onChange={e => onChange(s.id, "review", e.target.checked)} />
            </td>
            <td>
              <input type="checkbox" checked={s.comment} onChange={e => onChange(s.id, "comment", e.target.checked)} />
            </td>
            <td>
              <input type="checkbox" checked={s.release} onChange={e => onChange(s.id, "release", e.target.checked)} />
            </td>
            <td>
              <input type="checkbox" checked={s.restore} onChange={e => onChange(s.id, "restore", e.target.checked)} />
            </td>
            <td>
              <input type="checkbox" checked={s.errorsOnly} onChange={e => onChange(s.id, "errorsOnly", e.target.checked)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {settings.length === 0 && (
      <div style={{ color: "#aaa", marginTop: 22 }}>لا يوجد أعضاء في المشروع بعد.</div>
    )}
    <div style={{ color: "#888", marginTop: 18, fontSize: "0.97em" }}>
      <b>تنبيه:</b> عند تفعيل "فقط أخطاء"، لن يستقبل العضو إلا إشعارات الخطأ حتى لو فعّل أنواعًا أخرى من الإشعارات.
    </div>
  </div>
);

export default ProjectNotificationSettingsPanel;