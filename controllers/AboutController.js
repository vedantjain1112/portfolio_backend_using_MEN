const About = require("../models/AboutModel");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // creating an 'uploads' folder.
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (error) {
    console.error("Error getting About data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateAbout = async (req, res) => {
  try {
    const { name, paragraph } = req.body;

    // Check if an image file was uploaded
    if (req.file) {
      // Save the image path to the database
      const imagePath = req.file.path;
      await About.updateOne({}, { name, paragraph, image: imagePath });
    } else {
      // If no new image was uploaded, update only name and paragraph
      await About.updateOne({}, { name, paragraph });
    }

    res.json({ message: "About section updated successfully" });
  } catch (error) {
    console.error("Error updating About data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAbout, updateAbout, upload };
