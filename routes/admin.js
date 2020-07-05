const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST"> <input type="text" placeholder = "product" name="title"/> <button type="submit"> Add Item </button> </form>`
  );
});

router.post("/product", (req, res, next) => {
  console.log("req body:", req.body);
  res.redirect("/");
});

module.exports = router;
