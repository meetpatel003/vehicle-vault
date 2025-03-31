import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const styles = {
    sidebarContainer: {
      position: "fixed",
      top: 0,
      left: isOpen ? "0" : "-250px", // Toggle effect
      width: "250px",
      height: "100vh",
      backgroundColor: "#333",
      color: "#fff",
      transition: "left 0.3s ease-in-out",
      padding: "20px",
      boxShadow: isOpen ? "2px 0 5px rgba(0,0,0,0.5)" : "none",
    },
    toggleButton: {
      position: "fixed",
      top: "20px",
      left: isOpen ? "260px" : "20px",
      backgroundColor: "#ff6600",
      color: "#fff",
      border: "none",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "left 0.3s ease-in-out",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "red",
      color: "#fff",
      border: "none",
      padding: "5px 10px",
      fontSize: "14px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    navLinks: {
      listStyle: "none",
      padding: 0,
      marginTop: "20px",
    },
    navItem: {
      padding: "10px",
      cursor: "pointer",
      fontSize: "18px",
      borderBottom: "1px solid #444",
      transition: "background 0.3s",
    },
    navItemHover: {
      backgroundColor: "#555",
    },
  };

  return (
    <>
      {/* 🔹 Toggle Button */}
      <button
        style={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "☰ Menu"}
      </button>

      {/* 🔹 Sidebar */}
      <div style={styles.sidebarContainer}>
        <button style={styles.closeButton} onClick={() => setIsOpen(false)}>X</button>
        <ul style={styles.navLinks}>
          <li
            style={styles.navItem}
            onMouseEnter={(e) => (e.target.style.background = "#555")}
            onMouseLeave={(e) => (e.target.style.background = "transparent")}
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={(e) => (e.target.style.background = "#555")}
            onMouseLeave={(e) => (e.target.style.background = "transparent")}
            onClick={() => navigate("/cars")}
          >
            Cars
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={(e) => (e.target.style.background = "#555")}
            onMouseLeave={(e) => (e.target.style.background = "transparent")}
            onClick={() => navigate("/users")}
          >
            Users
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={(e) => (e.target.style.background = "#555")}
            onMouseLeave={(e) => (e.target.style.background = "transparent")}
            onClick={() => navigate("/settings")}
          >
            Settings
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
