//users table.. -->userModel
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const mailUtil =require("../utils/mailUtil")

const loginUser = async (req, res) => {
    
  //req.body email and password: password
  //password -->plain -->db -->encrypted 
  //bcrypt  --> plain,enc --> match : true
  
  const email = req.body.email;
  const password = req.body.password;
  
  //select * from users where email =? and password = ?
  //userModel.find({email:email,password:password})
  //email --> object -->abc --{passwird:hashedPasseord}
  //normal passwoed compare -->

  //const foundUserFromEmail = userModel.findOne({email:req.body.email})
  
  const foundUserFromEmail = await userModel.findOne({ email: email }).populate("roleId")
  console.log(foundUserFromEmail);
  //check if email is exist or not//
  if (foundUserFromEmail != null) {
    //password
    //normal -plain req.bodyy --- databse -->match  --> true | false
    //const isMatch = bcrypt.compareSync(req.body.password,foundUserFromEmail.password)
    const isMatch = bcrypt.compareSync(password, foundUserFromEmail.password);
    //true | false
    if (isMatch == true) {
      res.status(200).json({
        message: "login success",
        data: foundUserFromEmail,
      });
    } else {
      res.status(404).json({
        message: "invalid cred..",
      });
    }
  } else {
    res.status(404).json({
      message: "Email not found..",
    });
  }
};

const signup = async (req, res) => {
      try {
          // Validate request body
          if (!req.body.password) {
              return res.status(400).json({ message: "Password is required" });
          }
  
          // Hash password
          const salt = bcrypt.genSaltSync(10);
          const hashedPassword = bcrypt.hashSync(req.body.password, salt);
          req.body.password = hashedPassword;
  
          // Create user
          const createdUser = await userModel.create(req.body);
          res.status(201).json({
              message: "User created successfully",
              data: createdUser,
          });
          await mailUtil.sendingMail(createdUser.email,"welcome to VehicleVault","this is welcome mail")
      } catch (err) {
          console.error("Signup Error:", err);
          res.status(500).json({
              message: "Internal Server Error",
              error: err.message,
          });
      }
};

const addUser = async (req, res) => {
  //req.body...
  const savedUser = await userModel.create(req.body);
  res.json({
    message: "User Saved Successfully",
    data: savedUser,
  });
};
const getAllUsers = async (req, res) => {
  const users = await userModel.find().populate("roleId");
  res.json({
    message: "User fetched successfully..",
    data: users,
  });
};

const getUserById = async (req, res) => {
  const foundUser = await userModel.findById(req.params.id);
  res.json({
    message: "user fetched successfully..",
    data: foundUser,
  });
};

const deleteUserById = async (req, res) => {
  const deletedUser = await userModel.findByIdAndDelete(req.params.id);
  res.json({
    message: "user deleted Successfully..",
    data: deletedUser,
  });
};

const forgotPassword = async (req, res) => {
  const email = req.body.email;
  const foundUser = await userModel.findOne({ email: email });

  if (foundUser) {
    // const token = jwt.sign(foundUser.toObject(), secret);
    const token = jwt.sign({ _id: foundUser._id, email: foundUser.email }, secret, { expiresIn: "15m" });

    console.log(token);
    const url = `http://localhost:5173/resetpassword/${token}`;
    const mailContent = `<html>
                          <a href ="${url}">rest password</a>
                          </html>`;
    //email...
    await mailUtil.sendingMail(foundUser.email, "reset password", mailContent);
    res.json({
      message: "reset password link sent to mail.",
    });
  } else {
    res.json({
      message: "user not found register first..",
    });
  }
};

const resetpassword = async (req, res) => {
  const token = req.body.token; //decode --> email | id
  const newPassword = req.body.password;

  // const userFromToken = jwt.verify(token, secret);
  // //object -->email,id..
  // //password encrypt...
  // // const salt = bcrypt.genSaltSync(10);
  // // const hashedPasseord = bcrypt.hashSync(newPassword,salt);
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(newPassword, salt);
  try {
    const userFromToken = jwt.verify(token, secret);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
  
    const updatedUser = await userModel.findByIdAndUpdate(userFromToken._id, { password: hashedPassword });
  
    if (!updatedUser) {
      return res.status(400).json({ message: "User not found or password update failed" });
    }
  
    res.json({ message: "Password updated successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }
  

  const updatedUser = await userModel.findByIdAndUpdate(userFromToken._id, {
    password: hashedPassword,
  });
  res.json({
    message: "password updated successfully..",
  });
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  signup,
  loginUser,
  forgotPassword,
  resetpassword,
};
