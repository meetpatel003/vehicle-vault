const Insurance = require("../models/insuranceModel");

// Create Insurance
const createInsurance = async (req, res) => {
  try {
    const newInsurance = new Insurance(req.body);
    await newInsurance.save();
    res.status(201).json({ success: true, message: "Insurance added successfully", data: newInsurance });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get All Insurances
const getAllInsurances = async (req, res) => {
  try {
    const insurances = await Insurance.find();
    res.status(200).json({ success: true, data: insurances });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
    createInsurance,
    getAllInsurances,
};
