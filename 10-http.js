const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome"); /// Redundant
    res.end();
    // return;
  } else if (req.url === "/about") {
    res.end("Balona Wonderland");
    // return;
  } else {
    res.end(`
  <h1>Fail!<h1>
  <a href="/">back</a> 
  `);
  }
});

server.listen(5000);
