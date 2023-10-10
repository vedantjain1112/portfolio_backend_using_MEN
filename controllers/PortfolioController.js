const PortfolioItem = require("../models/PortfolioModel");

const getPortfolioItems = async (req, res) => {
  try {
    const portfolioItems = await PortfolioItem.find();
    res.json(portfolioItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getPortfolioItems,
};
