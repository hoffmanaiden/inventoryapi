const express = require("express");
const router = express.Router();
const { createItem } = require("../handlers/items");

router.route("/").post(createItem);

module.exports = router;