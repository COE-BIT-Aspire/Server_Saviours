let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
}; // Properties whose names aren’t valid binding names or valid numbers must be quoted

let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left); // The difference between setting a property to undefined and actually deleting it is that in the first case, the object still has the property whereas in the second case, the property is no longer present and in will return false.
console.log("left" in anObject);
console.log("right" in anObject);

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4}); // copies all properties from one object into another
console.log(objectA); 

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10}; // With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties.
console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2.value);
console.log(object3.value);

console.log(Math.random()); // Returns a new pseudorandom number between 0 (inclusive) and 1 (exclusive)
console.log(Math.floor(Math.random() * 10)); // If we want a whole random number instead of a fractional one

function city(object) {
    return object.address?.city;
  }
console.log(city({address: {city: "Toronto"}})); // When you aren’t sure whether a given value produces an object, but still want to read a property from it when it does, you can use a variant of the dot notation: object?.property.
console.log(city({name: "Vera"})); // The expression a?.b means the same as a.b when a isn’t null or undefined. When it is, it evaluates to undefined. This can be convenient when, as in the example, you aren’t sure that a given property exists or when a variable might hold an undefined value.

let string = JSON.stringify({squirrel: false,
    events: ["weekend"]}); // JavaScript gives us the functions JSON.stringify and JSON.parse to convert data to and from this format. The first takes a JavaScript value and returns a JSON-encoded string.
console.log(string); 
console.log(JSON.parse(string).events); // The second takes such a string and converts it to the value it encodes