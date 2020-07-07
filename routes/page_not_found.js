const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../util/path");

router.use("/", (req, res, next) => {
  res.status(404).sendfile(path.join(rootDir, "views", "404.html"));
});

module.exports = router;
