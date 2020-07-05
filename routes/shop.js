const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(
    `<html><head><title>node</title></head><body><h1>Hello World from node Express </h1> </br> <form action="/add-product" > <button type="submit">Goto Add Product page</button> </form action="/add-product"> </body></html>`
  );
});

module.exports = router;
