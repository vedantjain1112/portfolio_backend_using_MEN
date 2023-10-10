const express = require("express");
const router = express.Router();
const AboutController = require("../controllers/AboutController");

router.get("/about", AboutController.getAbout);

router.post(
  "/about",
  AboutController.upload.single("image"),
  AboutController.updateAbout
);

module.exports = router;
