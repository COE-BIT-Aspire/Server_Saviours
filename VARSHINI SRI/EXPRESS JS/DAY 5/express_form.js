const bodyParser = require("body-parser");
var express = require("express");
var axios = require("axios");
var server = express();

server.use(bodyParser.urlencoded({extended:false}))

server.get("/",(request,response)=>{
    response.sendFile(__dirname + "/form.html");
})

server.post("/submit",(request,response)=>{
    var {username, password, mobile, email} = request.body;
    var userdata = {username, password, mobile, email};
    //response.send(`<script>alert("Username: ${username}\\n Password: ${password}\\n Mobile: ${mobile}\\n Email: ${email})")</script>`);
    axios.post(" http://localhost:3000/users",userdata).then(data=>{
        response.send("User data saved successfully");
    }).catch(error=>console.log("Error while saving the user data"));
})

server.listen(5000,()=>{
    console.log("Express server is waiting for client connection")
})
