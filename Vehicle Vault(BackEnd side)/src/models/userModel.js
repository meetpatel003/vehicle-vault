const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({

    firstName : {
        type : String,
        require : true,
    },
    lastName : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        unique : true,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    gender : {
        type : String,
        enum : ["Male", "Female", "Other"],
        require : true,
    },
    contactNum : {
        type : String,
        require : true,
    },
    roleId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "roles",
    },
    status : {
        type : Boolean,
        default : true,
    },
    createAt : {
        type : Date,
        default : Date.now,
    },

})

module.exports = mongoose.model("user", userSchema)