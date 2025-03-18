var backtick = `half of 100 is ${100 / 2}`; // When you write something inside ${} in a template literal, its result will be computed, converted to a string, and included at that position.
console.log(backtick);

var fname = "Varshini";
console.log(fname.toUpperCase());
var lname = "Sri";
console.log(lname.toLowerCase());
console.log("coconuts".slice(4, 7));
console.log("coconut".indexOf("u"));
console.log("one two three".indexOf("ee")); // Search for a string containing more than one character.
console.log("  okay \n ".trim()); // Removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string
console.log(String(6).padStart(3, "0")); // Takes the desired length and padding character as arguments.

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(". "));
console.log("LA".repeat(3)); // Creates a new string containing multiple copies of the original string

let string = "abc";
console.log(string.length);
console.log(string[1]);