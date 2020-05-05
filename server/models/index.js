const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/inventory", {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports.User = require("./user");
module.exports.Item = require("./item");