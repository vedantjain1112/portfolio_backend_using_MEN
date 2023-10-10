const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  link: String,
});

const PortfolioItem = mongoose.model("PortfolioItem", portfolioSchema);

module.exports = PortfolioItem;
