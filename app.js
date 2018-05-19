// Load the http module to create an http server.
var http = require('http');
let port = 3000;

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, World!\n");
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log(`Server running at http://localhost:${port}/`);