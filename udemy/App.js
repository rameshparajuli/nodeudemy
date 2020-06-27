const serverMessage = () => {
  console.log("Server is running");
};

const fs = require("fs");

require("http")
  .createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      res.write(
        `<html> <head> <title> Enter Message</title> </head> <body> <form action="/message" method="POST"> <h1> Write Something </h1> <br/> <input type="text" name="message" /> <button type="submit"> send </button></form> </body> </html>`
      );
      return res.end();
    }
    if (url === "/message" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });

      return req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split(`=`)[1];
        fs.writeFile("message.txt", message, (err) => {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      });
    }
    res.setHeader("content-Type", "text/html");
    res.write(
      "<html> <head> <title> node js</title> </head> <body> <h1> Node Js Practice with Udemy Course</h1> </body> </html>"
    );
    res.end();
  })
  .listen(3000, "localhost", serverMessage());
