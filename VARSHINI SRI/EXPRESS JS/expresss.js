const bodyParser = require("body-parser");
var express = require("express");

var server = express();
server.use(bodyParser.urlencoded({extended: false}));

server.post("/signin",(request,response)=>{
    //console.log(request.url);
    //var username = request.query['uname']; - get
    var username = request.body['uname'];
    response.send("<h1> Welcome "+username+"</h1>");
})

server.get("/payment/:option",(request,response)=>{
    var paymentoption = request.params["option"]
    if(paymentoption == "debit"){
        response.send("<h1>debit card page will be landing soon</h1>");
    }
    else if(paymentoption == "credit"){
        response.send("<h1>credit card page will be landing soon</h1>");
    }
    else{
        response.send("<h1>No option yet</h1>");
    }
})

server.get("/home",(request,response)=>{
    response.send("<h1>Landing on home page</h1>");
})

server.listen(5000,()=>{
    console.log("express server is waiting for client connections");
})

server.get("/",(request,response)=>{
    response.status(200);
    response.sendFile(__dirname + "/index.html");
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