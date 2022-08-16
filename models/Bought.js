const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boughtSchema = new Schema({
  clothe_id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  discount: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("bought", boughtSchema);
