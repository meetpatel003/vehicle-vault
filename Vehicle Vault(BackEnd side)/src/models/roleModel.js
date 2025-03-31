const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    // fileds  //get
    name : {
        type: String,
        enum: ["Admin","User","Agent"],
        require: true,
    },
    description : {
        type : String,
    },
});

module.exports = mongoose.model("roles", roleSchema);
//roles = [roleSchema]