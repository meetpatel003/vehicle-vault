import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const SignUp = () => {
    const { register, handleSubmit, watch } = useForm();
    const navigate = useNavigate();

    const submitHandler = async (data) => {
        try {
            // Ensure roleId is set correctly from dropdown
            if (!data.roleId) {
                alert("Please select a role.");
                return;
            }

            const res = await axios.post("/user", data);

            if (res.status === 201 || res.status === 200) {
                toast.success("User created successfully");
                navigate("/login");
            } else {
                alert("User not created");
            }
        } catch (error) {
            console.error("Signup Error:", error);
            alert("Signup Failed: " + (error.response?.data?.message || "Server error"));
        }
    };

    const styles = {
        signup: { minHeight: "100vh", display: "flex", alignItems: "center", fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif", justifyContent: "center", backgroundColor: "#f5f5f5", padding: "20px" },
        card: { background: "white", borderRadius: "20px", padding: "3rem 2rem", width: "100%", maxWidth: "480px", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)" },
        brand: {
            textAlign: "center", marginBottom: "2rem", h1: {
                fontSize: "1.75rem", color: "#1a1a1a", marginBottom: "0.5rem", fontWeight: "500"
            }
        },

        formGroup: { marginBottom: "1.5rem" },
        label: { display: "block", marginBottom: "0.5rem", color: "#333", fontSize: "0.9rem", fontWeight: "500" },
        input: { width: "92%", padding: "0.8rem 1rem", border: "2px solid #e1e1e1", borderRadius: "5px", fontSize: "1rem", transition: "all 0.3s ease" },
        select: { width: "100%", padding: "0.8rem 1rem", border: "2px solid #e1e1e1", borderRadius: "5px", fontSize: "1rem", transition: "all 0.3s ease" },
        button: { width: "100%", padding: "1rem", background: "#000", color: "white", border: "none", borderRadius: "12px", fontSize: "1rem", fontWeight: "600", cursor: "pointer", transition: "all 0.3s ease" },
        login: { textAlign: "center", marginTop: "1.5rem" },
    };

    return (
        <div style={styles.signup}>
            <div style={styles.card}>
                <div style={styles.brand}>
                    <h1 style={styles.brand.h1}>CREATE ACCOUNT</h1>
                    <p>Sign up to get started</p>
                </div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    {/* First Name */}
                    <div style={styles.form}>
                        <label htmlFor="firstName" style={styles.label}>First Name</label>
                        <input style={styles.input} type="text" id="firstName" {...register("firstName", { required: true })} placeholder="Enter first name" />
                    </div>

                    {/* Last Name */}
                    <div style={styles.formGroup}>
                        <label htmlFor="lastName" style={styles.label}>Last Name</label>
                        <input style={styles.input} type="text" id="lastName" {...register("lastName", { required: true })} placeholder="Enter last name" />
                    </div>

                    {/* Email */}
                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input style={styles.input} type="email" id="email" {...register("email", { required: true })} placeholder="Enter email" />
                    </div>

                    {/* Password */}
                    <div style={styles.formGroup}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input style={styles.input} type="password" id="password" {...register("password", { required: true })} placeholder="Enter password" />
                    </div>

                    {/* Gender Selection (FIXED) */}
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Gender</label>
                        {/* <div>
              <label style={styles.label}>
                <input style={styles.input} type="radio" {...register("gender", { required: true })} name="gender" value="Male" /> Male
              </label>
              <label style={styles.label}>
                <input style={styles.input} type="radio" {...register("gender", { required: true })} name="gender" value="Female" /> Female
              </label>
              <label style={styles.label}>
                <input style={styles.input} type="radio" {...register("gender", { required: true })} name="gender" value="Other" /> Other
              </label>
            </div> */}
                        <select style={styles.select} {...register("gender", {required: true})}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Contact Number */}
                    <div style={styles.formGroup}>
                        <label htmlFor="contactNum" style={styles.label}>Contact No</label>
                        <input style={styles.input} type="tel" id="contactNum" {...register("contactNum", { required: true })} placeholder="Enter contact number" />
                    </div>

                    {/* Role Selection (FIXED) */}
                    <div style={styles.formGroup}>
                        <label htmlFor="roleId" style={styles.label}>Role</label>
                        <select style={styles.select} id="roleId" {...register("roleId", { required: true })}>
                            <option value="">-- Select Role --</option>
                            <option value="67c734de37db1c413443fad0">Admin</option>
                            <option value="67c7351937db1c413443fad2">User</option>
                            <option value="67c7354937db1c413443fad4">Technician</option>
                            <option value="67c7356b37db1c413443fad6">Agent</option>
                        </select>
                    </div>

                    {/* Age */}
                    <div style={styles.formGroup}>
                        <label htmlFor="age" style={styles.label}>Age</label>
                        <input style={styles.input} type="number" id="age" {...register("age", { required: true })} placeholder="Enter age" />
                    </div>

                    <button type="submit" style={styles.button}>Sign Up</button>
                </form>

                <div style={styles.login}>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </div>
        </div>
    );
};