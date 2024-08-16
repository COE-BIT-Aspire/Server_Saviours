function greet(){
    console.log("First statement");

    setInterval(()=>{
        console.log("Set timeout limit expired");
    },5000);

    console.log("Last statement");
}
greet();