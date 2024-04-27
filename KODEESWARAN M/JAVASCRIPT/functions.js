// Anonymous function
var greeting = function () { 
    console.log("Welcome to Aspire!"); 
}; 
  
greeting();

// Passing arguments to anonymous function
var greetings = function (greet) { 
    console.log("Welcome to ", greet); 
}; 
  
greetings("Aspire Systems!");

// Anonymous function as callback to set time out
setTimeout(function () { 
    console.log("Good Mornings!"); 
}, 2000);

// IIFE Function
let total_cost = (function() {
    let pencil_cost = 10;
    let pen_cost = 20;
    return pencil_cost+pen_cost;
})();
 
console.log(total_cost);

// Arrow function
const calculateVolume = (length, width, height) => {
    return length * width * height;
};
console.log("Volume:", calculateVolume(5, 3, 2));

let finalStatement = () => console.log("Volume is calculated sucessfully"); 
    finalStatement();

// Callback Function 1
function mainFunction(callback) {
    console.log("Performing operation...");
    setTimeout(function() {
      callback("Operation complete");
    }, 1000);
  }
   
  function callbackFunction(result) {
    console.log("Result: " + result);
  }
  mainFunction(callbackFunction);

// Callback Function 2
function fetchData(callback) {

    setTimeout(() => {
        const data = { name: 'Ajay', age: 30 };
        callback(data);
    }, 2000);
}
function process(data) {
    console.log("Received data:", data);
}
fetchData(process);


