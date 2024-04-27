// Example using forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(element) {
    console.log(element); 
});

// Example using map
const integers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(element) {
    return element * 2;
});
console.log(doubledNumbers); 
