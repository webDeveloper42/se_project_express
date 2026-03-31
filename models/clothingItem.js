const { Schema, model } = require("mongoose");
const validator = require("validator");

const clothingItem = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  weather: {
    type: String,
    required: true,
    enum: ["hot", "warm", "cool", "cold"],
  },
  imageUrl: {
    type: String,
    required: true,
    typeof: "url",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createAt: {
    Date: Date.now,
  },
  validate: {
    validator(value) {
      return validator.isURL(value);
    },
    message: "You must enter a valid URL",
  },
});
module.exports = model("ClothingItem", clothingItem);
