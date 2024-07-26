const http = require("http");
const fs = require("fs");

const port = 80;
const hostname = "127.0.0.1";

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");
const contact = fs.readFileSync("./contact.html");
const service = fs.readFileSync("./services.html");

const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (url == "/") {
    res.end(home);
  } 
  else if (url == "/about") {
    res.end(about);
  } 
  else if (url == "/contact") {
    res.end(contact);
  }
   else if (url == "/services") {
    res.end(service);
  } 
  else {
    res.statusCode = 404;
    res.end(">h1>404 Error</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log("Sever is running ");
});
