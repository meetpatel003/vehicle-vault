const express = require("express");
const router = express.Router();
const { createFeature, getAllFeatures } = require("../controllers/featuresController");

router.post("/add", createFeature);
router.get("/all", getAllFeatures);

module.exports = router;
