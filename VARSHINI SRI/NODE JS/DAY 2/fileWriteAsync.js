var fs = require("fs"); 

var data = "File demo for async program";

console.log("File write starts here");

fs.writeFile("fileWriteASync.txt",data,()=>{
    console.log("File write completed");
}); 

console.log("Program ends here");