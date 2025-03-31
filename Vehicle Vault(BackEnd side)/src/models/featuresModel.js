const mongoose = require("mongoose");
const Schema = mongoose.Schema

const featureSchema = new Schema({
  featureId: { type: String, required: true, unique: true },
  featureName: { type: String, required: true },
});

module.exports = mongoose.model("Feature", featureSchema);
