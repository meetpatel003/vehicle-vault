// import { useState } from 'react'
// // import './App.css'
// import { BrowserRouter } from 'react-router-dom'
// import Navbar from './components/layouts/Navbar'
// import Sidebar from './components/layouts/Sidebar'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <BrowserRouter>
//     <Navbar/>
//     <Sidebar/>
//     </BrowserRouter>
//   )
// }

// export default App


// import React, { useState } from "react";
// import Navbar from "./components/layouts/Navbar";
// import Sidebar from "./components/layouts/Sidebar";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Dummy auth state

//   return (
//     <>
//       <Navbar />
//       {isLoggedIn && <Sidebar />}  {/* Sidebar only if logged in */}
//       <div style={{ padding: "20px" }}>
//         {isLoggedIn ? (
//           <h2>Welcome Back, User!</h2>
//         ) : (
//           <h2>Please Login to Continue</h2>
//         )}
//       </div>
//     </>
//   );
// };

// export default App;


import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import { Login } from "./components/common/Login";
import { SignUp } from "./components/common/SignUp";
import ResetPassword from "./components/common/ResetPassword";
import  PrivateRoutes from "./hooks/PrivateRoutes";
import Footer from "./components/layouts/Footer";
import { About, Contact, Home } from "./components/common/LandingPage";
import  UserDashboard from "./components/users/UserDashboard";
import { ToastContainer } from "react-toastify";
// import { Twitter } from "./components/Twitter";
import ForgotPassword from "./components/common/forgotPassword";
// import Dashboard from "./pages/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Dummy auth state

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <ToastContainer position="top-center" ></ToastContainer>
      <Navbar />
      {isLoggedIn && <Sidebar />}  {/* ✅ Sidebar only if logged in */}

      <div style={{ padding: "0" }}>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp/>} />
          {/* <Route pathe="/twitter" element={<Twitter/>}/> */}
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path ="/resetpassword/:token" element={<ResetPassword/>}></Route>
          <Route path="" element={<PrivateRoutes />}>
            <Route path="/userdashboard" element={<UserDashboard/>}/>
          </Route>
        </Routes>
      </div>
      <Footer/> 
    </Router>
  );
};

export default App;

