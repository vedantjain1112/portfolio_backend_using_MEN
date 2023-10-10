const express = require("express");
const router = express.Router();
const { getServiceItems } = require("../controllers/ServiceController");

router.get("/api/service", getServiceItems);

module.exports = router;
