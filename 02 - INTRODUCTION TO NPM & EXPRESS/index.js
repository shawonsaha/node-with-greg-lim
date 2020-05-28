// we need package.json file to track all packages and their versions used in our app
// before installing express we should create package.json file
// to create package.json fast and easy run 'npm init'

// install express by 'npm install express'

// under dependencies in package.json notice if "express": "^version" added
// note that a folder node_module is created
// This is where custom dependencies are saved for our project
// explore node_modules, you should be able to locate a folder named 'express'

// Express takes care of the filesystem (fs) and http, request and response objects behind the scenes
const express = require("express"); // require express module
const app = express(); // calls express function to start new Express app

// to serve HTML files with express, we add the following:
// if we do res.sendFile('index.html'), there will be error thrown as an absolute path is needed
// path.resolve(__dirname,'index.html') helps us get the full absolute path
// which otherwise changes based on different Operating Systems
const path = require("path");

// app.use is a special function to increase functionality with Express by adding a function to our application ’ s middleware stack
// express.static is a packaged shipped with Express that helps us serve static files
// With express.static('public'), we specify that any request that ask for assets should get it from the 'public' directory
// we are going to serve 'public/css/style.css' which require to style index.html file
// index.html file can see css file under ' href="css/style.css" '
// hit http://localhost:3000/ to see changes!
app.use(express.static("public"));

//The callback function provided in the 2 nd argument in app.listen() is executed when the servers starts listening
app.listen(3000, () => {
  console.log("App listening on port 3000");
});

// Express allows greater flexibility in responding to browser ‘ get ’ or ‘ post ’ requests
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  // called when request to /about comes in
  res.json({
    name: "Shawon Saha",
  });
});
