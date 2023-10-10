// controllers/MySelfController.js
const MySelf = require("../models/MySelfModel");

exports.getMySelfData = async (req, res) => {
  try {
    const data = await MySelf.findOne();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.updateMySelfData = async (req, res) => {
  try {
    const { title, subtitle, description, cvLink, icons } = req.body;
    const image = req.file ? req.file.path : undefined;

    const data = await MySelf.findOneAndUpdate(
      {},
      {
        title,
        subtitle,
        description,
        image,
        icons,
        cvLink,
      },
      { new: true, upsert: true }
    );

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
