const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  // Car Manufacturer
  model: {
    type: String,
    required: true
  },
  // Model Name
  year: {
    type: Number,
    required: true
  },
  // Manufacturing Year
  variant: {
    type: String,
    required: true
  },
  // Variant Type (LX, EX, etc.)
  mileage: {
    type: Number,
    required: true
  },
  // Mileage in KM or Miles
  fuelType: {
    type: String,
    enum: ["Petrol", "Diesel", "Electric"],
    required: true
  },
  // Fuel Type
  transmissionType: {
    type: String,
    enum: ["Manual", "Automatic"],
    required: true
  },
  // Transmission Type
  price: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  // Car Price
  color: {
    type: String,
    required: true
  },
  // Car Color
  description: {
    type: String
  },
  // Additional Description
  status: {
    type: String,
    enum: ["Available", "Sold"],
    default: "Available"
  },
  // Car Status
  listingDate: {
    type: Date,
    default: Date.now
  },
  // Listing Date
  registrationNum: {
    type: String,
    unique: true,
    required: true
  },
  // Registration Number
  seats: {
    type: Number,
    required: true
  },
  // Number of Seats
  kmsDriven: {
    type: Number,
    required: true
  },
  // Kilometers Driven
  RTO: {
    type: String,
    required: true
  },
  // Regional Transport Office
  OwnerShip: {
    type: String,
    required: true
  },
  // Ownership Type (First Owner, Second Owner, etc.)
  engineDisplacement: {
    type: String,
    required: true
  },
  // Engine Capacity (1200cc, 900cc)
  NoOfAirBags: {
    type: Number,
    required: true
  },
  // Number of Airbags
});

module.exports = mongoose.model("Car", carSchema);
