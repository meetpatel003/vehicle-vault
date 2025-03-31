const express = require("express");
const carController = require("../controllers/carController");

const router = express.Router();

router.post("/cars", carController.createCar);
router.get("/cars", carController.getAllCars);
router.get("/cars/:id", carController.getCarById);
// router.put("/cars/:id", carController.updateCar);
router.delete("/cars/:id", carController.deleteCar);

module.exports = router;
