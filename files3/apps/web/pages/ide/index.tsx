import React from "react";
import Sidebar from "../../components/Sidebar";

const IDE = () => (
  <div style={{
    display: "flex",
    minHeight: "100vh",
    background: "#181818",
    color: "#fff"
  }}>
    <Sidebar />
    <main style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div>
        <h1>مرحبًا بك في منصة IDE الذكية</h1>
        <p>ابدأ مشروعك الجديد أو استورد مشروعًا قائماً أو استخدم الذكاء الاصطناعي للإنشاء السريع!</p>
      </div>
    </main>
  </div>
);

export default IDE;