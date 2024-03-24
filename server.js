// imports express.js framework to male a web server
const express = require('express')
const dbConnect = require('./dbConnect')
// make express app instance by invoking the express functions used to configure routes and start the server
const app = express()
/* sets port that will be listened on. We're already running the react.js app in 3000, so use 5000 instead */
const port = 5001

/* defines route for the HTTP GET method on the root URL ("/"). 
When a client makes a GET request to the root URL, the callback function (req, res) => res.send('hello world') 
will be executed. Inside this function, it sends back the string 'hello world' as the response to the client.

'req' object represents the HTTP request that the client (e.g., web browser) sends to the server. 
It has info about the request such as the URL, query parameters, headers, body content, etc. 

'res' object represents the HTTP response that the server sends back to the client. 
It allows you to set headers, status codes, and send data back to the client in response to their request. */
app.get('/', (req, res) => res.send('hello world'))

/* This starts the Express server and makes it listen for incoming connections on the specified port. 
When the server starts successfully, it executes the callback function () => console.log('. . .'), 
which logs a message to the console indicating that the server is running and listening on the specified port.
So, when you run this code, it creates a simple web server that listens for incoming requests on port 3000. 
When someone accesses the root URL of the server, it responds with "hello world" */
app.listen(port, () => console.log('Node.js started on port ' + port + '!'))





// app.listen(port, () => console.log('example app lisening on port $(port)!')): This line starts the Express server and makes it listen for incoming connections on the specified port. When the server starts successfully, it executes the callback function () => console.log('example app lisening on port $(port)!'), which logs a message to the console indicating that the server is running and listening on the specified port.

// So, when you run this code, it creates a simple web server that listens for incoming requests on port 3000. When someone accesses the root URL of the server, it responds with "hello world".
