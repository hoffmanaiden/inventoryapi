const db = require("../models");

exports.createItem = async function(req, res, next){
  try{
    let item = await db.Item.create(req.body);
    let foundItem = await db.Item.findById(item.id);
    return res.status(200).json(foundItem);
  }catch(err){
    return next(err);
  }
}
// /api/items/:item_id
exports.readItem = async function(req, res, next){
  try{
    let item = await db.Item.findById(req.params.item_id);
    return res.status(200).json(item);
  }catch(err){
    return next(err);
  }
}
exports.updateItem = async function(req, res, next){
  try{
    let item = await db.Item.findById(req.params.item_id);
    if(req.params.item_id.name){
      item.name = req.params.item_id.name;
    }
    if(req.params.item_id.building){
      item.building = req.params.item_id.building;
    }
    if(req.params.item_id.location){
      item.location = req.params.item_id.location;
    }
    if(req.params.item_id.qty){
      item.qty = req.params.item_id.qty;
    }
    if(req.params.item_id.qtyUnit){
      item.qtyUnit = req.params.item_id.qtyUnit;
    }
    if(req.params.item_id.img){
      item.img = req.params.item_id.img;
    }
    const updatedItem = await item.save();
    return res.status(200).json(updatedItem);
  }catch(err){
    return next(err);
  }
}
exports.deleteItem = async function(req, res, next){
  try{
    let foundItem = await db.Item.findById(req.params.item_id);
    await foundItem.remove();
    return res.status(200).json(foundItem);
  }catch(err){
    return next(err);
  }
}