const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clotheSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
  },
  rating: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  fabric: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
  stocks: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("clothe", clotheSchema);
