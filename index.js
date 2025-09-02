const http = require("http");
const fs = require("node:fs");
const path = require("path");

function serverPage(res, fileName) {
  const filePath = path.join(__dirname, fileName);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    serverPage(res, "index.html");
  } else if (req.url === "/about") {
    serverPage(res, "about.html");
  } else if (req.url === "/contact") {
    serverPage(res, "contact.html");
  } else {
    serverPage(res, "not-found.html");
  }
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
