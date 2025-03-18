var express = require("express");
var server = express();

server.get("/signin",(request,response)=>{
    var username = request.query["uname"];
    response.send("<h1> Welcome "+username+"</h1>")
})

server.get("/payment/:option",(request,response)=>{
    var paymentOption = request.params["option"]
    if(paymentOption=="debit"){
        response.send("<h1>Debit card page will be landing soon</h1>")
    }
    else if(paymentOption=="credit"){
        response.send("<h1>Credit card page will be landing soon</h1>")
    }
    else{
        response.send("<h1>No option yet</h1>")
    }
})
server.get("/home",(request,response)=>{
    response.send("<h1>Landing on home page</h1>")
})

server.get("/",(request,response)=>{
    response.status(200)
    response.sendFile(__dirname + '/index_get.html')
})

server.get("/contactus",(request,response)=>{
    var contact = {
        "id" : "AD153",
        "name" : "Varshini",
        "mobile" : 8870172063
    }
    //response.json(contact);
    response.redirect("https://www.google.com/");
})

server.listen(5000,()=>{
    console.log("Express server is waiting for client connection")
})