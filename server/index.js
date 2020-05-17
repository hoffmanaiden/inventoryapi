require("dotenv").config();
const db = require("./models");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/items");
const {loginRequired} = require("./middleware/auth");

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

// List of Routes
app.use("/api/auth", authRoutes);
app.use("/api/items", loginRequired, itemRoutes);
app.get("/api/items", loginRequired, async function(req, res, next){
  try{
    let items = await db.Item.find().sort({name: "desc"});
    return res.status(200).json(items);
  }catch(err){
    return next(err);
  }
})


// If no routes can be reached...
app.use(function(req, res, next){
  let err = new Error("Route not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
  console.log(`Server is starting on port ${PORT}`);
});