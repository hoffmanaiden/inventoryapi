const db = require("../models");

// /api/items/
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
// /api/items/:item_id
exports.updateItem = async function(req, res, next){
  try{
    let item = await db.Item.findById(req.params.item_id);
    await item.updateOne(req.body);
    let updatedItem = await db.Item.findById(req.params.item_id);
    return res.status(200).json(updatedItem);
  }catch(err){
    return next(err);
  }
}
// /api/items/:item_id
exports.deleteItem = async function(req, res, next){
  try{
    let foundItem = await db.Item.findById(req.params.item_id);
    await foundItem.remove();
    return res.status(200).json(foundItem);
  }catch(err){
    return next(err);
  }
}