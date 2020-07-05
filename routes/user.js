const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
  res.send(`
    <html><body><h1>This is USER Page </h1></body></html>`);
});

module.exports = router;
