const { Schema, model } = require("mongoose");

const User = new Schema({
  VkApiUser: {
    type: Object,
    required: true,
  },
  TestResult: {
    type: Array,
    required: true,
  },
});

module.exports = model("User", User);
