// import React, { useState } from "react";

// const UserSidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const styles = {
//     sidebar: {
//       position: "fixed",
//       left: isOpen ? "0" : "-220px",
//       width: "220px",
//       height: "100vh",
//       background: "#1d4b3f",
//       color: "white",
//       padding: "20px",
//       transition: "left 0.3s",
//     },
//     toggleButton: {
//       position: "absolute",
//       left: isOpen ? "220px" : "10px",
//       top: "20px",
//       background: "#c7fa54",
//       color: "black",
//       padding: "5px 10px",
//       border: "none",
//       cursor: "pointer",
//       borderRadius: "5px",
//     },
//     navItem: {
//       padding: "10px 0",
//       cursor: "pointer",
//       fontSize: "16px",
//       textDecoration: "none",
//       color: "#c7fa54",
//       display: "block",
//     }
//   };

//   return (
//     <>
//       <button style={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>☰</button>
//       <div style={styles.sidebar}>
//         <a href="/dashboard" style={styles.navItem}>🏠 Dashboard</a>
//         <a href="/wishlist" style={styles.navItem}>❤️ My Wishlist</a>
//         <a href="/inquiries" style={styles.navItem}>📩 My Inquiries</a>
//         <a href="/compare" style={styles.navItem}>⚖️ Compare Cars</a>
//         <a href="/loan" style={styles.navItem}>💰 Car Loan Assistance</a>
//         <a href="/logout" style={styles.navItem}>🚪 Logout</a>
//       </div>
//     </>
//   );
// };

// export default UserSidebar;


// import React, { useState } from "react";

// const UserSidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   const styles = {
//     container: { display: "flex", alignItems: "center" },
//     sidebar: {
//       position: "fixed",
//       top: "58px",
//       left: isOpen ? "0" : "-220px",
//       width: "220px",
//       height: "100vh",
//       background: "#333",
//       color: "#fff",
//       padding: "20px",
//       transition: "left 0.3s",
//     },
//     toggleButton: {
//       position: "fixed",
//       // left: "6px",
//       left: isOpen ? "220px" : "6px",
//       top: "62px",
//       background: "#fff",
//       color: "black",
//       padding: "5px 10px",
//       border: "none",
//       cursor: "pointer",
//       borderRadius: "5px",
//       zIndex: 1001,
//       display: isMobile ? "block" : "none",
//       //display: window.innerWidth <= 768 ? "block" : "none", // Show only on mobile
//     },
//     navItem: {
//       padding: "10px 0",
//       cursor: "pointer",
//       fontSize: "16px",
//       textDecoration: "none",
//       color: "#fff",
//       display: "block",
//     }
//   }

//   return (
//     <div style={styles.container}>
//       <button style={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✖" : "☰"}</button>
//       <div style={styles.sidebar}>
//         <a href="/userdashboard" style={styles.navItem}> Dashboard</a>
//         <a href="/userwishlist" style={styles.navItem}> My Wishlist</a>
//         <a href="/userinquiries" style={styles.navItem}> My Inquiries</a>
//         <a href="/compare" style={styles.navItem}>Compare Cars</a>
//         <a href="/loan" style={styles.navItem}>Car Loan Assistance</a>
//         <a href="/logout" style={styles.navItem}> Logout</a>
//       </div>
//     </div>
//   );
// };

// export default UserSidebar;


import React, { useState, useEffect } from "react";

const UserSidebar = ({ toggleSidebar, isOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768 || window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth = 768 || window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    sidebar: {
      position: "fixed",
      top: "58px",
      left: isOpen ? "0" : "-220px",
      width: "220px",
      height: "100vh",
      background: "#333",
      color: "#fff",
      padding: "20px",
      transition: "left 0.3s ease-in-out",
    },
    toggleButton: {
      position: "fixed",
      left: isOpen ? "220px" : "4px",
      display: isMobile ? "block" : "none",
      top: "62px",
      background: "#fff",
      color: "black",
      padding: "5px 10px",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
      zIndex: 1001,
    },
    navItem: {
      padding: "10px 0",
      cursor: "pointer",
      fontSize: "16px",
      textDecoration: "none",
      color: "#fff",
      display: "block",
    },
  };

  return (
    <>
      <button style={styles.toggleButton} onClick={toggleSidebar}>
        {isOpen ? "✖" : "☰"}
      </button>
      <div style={styles.sidebar}>
        <a href="/userdashboard" style={styles.navItem}> Dashboard</a>
        <a href="/userwishlist" style={styles.navItem}> My Wishlist</a>
        <a href="/userinquiries" style={styles.navItem}> My Inquiries</a>
        <a href="/compare" style={styles.navItem}>Compare Cars</a>
        <a href="/loan" style={styles.navItem}>Car Loan Assistance</a>
        <a href="/logout" style={styles.navItem}> Logout</a>
      </div>
    </>
  );
};

export default UserSidebar;
