const serverMessage = () => {
  console.log("Server is running");
};

require("http")
  .createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/plain");
    // res.end("Ramesh Parajuli");
    // process.exit();
    // // if you want to exit
  })
  .listen(3000, "localhost", serverMessage());
