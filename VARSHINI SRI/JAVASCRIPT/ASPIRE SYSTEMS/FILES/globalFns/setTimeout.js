function greet(){
    console.log("First statement");

    setTimeout(()=>{
        console.log("Set timeout limit expired");
    },5000);

    console.log("Last statement");
}
greet();