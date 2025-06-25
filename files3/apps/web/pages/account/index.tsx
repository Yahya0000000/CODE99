import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import AccountPanel from "../../components/AccountPanel";

const AccountPage = () => {
  // بيانات المستخدم وهمية (في المستقبل تُجلب من قاعدة البيانات)
  const [user, setUser] = useState({
    name: "يحيى المطور",
    email: "yahya@example.com"
  });
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleUpdate = (data: {name: string, email: string}) => {
    setUser(data);
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#181818",
      color: "#fff"
    }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "40px 32px" }}>
        <h1 style={{color: "#0bf", marginBottom: "32px"}}>الحساب الشخصي</h1>
        <AccountPanel
          user={user}
          onUpdate={handleUpdate}
          onChangePassword={()=>setShowChangePassword(true)}
        />
        {showChangePassword && (
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100
          }}>
            <div style={{
              background: "#23272f", borderRadius: 12, padding: 36, minWidth: 300, maxWidth: 420
            }}>
              <div style={{marginBottom: 14, fontWeight: "bold", color: "#0bf"}}>تغيير كلمة المرور</div>
              <input type="password" placeholder="كلمة المرور الحالية" style={{width: "100%", marginBottom: 10, padding: 10, borderRadius: 7, border: "1px solid #444", background: "#191b20", color: "#fff"}} />
              <input type="password" placeholder="كلمة المرور الجديدة" style={{width: "100%", marginBottom: 10, padding: 10, borderRadius: 7, border: "1px solid #444", background: "#191b20", color: "#fff"}} />
              <input type="password" placeholder="تأكيد كلمة المرور الجديدة" style={{width: "100%", marginBottom: 18, padding: 10, borderRadius: 7, border: "1px solid #444", background: "#191b20", color: "#fff"}} />
              <div style={{display: "flex", justifyContent: "flex-end", gap: 12}}>
                <button onClick={()=>setShowChangePassword(false)} style={{background: "#444", color: "#fff", border: "none", borderRadius: 8, padding: "8px 22px"}}>إلغاء</button>
                <button style={{background: "#0bf", color: "#fff", border: "none", borderRadius: 8, padding: "8px 22px"}}>حفظ</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default AccountPage;