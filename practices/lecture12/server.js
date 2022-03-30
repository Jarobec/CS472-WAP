console.log("Starting HTTP Server...");

const http = require("http");
const url = require("url");
const sayHello = require("./helloModule");

sayHello.sayHello("Jargal");
// Create and start as HTTP Server
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    const q = url.parse(req.url, true).query;
    res.end(`<h1>Hello World!</h1><p>${q.id}</p>`);
  })
  .listen(8080);
