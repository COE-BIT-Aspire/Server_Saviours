function greet(){
    console.log("First statement");

    setInterval(()=>{
        console.log("Set interval limit expired");
    },5000);

    console.log("Last statement");
}
greet();