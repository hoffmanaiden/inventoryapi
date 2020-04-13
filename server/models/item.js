const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name:{type: String, required:true},
  building:{type: String},
  location:{type: String},
  qty:{type: Number, required: true, default:0},
  qtyUnit:{type: String},
  img:{type: String}
}, {timestamps: true});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;