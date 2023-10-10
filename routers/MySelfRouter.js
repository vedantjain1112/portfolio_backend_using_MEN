// routers/MySelfRouter.js
const express = require("express");
const multer = require("multer");
const MySelfController = require("../controllers/MySelfController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/myself", MySelfController.getMySelfData);
router.post(
  "/myself",
  upload.single("image"),
  MySelfController.updateMySelfData
);

module.exports = router;
