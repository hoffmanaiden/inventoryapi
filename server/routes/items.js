const express = require("express");
const router = express.Router();
const { createItem, readItem, updateItem, deleteItem } = require("../handlers/items");

router.route("/").post(createItem);
router.route("/:item_id").get(readItem).put(updateItem).delete(deleteItem);

module.exports = router;