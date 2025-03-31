import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = {
  emailValidator: {
    required: { value: true, message: "Email is required" },
    maxLength: { value: 30, message: "Max input range is 30 characters" },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email format",
    },
  },
  passwordValidator: {
    required: { value: true, message: "Password is required*" },
    maxLength: { value: 15, message: "Max input range is 15 characters" },
  },
};

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = async (data) => {
    try {
      //  globaly declared in main.jsx (axios.defaults.baseURL="http://localhost:3000")
      const res = await axios.post("/user/login", data); // bind API 
      console.log("API Response:", res.data); // Check API response

      if (res.status === 200) {
        console.log("User Data:", res.data.data); //  Check user data

        if (!res.data.data || !res.data.data.roleId || !res.data.data.roleId.name) {
          toast.error("Invalid user role data.");
          return;
        }

        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("role", res.data.data.roleId.name);

        console.log("Navigating to:", res.data.data.roleId.name); // Debugging Navigation

        if (res.data.data.roleId.name === "User") {
          navigate("/userdashboard");
        } else if (res.data.data.roleId.name === "Admin") {
          navigate("/admindashboard");
        } else {
          navigate("/");
        }
      } else {
        toast.error("Invalid response from server.");
      }
    } catch (error) {
      console.error("API Error:", error.response || error);
      toast.error("Login Failed: " + (error.response?.data?.message || "Server error"));
    }
  };


  //   const submitHandler = async (data) => {
  //     try {
  //       const res = await axios.post("/user/login", data);
  //       if (res.status === 200) {
  //         toast.success("Login Successful!");
  //         if (res.data.data.roleId && res.data.data.roleId.name) {
  //           localStorage.setItem("id", res.data.data._id);
  //           localStorage.setItem("role", res.data.data.roleId.name);
  //           navigate(
  //             res.data.data.roleId.name === "User" ? "/user" :
  //             res.data.data.roleId.name === "Agency" ? "/agency" : "/dashboard"
  //           );
  //         } else {
  //           toast.error("Invalid role data received from server");
  //         }
  //       }
  //     } catch (error) {
  //       toast.error("Login Failed: " + (error.response?.data?.message || "Server error"));
  //     }
  //  };

  // export const Login = () => {
  //       const navigate = useNavigate();
  //       const { register, handleSubmit } = useForm();

  //   const submitHandler = async (data) => {
  //     try {
  //       const res = await axios.post("/user/login", data);
  //       if (res.status === 200) {
  //         alert("Login Success");

  //         console.log(res.data.data.roleId.name);

  //         localStorage.setItem("id", res.data.data._id);
  //         localStorage.setItem("role", res.data.data.roleId.name);

  //         if (res.data.data.roleId.name === "User") {
  //           navigate("/user");
  //         } else if (res.data.data.roleId.name === "Agency") {
  //           navigate("/agency");
  //         }
  //       }
  //     } catch (error) {
  //       alert("Login Failed");
  //     }


  // };


  const styles = {
    login: { minHeight: "100vh", display: "flex", alignItems: "center", fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif", justifyContent: "center", backgroundColor: "#f5f5f5", padding: "20px" },
    card: { background: "white", borderRadius: "20px", padding: "3rem 2rem", width: "100%", maxWidth: "420px", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)" },
    brand: {
      textAlign: "center", marginBottom: "2rem", h1: {
        fontSize: "1.75rem", color: "#1a1a1a", marginBottom: "0.5rem", fontWeight: "500"
      }
    },

    formGroup: { marginBottom: "1.5rem" },
    label: { display: "block", marginBottom: "0.5rem", color: "#333", fontSize: "0.9rem", fontWeight: "500" },
    input: { width: "92%", padding: "0.8rem 1rem", border: "2px solid #e1e1e1", borderRadius: "5px", fontSize: "1rem", transition: "all 0.3s ease" },
    button: { width: "100%", padding: "1rem", background: "#000", color: "white", border: "none", borderRadius: "12px", fontSize: "1rem", fontWeight: "600", cursor: "pointer", transition: "all 0.3s ease" },
    signup: { textAlign: "center", marginTop: "1.5rem" },
  };

  return (
    <div style={styles.login}>
      <div style={styles.card}>
        <div style={styles.brand}>
          <h1 style={styles.brand.h1}>LOGIN USER</h1>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>EMAIL</label>
            <input type="email" id="email" {...register("email", validationSchema.emailValidator)} placeholder="Enter email" style={styles.input} />
            {errors.email && <p style={{ color: "#dc3545", fontSize: "0.85rem", marginTop: "0.5rem" }}>{errors.email.message}</p>}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input type="password" id="password" {...register("password", validationSchema.passwordValidator)} placeholder="Enter password" style={styles.input} />
            {errors.password && <p style={{ color: "#dc3545", fontSize: "0.85rem", marginTop: "0.5rem" }}>{errors.password.message}</p>}
          </div>
          <div style={styles.formGroup}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <a href="/forgotpassword" className="forgot-password">
                Forgot Password?
              </a>
            </div>
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <div style={styles.signup}>
          <p>Don't have an account? <a href="/signup" style={{ color: "#000", textDecoration: "none", fontWeight: "600" }}>Sign up</a></p>
        </div>
      </div>
    </div>
  );
};
