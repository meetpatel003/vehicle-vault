const Feature = require("../models/featuresModel");

// Create Feature
const createFeature = async (req, res) => {
  try {
    const newFeature = new Feature(req.body);
    await newFeature.save();
    res.status(201).json({ success: true, message: "Feature added successfully", data: newFeature });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get All Features
const getAllFeatures = async (req, res) => {
  try {
    const features = await Feature.find();
    res.status(200).json({ success: true, data: features });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
    createFeature,
    getAllFeatures,
}
