require("dotenv").config();
const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function(req, res, next){
  try{
    let user = await db.User.findOne({
      username: req.body.username
    });
    let {id, isAdmin} = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch){
      let token = jwt.sign({id, isAdmin}, process.env.SECRET_KEY);
      return res.status(200).json({id, isAdmin, token});
    } else {
      return next({
        status: 400,
        message: "Invalid password"
      });
    }
  }catch(err){
    return next({status: 400, message: "Invalid username"});
  }
}

exports.signup = async function(req, res, next){
  try{
    let user = await db.User.create(req.body);
    let {id, isAdmin} = user;
    let token = jwt.sign(
      {id, isAdmin},
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      isAdmin,
      token
    });
  }catch(err){
    if(err.code === 11000){
      err.message = "Username and/or email is already taken."
    }
    return next({
      status: 400,
      message: err.message
    })
  }
}