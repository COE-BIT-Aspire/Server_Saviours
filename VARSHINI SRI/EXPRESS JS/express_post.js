const bodyParser = require("body-parser");
var express = require("express");
var server = express();

server.use(bodyParser.urlencoded({extended:false}))

server.post("/signin",(request,response)=>{
    var username = request.body["uname"];
    response.send("<h1> Welcome "+username+"</h1>")
})

server.post("/home",(request,response)=>{
    response.send("<h1>Landing on home page</h1>")
})

server.listen(5000,()=>{
    console.log("Express server is waiting for client connection")
})