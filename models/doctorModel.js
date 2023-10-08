const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastname: {
      type: String,
      required: [true, "Last name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    specialization: {
      type: String,
      required: [true, "Specialization is required"],
    },
    experience: {
      type: String,
      required: [true, "Experience is required "],
    },
    feesPerConsaltation: {
      type: Number,
      required: [true, "Fee is required"],
    },
    timings: {
      type: Object,
      required: [true, "Work Time is required"],
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model("users", doctorSchema);
module.exports = doctorSchema;
