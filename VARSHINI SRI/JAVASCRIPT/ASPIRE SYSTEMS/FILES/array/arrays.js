var products = ["Laptop", "Notebook", "Charger", "Water Bottle"];
products.push("Pen"); //products.shift("Pen");
console.log(products);
console.log(products.pop()); //products.unshift();
console.log(typeof products) // Arrays, then, are just a kind of object specialized for storing sequences of things. If you evaluate typeof [], it produces "object".

console.log([1, 2, 3, 2, 1].indexOf(2)); // The method searches through the array from the start to the end and returns the index at which the requested value was found—or -1 if it wasn’t found.
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // To search from the end instead of the start.

console.log([0, 1, 2, 3, 4].slice(2, 4)); // takes start and end indices and returns an array that has only the elements between them. The start index is inclusive and the end index is exclusive.
console.log([0, 1, 2, 3, 4].slice(2)); // When the end index is not given, slice will take all of the elements after the start index. You can also omit the start index to copy the entire array.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2); // The concat method can be used to append arrays together to create a new array
console.log(combinedArray);


let newArray = array1.concat(4);  // If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.
console.log(newArray);