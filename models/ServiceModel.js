const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  icon: String,
  serviceTitle: String,
  description: String,
  link: String,
});

const serviceItem = mongoose.model("ServiceItem", serviceSchema);

module.exports = serviceItem;
