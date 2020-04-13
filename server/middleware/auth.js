require("dotenv").config();
const jwt = require("jsonwebtoken");

// is user logged in?
exports.loginRequired = function(req, res, next){
  try{
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
      if(decoded){
        return next();
      } else {
        return next({
          status: 401,
          message: "Please log in first 1"
        });
      }
    })
  }catch(err){
    return next({
      status: 401,
      message: "Please log in first 2"
    });
  }
}