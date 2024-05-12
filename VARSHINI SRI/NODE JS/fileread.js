var fs = require("fs");

fs.readFile("filedemo.txt",(err,data)=>{
    if(err){
        console.log("error in reading a file");
    }
    else{
        console.log(data.toString());
    }
})