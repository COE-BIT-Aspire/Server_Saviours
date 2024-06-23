const bodyParser = require("body-parser");
var express = require("express");
var server = express();

server.use(bodyParser.urlencoded({extended:false}))

server.get("/",(request,response)=>{
    response.sendFile(__dirname + "/form.html");
})

server.post("/submit",(request,response)=>{
    var {username, password, mobile, email} = request.body;
    response.send(`<script>alert("Username: ${username}\\n Password: ${password}\\n Mobile: ${mobile}\\n Email: ${email})")</script>`);
})

server.listen(5000,()=>{
    console.log("Express server is waiting for client connection")
})
