const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/inventory", {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports.User = require("./user");