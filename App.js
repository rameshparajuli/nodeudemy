const serverMessage = () => {
  console.log("Server is running");
};

const routes = require("./routes");
const http = require("http");

const server = http.createServer(routes.handler);
server.listen(3000, "127.0.0.1", routes.serverMessage);
