var fs = require("fs"); // Importing the file system module.

var data = "File demo for sync program";

console.log("File write starts here");

fs.writeFileSync("fileWriteSync.txt",data); // Sync - until this line gets executed it will not move to another line.

console.log("File write completed");

console.log("Program ends here");