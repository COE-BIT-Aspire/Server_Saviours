console.log("Hello World");

/* var keyword - global var */
var a = 5;
var b = 6;
var c = a + b;
console.log(c);

/* const keyword */
const pi = 3.14;
// pi = 6; 
console.log(pi);

/* let keyword - local var */
{
    let d = 10;
    console.log(d);
}
// console.log(d);

/* function */
function display()
{
    console.log("Function is exceuted");
}
display();

/* control flow */
var num = 10;
if(num > 0)
{
    console.log("Positive number");
}
else if(num < 0)
{
    console.log("Negative number");
}
else
{
    console.log("Zero");
}

for(let i = 0; i < 5; i++)
{
    console.log("Iteration " + i);
}

/* increment or decrement */
var ab = 5;
// console.log(++ab);
console.log(ab++);

/* array */
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");
fruits.pop();
console.log(fruits);

let person = {name: "Alice", age: 25};
person.age = 26;
console.log(person);