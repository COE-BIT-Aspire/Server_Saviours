var express = require("express");
var server = express();
var passengerName;
//server.use(airportTerminal,getPassengerName);
function airportTerminal(request,response,next){
    var proof = request.query["proof"];
    if(proof == "Aadhar")
        next();
    else{
        response.send("<h1>Without valid proof, we are not allowing</h1>");
    }
}
function getPassengerName(request,response,next){
    passengerName = request.query["passenger"];
    if(passengerName.length>=4)
        next();
    else{
        response.send("<h1>Enter valid name</h1>");
    }
}
server.get("/targetFlight",airportTerminal,getPassengerName,(request,response)=>{
    response.send("<h1> Welcome "+passengerName+" !!! Have a wonderful journey</h1>");
})
server.get("/VIPtargetFlight",(request,response)=>{
    response.send("<h1> Welcome "+"VIP"+" !!! Have a wonderful journey</h1>");
})
server.listen(5000,()=>{
    console.log("express server is waiting for client connections");
})
