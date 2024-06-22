var express = require("express");
var server = express();

server.get("/",(request,response)=>{
    response.send("<h1>Express js application</h1>")
})

server.get("/home",(request,response)=>{
    response.send("<h1>Landing on home page</h1>")
})

server.listen(5000,()=>{
    console.log("Express server is waiting for client connection")
})