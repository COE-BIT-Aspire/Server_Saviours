function greet(callback){
    console.log(callback)
}

greet(()=>{
    console.log("Message from Aspire")
})

function greeting(callback){
    console.log(callback())
}

greeting(()=>{
    console.log("Welcome To Aspire Systems !")
})