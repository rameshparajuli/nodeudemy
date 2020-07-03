const routes = require("./routes");
const http = require("http");

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("first");
  next();
});

app.use((req, res, next) => {
  console.log("next");
  res.send(
    `<html><head><title>node</title></head><h1>Hello World from node Express </h1></body>`
  );
});

// const server = http.createServer(routes.handler);
const server = http.createServer(app);
server.listen(3000, "127.0.0.1", routes.serverMessage);
