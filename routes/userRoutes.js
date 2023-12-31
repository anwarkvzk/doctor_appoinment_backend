const express = require('express')
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityContrtoller,
} = require("../controllers/userController");
const authMiddleware = require('../middlewares/authMiddleware')


//router object
const router = express.Router()

//routes
//LOGIN  || POST
router.post('/login', loginController)


//REGISTER || POST
router.post('/register', registerController)

//Auth  || POST
router.post("/getUserData", authMiddleware, authController);

//Apply Doctor || POST
router.post('/apply-doctor', authMiddleware, applyDoctorController)

//Notification Doctor || POST
router.post('/get-all-notification', authMiddleware, getAllNotificationController)

//Notification Doctor || POST
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController)

//get All Doc
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController)

//Book Appointment
router.get('/book-appointment', authMiddleware, bookAppointmentController)

//Booking Availability
router.post('/booking-availability', authMiddleware, bookingAvailabilityContrtoller)

module.exports = router
