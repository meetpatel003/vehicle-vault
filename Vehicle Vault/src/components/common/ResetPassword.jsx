// import axios from 'axios'
// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { useParams } from 'react-router-dom'

// export const ResetPassword = () => {
//     const token = useParams().token
//     const {register,handleSubmit} = useForm()
//     const submitHandler = async(data)=>{
//         //resetpasseord api..
//         const obj = {
//             token:token,
//             password:data.password
//         }
//         const res = await axios.post("/user/resetpassword",obj)
//         console.log(res.data)
            

//     }
//   return (
//     <div>
//         <h1>RESET PASSWOERD COMPONENT</h1>
//         <form onSubmit={handleSubmit(submitHandler)}>
//             <div>
//                 <label>NEW PASSWORD</label>
//                 <input type='text' {...register("password")}></input>
//             </div>
//             <div>
//                 <input type='submit'></input>
//             </div>
//         </form>
//     </div>
//   )
// }


import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams(); // URL se token nikalna
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/resetpassword", { token, password });
      setMessage(res.data.message);
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "10px", width: "250px", marginBottom: "10px" }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 20px" }}>Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
