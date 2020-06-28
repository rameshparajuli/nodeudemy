const fs = require("fs");

const requestHandler = (req, res) => {
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
    `<html> <head> <title> node js</title> </head> <body> <h1> Node Js Practice with Udemy Course</h1> </body> </html>`
  );
  res.end();
};

// single calling
// module.exports = requestHandler;

// calling by making objects
// module.exports = {
//   handler: requestHandler,
//   serverMessage: () => {
//     console.log("Server is running");
//   },
// };

// Another options of exporting module
module.exports.handler = requestHandler;
module.exports.serverMessage = () => {
  console.log("Server is running");
};

// or
// Another options of exporting module
// exports.handler = requestHandler;
// exports.serverMessage = () => {
//   console.log("Server is running");
// };
