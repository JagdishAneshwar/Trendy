const express = require("express");
const Bought = require("../models/Bought");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();

router.post("/addBought", fetchuser, async (req, res) => {
  const { clothe_id, image, title, discount, type, price, quantity } = req.body;
  // console.log({ clothe_id, image, title, discount, type, quantity });
  try {
    const bought = new Bought({
      clothe_id: clothe_id,
      image: image,
      user: req.user.id,
      price: price,
      title: title,
      discount: discount,
      type: type,
      quantity: quantity,
    });

    const saveBought = await bought.save();
    res.send(saveBought);
  } catch (err) {
    console.error(err.message);
    res.json({ error: "internal Server Error", err: err.message });
  }
});

router.get("/boughtInfo", fetchuser, async (req, res) => {
  try {
    const boughts = await Bought.find({ user: req.user.id });
    res.json(boughts);
  } catch (error) {
    console.log(error.message);
    res.json({ error: "internal Server Error", err: error.message });
  }
});

router.put("/updateQuantity/:id", fetchuser, async (req, res) => {
  const { quantity } = req.body;
  var newBought = {};
  if (quantity) {
    newBought.quantity = quantity;
  }
  var bought = await Bought.findById(req.params.id);

  try {
    bought = await Bought.findByIdAndUpdate(
      req.params.id,
      { $set: newBought },
      { new: true }
    );
    res.json(bought);
  } catch (error) {
    console.log(error.message);
    res.json({ error: "Internal Server ERROR!!", error: error.message });
  }
});

module.exports = router;
