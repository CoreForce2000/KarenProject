// const http = require('http'),
//     fs = require("fs")

// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);
//         response.end();  
//     }).listen(8080);
// });

const express = require('express');
const app = express();
const path = require('path');

// This tells Express to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'app')));

// This route serves your index.html file
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

const port = 8080;
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});