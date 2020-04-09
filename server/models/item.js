const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name:{type: String, required:true},
  building:{type: String},
  location:{type: String},
  qty:{type: Number},
  qtyUnit:{type: String},
  img:{type: String}
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;