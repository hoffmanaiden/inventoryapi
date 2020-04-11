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
exports.readItem = async function(req, res, next){
  try{}catch(err){}
}
exports.updateItem = async function(req, res, next){
  try{}catch(err){}
}
exports.deleteItem = async function(req, res, next){
  try{}catch(err){}
}