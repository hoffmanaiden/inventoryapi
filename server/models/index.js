const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/inventory", {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
