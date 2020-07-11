const { Router } = require("express");
const User = require("../models/User");

const router = Router();

router.get("/find", async (req, res) => {
  try {
    user = await User.find();
    res.json(user);
  } catch (e) {
    res.status(400).json("Error: " + e);
  }
});

router.post("/save", async (req, res) => {
  const userinfo = req.body.VkApiUser;
  const testResult = req.body.TestResult;

  const newUser = new User({ VkApiUser: userinfo, TestResult: testResult });

  try {
    await newUser.save();

    res.json("User addet!!");
  } catch (e) {
    res.status(400).json("Error: " + e);
  }
});

module.exports = router;
