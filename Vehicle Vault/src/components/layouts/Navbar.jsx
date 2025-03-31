import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (
) => {
  const navigate = useNavigate();

  const styles = {
    navbar: {
      display: "flex",
      width : "100%",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 20px",
      backgroundColor: "#333",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: "22px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navItem: {
      cursor: "pointer",
      textDecoration: "none",
      color: "#fff",
      fontSize: "16px",
      padding: "8px 12px",
      borderRadius: "5px",
      transition: "background 0.3s",
    },
    navItemHover: {
      backgroundColor: "#555",
    },
    buttonContainer: {
      display: "flex",
      gap: "10px",
      marginRight: "29px" ,
    },
    button: {
      backgroundColor: "#ff6600",
      color: "#fff",
      border: "none",
      padding: "8px 16px",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      backgroundColor: "#e65c00",
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* 🔹 Left Side: Logo + Navigation Links */}
      <div style={styles.logo} onClick={() => navigate("/")}>
        {/*🚗*/}Vehicle Vault
      </div>
      <ul style={styles.navLinks}>
        <li
          style={styles.navItem}
          onMouseEnter={(e) => (e.target.style.background = "#555")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          style={styles.navItem}
          onMouseEnter={(e) => (e.target.style.background = "#555")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li
          style={styles.navItem}
          onMouseEnter={(e) => (e.target.style.background = "#555")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>
      </ul>

      {/* 🔹 Right Side: Login & Signup Buttons */}
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.background = "#e65c00")}
          onMouseLeave={(e) => (e.target.style.background = "#ff6600")}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.background = "#e65c00")}
          onMouseLeave={(e) => (e.target.style.background = "#ff6600")}
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
