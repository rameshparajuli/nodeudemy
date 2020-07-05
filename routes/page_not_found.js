const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
  res.status(404).send(`
    <html><body><p>Page Not Found</p></body></html>`);
});

module.exports = router;
