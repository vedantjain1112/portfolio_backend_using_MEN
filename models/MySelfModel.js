const mongoose = require("mongoose");

const mySelfSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  icons: {
    type: {
      facebook: String,
      instagram: String,
      twitter: String,
      github: String,
      threads: String,
      linkedin: String,
    },
    required: true,
  },
  cvLink: {
    type: String,
    required: true,
  },
});

const MySelf = mongoose.model("MySelf", mySelfSchema);
module.exports = MySelf;
