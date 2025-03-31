const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const insuranceSchema = new Schema({
  insuranceId: { type: String, required: true, unique: true },
  insuranceType: { 
    type: String, 
    enum: ["thirdParty", "full", "comprehensive"], 
    required: true 
  }
});

module.exports = mongoose.model("Insurance", insuranceSchema);
