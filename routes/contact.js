const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();
router.post("/submit", async (req, res) => {
  try {
    const { firstName, lastName, email, number, Destination, TourDetails } =
      req.body;
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      number,
      Destination,
      TourDetails,
    });
    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;