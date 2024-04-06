// Addition Of Two Numbers
var num1 = 10
var num2 = 20
function add(){
    console.log(num1 + num2)
}
add()

// Favourites
var favBook = "Ikigai"
var favSkill = "Data Science"
var favCompany = "Aspire Systems"
function favourite(){
    console.log("Favourite Book :" + favBook)
    console.log("Favourite Skill :" + favSkill)
    console.log("Favourite Company :" + favCompany)
}
favourite()

// Area Of Rectangle
var length 
var breadth 
function area(length,breadth){
    console.log("Area Of Rectangle :",length*breadth)
}
area(10,20)

// Addition Of Two Numbers Using Return
var num1 
var num2 
function add(num1,num2){
    return (num1+num2)
}
console.log(add(10,20))