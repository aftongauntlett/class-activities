// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTONE = 7000; 
var PORTTWO = 7500;

// Create a generic function to handle requests and responses
function handleRequestOne(request, response) {
  response.end("Happiness can be found even in the darkest of times, if one only remembers to turn on the light ");
  }

function handleRequestTwo(request, response) {
  response.end("Star stuff ");
  }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);


// Start our server so that it can begin listening to client requests.
serverOne.listen(PORTONE, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTTWO);
});

