// Assignment 12 - Node JS I
// AdderWebServer.js

const http = require("http");
const url = require("url");
const fs = require("fs");
const addmod = require("./addmod");

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    if (q.pathname == "/add.js") {
      addmod.add(req, res, q.query);
    } else {
      fs.readFile(filename, function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200);
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);

console.log("AdderWebServer started on port 8080");
