require("dotenv").config();
const db = require("./models");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// List of Routes
app.use("/api/auth", authRoutes);


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