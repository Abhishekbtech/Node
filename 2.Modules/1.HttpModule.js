const http = require("node:http");

const server = http.createServer((req, res) => {
    console.log("server is up and running and we can get response ");
    res.write("hello i am new here \n")
    res.end("hello there guys");
});

server.listen(8080, () => {
    console.log("server is listing fine", 8080);
});