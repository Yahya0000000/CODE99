import React from "react";

type Notification = {
  id: string;
  message: string;
  type: "success" | "error" | "info";
  date: string;
};

type Props = {
  notifications: Notification[];
  onClose: (id: string) => void;
};

const typeColors = {
  success: "#119e57",
  error: "#c32b2b",
  info: "#037cf9"
};

const NotificationsPanel: React.FC<Props> = ({ notifications, onClose }) => (
  <div style={{
    position: "fixed",
    top: 28,
    right: 28,
    zIndex: 400,
    minWidth: 320
  }}>
    {notifications.map(n => (
      <div key={n.id} style={{
        background: typeColors[n.type],
        color: "#fff",
        borderRadius: 9,
        marginBottom: 16,
        boxShadow: "0 4px 24px #0007",
        padding: "15px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div>
          <div style={{fontWeight:"bold", fontSize:"1.06em"}}>{n.message}</div>
          <div style={{fontSize:"0.91em", color:"#e8e8e8"}}>{n.date}</div>
        </div>
        <button onClick={()=>onClose(n.id)} style={{
          background: "#fff2",
          border: "none",
          color: "#fff",
          borderRadius: 6,
          fontWeight: "bold",
          marginLeft: 16,
          cursor: "pointer",
          fontSize: "1.1em"
        }}>×</button>
      </div>
    ))}
  </div>
);

export default NotificationsPanel;