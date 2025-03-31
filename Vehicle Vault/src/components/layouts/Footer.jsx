// import React, { useState } from "react";

// const Footer = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const styles = {
//     footer: {
//       backgroundColor: "#333",
//       color: "white",
//       textAlign: "center",
//       padding: "20px",
//       width: "100%",
//       marginTop: "20px",
//     },
//     links: {
//       display: "flex",
//       justifyContent: "center",
//       gap: "15px",
//       marginTop: "10px",
//     },
//     link: {
//       color: "#ff6600",
//       textDecoration: "none",
//       fontWeight: "bold",
//       fontSize: "14px",
//     },
//     linkHover: {
//       textDecoration: "underline",
//     },
//   };

//   return (
//     <footer style={styles.footer}>
//       <p>© {new Date().getFullYear()} Vehicle Vault. All Rights Reserved.</p>
//       <div style={styles.links}>
//         <a href="/privacy-policy" style={styles.link} onMouseEnter={(e) => e.target.style.textDecoration = styles.linkHover.textDecoration} onMouseLeave={(e) => e.target.style.textDecoration = styles.link.textDecoration}>Privacy Policy</a>
//         <a href="/terms" style={styles.link} onMouseEnter={(e) => e.target.style.textDecoration = styles.linkHover.textDecoration} onMouseLeave={(e) => e.target.style.textDecoration = styles.link.textDecoration}>Terms of Service</a>
//         <a href="/contact" style={styles.link} onMouseEnter={(e) => e.target.style.textDecoration = styles.linkHover.textDecoration} onMouseLeave={(e) => e.target.style.textDecoration = styles.link.textDecoration}>Contact Us</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  
  // Sidebar should shift for multiple dashboard routes
  const dashboardRoutes = ["/userdashboard", "/admindashboard", "/agentdashboard"];
  const isLoggedIn = dashboardRoutes.includes(location.pathname);

  const footerStyle = {
    backgroundColor: "#333", // Equivalent to bg-gray-800
    color: "white",
    padding: "16px 32px",
    width: isLoggedIn ? "80%" : "100%",
    position: "fixed",
    zIndex: 50,
    transition: "margin-left 0.3s ease-in-out",
    marginLeft: isLoggedIn ? "260px" : "0",
    bottom : 0,
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#9ca3af", // Equivalent to text-gray-400
    textDecoration: "none",
    margin: "0 10px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Left Section */}
        <div style={{ marginBottom: "10px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600" }}>Vehicle Vault</h2>
          <p style={{ fontSize: "14px" }}>Your trusted car buying and selling platform</p>
        </div>

        {/* Right Section */}
        <div>
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>Terms of Service</a>
          <a href="#" style={linkStyle}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
