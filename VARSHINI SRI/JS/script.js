console.log("Hello World");

/* Variables */
var a = 5;
var b = 6;
var c = a + b;
console.log(c);

const pi = 3.14;
//pi = 5;
console.log(pi);

{
    let d = 6;
    console.log(d);
}
//console.log(d);

/* Functions */
function display(){
    console.log("Executed");
}
display();

/* Control Flow */
var num = 10;
if (num > 0){
    console.log("Positive");
}
else if(num < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

for(let i = 0; i < 5; i++){
    console.log("Iteration "+i);
}

/* Increment Or Decrement */
var ab = 5;
//console.log(ab++);
//console.log(++ab);
//console.log(ab--);
console.log(--ab);

/* Array */
let fruits = ["apple", "banana", "orange"];
fruits.push("grapes");
fruits.pop();
console.log(fruits);

let person = {name : "Alice", age : 25};
person.age = 26;
console.log(person);





