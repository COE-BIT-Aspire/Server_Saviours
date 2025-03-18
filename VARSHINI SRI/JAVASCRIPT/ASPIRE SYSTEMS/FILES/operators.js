console.log(typeof 12.6);
console.log(typeof 'Varshu');

console.log(NaN == NaN); // NaN is supposed to denote the result of a nonsensical computation

console.log(true ? 1 : 2);

// Automatic Type Conversion

console.log(8 * null);
console.log("5" - 1);
console.log("5" + 1);
console.log("five" * 2);
console.log(false == 0);

console.log(null == undefined); // When null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.
console.log(null == 0);

console.log(null || "user"); // Return the value to its left when that value can be converted to true and will return the value on its right otherwise.
console.log("Agnes" || "user"); // The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true.

console.log(0 || 100);
console.log(0 ?? 100); // The ?? operator resembles || but returns the value on the right only if the one on the left is null or undefined, not if it is some other value that can be converted to false.
console.log(null ?? 100);