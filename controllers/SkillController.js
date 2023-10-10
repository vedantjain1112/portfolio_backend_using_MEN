const Skill = require("../models/SkillModel");

const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    console.error("Error getting skills data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addSkill = async (req, res) => {
  try {
    const { skill, level } = req.body;

    const newSkill = new Skill({
      skill,
      level,
    });

    await newSkill.save();

    res.json({ message: "Skill added successfully" });
  } catch (error) {
    console.error("Error adding skill:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getSkills, addSkill };
