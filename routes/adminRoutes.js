const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
} = require("../controllers/adminController");

const router = express.Router();

//Get method || Users
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//get Method || Doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

module.exports = router;
