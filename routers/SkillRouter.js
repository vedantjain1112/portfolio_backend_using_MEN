const express = require("express");
const router = express.Router();
const SkillController = require("../controllers/SkillController");

router.get("/skills", SkillController.getSkills);

router.post("/skills", SkillController.addSkill);

module.exports = router;
