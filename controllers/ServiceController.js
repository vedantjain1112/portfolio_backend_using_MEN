const ServiceModel = require("../models/ServiceModel.js");

const getServiceItems = async (req, res) => {
  try {
    const serviceItems = await ServiceModel.find();
    res.json(serviceItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getServiceItems,
};
