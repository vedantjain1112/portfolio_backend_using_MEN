const express = require("express");
const router = express.Router();
const { getPortfolioItems } = require("../controllers/PortfolioController");

router.get("/api/portfolio", getPortfolioItems);

module.exports = router;
