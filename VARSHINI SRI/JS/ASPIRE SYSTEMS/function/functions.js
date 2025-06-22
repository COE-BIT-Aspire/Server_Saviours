const halve = function(n) {
    return n / 2;
};
let n = 10;
console.log(halve(100)); // The exception is when multiple bindings have the same name—in that case, code can see only the innermost one.
console.log(n);

console.log("The future says:", future()); // Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope.
function future() {
  return "You'll never have flying cars";
}

// Closure

function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

// Recursion

function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
} 
console.log(power(2, 3));

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2)); // REST Parameters - To accept any number of arguments.

let numbers = [5, 1, 7];
console.log(max(...numbers)); // To call a function with an array of arguments. This “spreads” out the array into the function call, passing its elements as separate arguments. It is possible to include an array like that along with other arguments, as in max(9, ...numbers, 2).

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]); // To spread another array into the new array

let coordinates = {x: 10, y: 0};
console.log({...coordinates, y: 5, z: 1}); // Adds all properties from another object.