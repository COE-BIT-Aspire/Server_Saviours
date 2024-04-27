// Example for  rest operator

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); 

// Example of spread operator 
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
const combined = [...numbers, ...moreNumbers];
console.log(combined); 

const person = { name: 'ajay', age: 18};
const updatedPerson = { ...person, profession:'student' };
console.log(updatedPerson); 
