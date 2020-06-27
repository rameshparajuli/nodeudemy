const serverMessage = () => {
  console.log("Server is running");
};

const routes = require("./routes");
const http = require("http");

const server = http.createServer(routes.handler);
server.listen(3000, "localhost", routes.serverMessage);
