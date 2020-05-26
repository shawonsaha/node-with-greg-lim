// http is one of the built-in packages that Node.js provides to perform actions on the server
const http = require("http");

// We import a file system module ‘ fs ’ which helps us interact with files on our server
const fs = require("fs");

// The readFileSync method from fs reads the content of each file and returns it.
const homepage = fs.readFileSync("index.html");

// we create and start a server with the createServer method from http package
// createServer takes in a function as parameter

// createServer is called a callback function.
// It will be called when the createServer function is completed.
// When it is called, it will be provided the request (req – request from browser)
// and response (res – response to give back to browser) object in the function.
// We can do whatever we want with the two objects in the body of the function
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(homepage);
  } else {
    // writeHead writes the status code of the request.
    // Normally, a status code of 200 indicates that the server responded with a successful response
    res.writeHead(404);
    res.end("page not found");
  }
});

// with server.listen(3000) we start our server to start taking requests.
// That is, the server listens on port 3000 for requests (localhost:3000)
server.listen(3000);
