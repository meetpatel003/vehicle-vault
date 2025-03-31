const express = require("express");
const router = express.Router();
const { createInsurance, getAllInsurances } = require("../controllers/insuranceController");

router.post("/add", createInsurance);
router.get("/all", getAllInsurances);

module.exports = router;
