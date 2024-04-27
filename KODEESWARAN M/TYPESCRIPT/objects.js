var person = {
    name: 'vijay',
    age: 50,
    city: 'Chennai'
};
console.log(person.name);
console.log(person.age);
console.log(person.city);
person.age = 52;
console.log(person.age);
function displayPersonInfo(person) {
    console.log("Name: ".concat(person.name, ", Age: ").concat(person.age));
    if (person.city) {
        console.log("City: ".concat(person.city));
    }
}
displayPersonInfo(person);
