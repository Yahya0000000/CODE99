import React from "react";

const Login = () => (
  <div style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#191c20"
  }}>
    <form style={{
      background: "#23272f",
      borderRadius: "12px",
      padding: "32px 24px",
      boxShadow: "0 2px 18px #0005",
      minWidth: "320px"
    }}>
      <h2 style={{
        textAlign: "center",
        color: "#0bf",
        marginBottom: "28px"
      }}>تسجيل الدخول إلى المنصة</h2>
      <label style={{color: "#fff", fontSize: "1.1em"}}>البريد الإلكتروني</label>
      <input type="email" placeholder="you@email.com" required
        style={{
          width: "100%",
          padding: "10px",
          margin: "8px 0 18px 0",
          borderRadius: "6px",
          border: "1px solid #444",
          background: "#292d36",
          color: "#fff"
        }} />
      <label style={{color: "#fff", fontSize: "1.1em"}}>كلمة المرور</label>
      <input type="password" placeholder="•••••••" required
        style={{
          width: "100%",
          padding: "10px",
          margin: "8px 0 24px 0",
          borderRadius: "6px",
          border: "1px solid #444",
          background: "#292d36",
          color: "#fff"
        }} />
      <button type="submit" style={{
        width: "100%",
        background: "linear-gradient(90deg,#0bf,#4f8cff)",
        color: "#fff",
        padding: "12px",
        border: "none",
        borderRadius: "6px",
        fontWeight: "bold",
        fontSize: "1.1em",
        cursor: "pointer"
      }}>تسجيل الدخول</button>
      <div style={{
        textAlign: "center",
        margin: "18px 0 6px 0",
        color: "#aaa"
      }}>أو</div>
      <button type="button" style={{
        width: "100%",
        background: "#fff",
        color: "#222",
        padding: "11px",
        border: "1px solid #0bf",
        borderRadius: "6px",
        fontWeight: "bold",
        fontSize: "1.02em",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px"
      }}>
        <svg viewBox="0 0 32 32" width="22" height="22" style={{verticalAlign: "middle"}}>
          <g>
            <path fill="#4285F4" d="M31.1,16.2c0-1.1-0.1-2.1-0.3-3.1H16v5.9h8.5c-0.4,2.1-1.7,3.9-3.6,5.1v4.2h5.8
              C29.4,25.1,31.1,21,31.1,16.2z"/>
            <path fill="#34A853" d="M16,32c4.3,0,7.9-1.4,10.5-3.8l-5.8-4.2c-1.6,1.1-3.6,1.7-5.7,1.7c-4.4,0-8.2-3-9.6-7.1H3.4v4.3
              C6,29.2,10.6,32,16,32z"/>
            <path fill="#FBBC05" d="M6.4,18.6C5.9,17.5,5.7,16.3,5.7,15c0-1.3,0.2-2.5,0.7-3.6V7.1H3.4C2.5,8.8,2,10.8,2,13
              c0,2.2,0.5,4.2,1.4,5.9L6.4,18.6z"/>
            <path fill="#EA4335" d="M16,6.3c2.3,0,4.3,0.8,5.9,2.5l4.4-4.4C23.9,1.4,20.3,0,16,0C10.6,0,6,2.8,3.4,7.1l5,3.9
              C7.8,8.8,11.6,6.3,16,6.3z"/>
          </g>
        </svg>
        الدخول عبر جوجل
      </button>
    </form>
  </div>
);

export default Login;