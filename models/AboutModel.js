const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
});

const About = mongoose.model("About", aboutSchema);

module.exports = About;
