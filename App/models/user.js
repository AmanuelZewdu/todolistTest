const mongoose = require("mongoose");

// Define user schema
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, "Please enter name"] },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
