var cluster = require("cluster");

var http = require("http");

var cpus = require("os").cpus.length;

if(cluster.isMaster){
    masterprocess();
}

else{
    childprocess();
}

function masterprocess(){
    console.log(`Master ${process.pid} is running`);
    for(let i = 0; i < cpus; i++){
        console.log(`Forking process number ${i}`);
        cluster.fork();
    }
    process.exit();
}

function childprocess(){
    console.log(`Child ${process.pid} started and completed`);
    process.exit();

}
