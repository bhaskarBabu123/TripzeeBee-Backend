const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: Number,
    required: true,
    trim: true,
  },
  Destination: {
    type: String,
    required: true,
    trim: true,
  },
  TourDetails: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", contactSchema);