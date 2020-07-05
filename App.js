const routes = require("./routes");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const pageNotFound = require("./routes/page_not_found");

const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(pageNotFound);

// const server = http.createServer(routes.handler);

// if we use express, we don't have to use this
// const server = http.createServer(app);
// server.listen(3000, "127.0.0.1", routes.serverMessage);

app.listen(3000);
