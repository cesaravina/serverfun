var http = require('http');

var PORT = 7500;

function handleRequest(request, response){

	response.end("WHY ARE YOU LIKE THIS!: " + request.url);

}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:"+ PORT);
})