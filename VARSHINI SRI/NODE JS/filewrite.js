var fs = require("fs");

//var data = "File demo for sync program"; - Synchronous

var data = "File demo for async program";

console.log("File write starts here");

//fs.writeFileSync("filedemo.txt",data); - Synchronous

fs.writeFile("filedemo.txt",data,()=>{
    console.log("File write completed");
})

console.log("File write completed");

console.log("Program ends here");