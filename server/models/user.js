const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
    },
    isMale: {
      type: Boolean,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "This email is already exist"],
    },
    password: {
      type: String,
      required: true,
      unique: [true, "This password is already exist"],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
