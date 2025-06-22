var fs = require("fs");

var data = fs.readFileSync("fileWriteSync.txt");

console.log(data.toString());