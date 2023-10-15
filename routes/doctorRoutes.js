const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updataProfileController,
  getDoctorByIdController,
} = require("../controllers/doctorController");
const router = express.Router();

//Post single Doctor INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//Post Update Profile
router.post("/updataProfile", authMiddleware, updataProfileController);

//POST GET Single Doc Info
router.post('/getDoctorById', authMiddleware, getDoctorByIdController)

module.exports = router;
