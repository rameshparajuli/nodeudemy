const serverMessage = () => {
  console.log("Server is running");
};

require("http")
  .createServer((req, res) => {
    // console.log(res);
    res.setHeader("content-Type", "text/html");
    res.write(
      "<html> <head> <title> node js</title> </head> <body> <h1> Node Js Practice with Udemy Course</h1> </body> </html>"
    );
    res.end();
  })
  .listen(3000, "localhost", serverMessage());
