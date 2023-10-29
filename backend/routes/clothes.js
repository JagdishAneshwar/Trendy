const express = require("express");
const Clothe = require("../models/Clothe");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Route 1: get all clothes using GET: "api/clothes/fetchallclothes"
router.get("/fetchallclothes", fetchuser, async (req, res) => {
  try {
    const clothes = await Clothe.find({ user: req.user.id });
    res.json(clothes);
  } catch (err) {
    console.error(err.message);
    res.json({ error: "internal Server Error", err: err.message });
  }
});

// Route 1: get all clothes using GET: "api/clothes/product-detail"
router.get("/product-detail/:id", fetchuser, async (req, res) => {
  try {
    const clothe = await Clothe.findById(req.params.id);
    res.json(clothe);
  } catch (err) {
    console.error(err.message);
    res.json({ error: "internal Server Error", err: err.message });
  }
});

// Route 2: add new product using POSt: "api/clothes/addclothe"
router.post("/addclothe", async (req, res) => {
  const {
    title,
    image,
    description,
    brand,
    gender,
    color,
    discount,
    rating,
    price,
    category,
    fabric,
    size,
    featured,
    stocks,
  } = req.body;

  try {
    const clothe = new Clothe({
      title,
      image,
      description,
      brand,
      gender,
      color,
      category,
      fabric,
      price,
      discount,
      rating,
      size,
      featured,
      stocks,
    });
    const saveClothe = await clothe.save();
    res.send(saveClothe);
  } catch (err) {
    console.error(err.message);
    res.json({ error: "internal Server Error", err: err.message });
  }
});

module.exports = router;
