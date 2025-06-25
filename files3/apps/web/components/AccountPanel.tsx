import React, { useState } from "react";

type Props = {
  user: {
    name: string;
    email: string;
  };
  onUpdate: (data: { name: string; email: string }) => void;
  onChangePassword: () => void;
};

const AccountPanel: React.FC<Props> = ({ user, onUpdate, onChangePassword }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    onUpdate({ name, email });
    setEditing(false);
  };

  return (
    <div style={{
      background: "#23272f",
      borderRadius: 12,
      padding: "32px",
      maxWidth: 500
    }}>
      <div style={{marginBottom: 18}}>
        <label style={{color: "#0bf", fontWeight: "bold"}}>الاسم:</label>
        <input
          type="text"
          value={name}
          disabled={!editing}
          onChange={e => setName(e.target.value)}
          style={{
            width: "100%",
            marginTop: 6,
            marginBottom: 18,
            padding: "10px",
            borderRadius: "7px",
            border: "1px solid #444",
            background: "#191b20",
            color: "#fff"
          }}
        />
      </div>
      <div style={{marginBottom: 18}}>
        <label style={{color: "#0bf", fontWeight: "bold"}}>البريد الإلكتروني:</label>
        <input
          type="email"
          value={email}
          disabled={!editing}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: "100%",
            marginTop: 6,
            marginBottom: 18,
            padding: "10px",
            borderRadius: "7px",
            border: "1px solid #444",
            background: "#191b20",
            color: "#fff"
          }}
        />
      </div>
      <div style={{display: "flex", gap: 12}}>
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            style={{
              background: "#037cf9",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "10px 22px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            تعديل البيانات
          </button>
        ) : (
          <button
            onClick={handleSave}
            style={{
              background: "#119e57",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "10px 22px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            حفظ التغييرات
          </button>
        )}
        <button
          onClick={onChangePassword}
          style={{
            background: "#4f8cff",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 22px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          تغيير كلمة المرور
        </button>
        <button
          style={{
            background: "#c32b2b",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 22px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
          onClick={()=>window.location.href="/auth/login"}
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
};

export default AccountPanel;