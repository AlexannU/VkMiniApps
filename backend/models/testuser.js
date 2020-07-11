const { Schema, model } = require("mongoose");

const Testuser = new Schema({
  username: {
    type: String,
    required: true,
  },
});

module.exports = model("Testuser", Testuser);
