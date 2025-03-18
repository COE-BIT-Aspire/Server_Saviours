var fs = require("fs");

fs.readFile("fileWriteAsync.txt",(err,data)=>{
    if(err){
        console.log("Error in reading a file");
    }
    else{
        console.log(data.toString());
    }
})