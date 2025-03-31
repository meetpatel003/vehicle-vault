// import React from "react";
// // import BasicPage from "./BasicPage";

// const UserDashboard = () => {
//   return (
//     < div title="Buyer Dashboard">
//       <p>Welcome to your dashboard! Here you can view your saved cars, inquiries, and more.</p>
//     </div>
//   );
// };

// export default UserDashboard;


// import React from "react";
// import UserSidebar from "./userSidebar";

// const UserDashboard = () => {
  
//   const styles = {
//     container: { display: "flex"}, // ✅ Sidebar + Content Side by Side
//     content: { flex: 1, padding: "20px", marginLeft: "260px"}, // ✅ Sidebar Adjust
//   };

//   return (
//     <div style={styles.container}>
//       <UserSidebar /> {/* ✅ Sidebar Add Kiya */}
//       <div style={styles.content}>
//         <h1>Buyer Dashboard</h1>
//         <p>Welcome to your dashboard! Here you can view your saved cars, inquiries, and more.</p>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;


// import React, { useState, useEffect } from "react";
// import UserSidebar from "./userSidebar";

// const UserDashboard = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const styles = {
//     container: { display: "flex" },
//     content: {
//       flex: 1,
//       padding: "20px",
//       marginLeft: isMobile ? (isOpen ? "260px" : "0px") : (isOpen ? "260px" : "40px"),
//       transition: "margin-left 0.3s ease-in-out",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <UserSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
//       <div style={styles.content}>
//         <h1>Buyer Dashboard</h1>
//         <p>Welcome to your dashboard! Here you can view your saved cars, inquiries, and more.</p>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;


import React, { useState, useEffect } from "react";
import UserSidebar from "./userSidebar";

const UserDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const styles = {
    container: {
      // display: "flex",
      padding: "20px",
    },
    content :{
      flex: 1,
        padding: "20px",
        marginLeft: isMobile ? (isOpen ? "260px" : "0px") : (isOpen ? "260px" : "40px"),
        transition: "margin-left 0.3s ease-in-out",
  
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#333",
      padding: "10px 20px",
      borderRadius: "5px",
    },
    searchBar: {
      flex: 1,
      padding: "8px",
      marginRight: "10px",
      borderRadius: "5px",
      border: "none",
    },
    filterButton: {
      padding: "8px 12px",
      marginRight: "10px",
      border: "none",
      background: "#ff9800",
      color: "white",
      cursor: "pointer",
      borderRadius: "5px",
    },
    wishlistButton: {
      padding: "8px 12px",
      border: "none",
      background: "#f44336",
      color: "white",
      cursor: "pointer",
      borderRadius: "5px",
    },
    carSections: {
      marginTop: "20px",
    },
    carCategory: {
      marginBottom: "20px",
    },
    carGrid: {
      display: "flex",
      gap: "15px",
    },
    carCard: {
      width: "150px",
      height: "100px",
      background: "#ddd",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
    }
  }
  return (
    <div style={styles.container}>
             <UserSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
             <div style={styles.content}>
      {/* Navbar with Search, Filter & Wishlist */}
      <div style={styles.navbar}>
        <input type="text" placeholder="Search cars..." style={styles.searchBar} />
        <button style={styles.filterButton}>Filter</button>
        <button style={styles.wishlistButton}>❤️ Wishlist</button>
      </div>

      {/* Car Listings */}
      <div style={styles.carSections}>
        {/* Old Cars Section */}
        <div style={styles.carCategory}>
          <h2>Old Cars</h2>
          <div style={styles.carGrid}>
            {/* Sample Cars */}
            <div style={styles.carCard}>Car 1</div>
            <div style={styles.carCard}>Car 2</div>
            <div style={styles.carCard}>Car 3</div>
          </div>
        </div>

        {/* New Cars Section */}
        <div style={styles.carCategory}>
          <h2>New Cars</h2>
          <div style={styles.carGrid}>
            {/* Sample Cars */}
            <div style={styles.carCard}>New Car 1</div>
            <div style={styles.carCard}>New Car 2</div>
            <div style={styles.carCard}>New Car 3</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


export default UserDashboard;


