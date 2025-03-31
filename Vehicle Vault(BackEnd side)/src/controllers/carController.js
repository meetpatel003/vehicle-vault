const Car = require("../models/carModel");

// Create a New Car (POST)
exports.createCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json({ message: "Car added successfully", car: newCar });
  } catch (error) {
    res.status(500).json({ error: "Failed to add car", details: error.message });
  }
};

// Get All Cars (GET)
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cars" });
  }
};

// Get Car by ID (GET)
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ error: "Car not found" });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch car" });
  }
};

// Update Car by ID (PUT)
// exports.updateCar = async (req, res) => {
//   try {
//     const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedCar) return res.status(404).json({ error: "Car not found" });
//     res.status(200).json({ message: "Car updated successfully", car: updatedCar });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update car" });
//   }
// };

// Delete Car by ID (DELETE)
exports.deleteCar = async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) return res.status(404).json({ error: "Car not found" });
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete car" });
  }
};
