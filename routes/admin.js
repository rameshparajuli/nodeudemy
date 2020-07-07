const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
  res.sendfile(path.join(rootDir, "views", "add_product.html"));
});

router.post("/product", (req, res, next) => {
  console.log("req body:", req.body);
  res.redirect("/");
});

module.exports = router;
