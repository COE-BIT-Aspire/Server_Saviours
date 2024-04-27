
interface Person {
    name: string;
    age: number;
    city?: string; 
}


let person: Person = {
    name: 'vijay',
    age: 50,
    city: 'Chennai'
};


console.log(person.name); 
console.log(person.age);
console.log(person.city); 

person.age = 52;
console.log(person.age); 

function displayPersonInfo(person: Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
    if (person.city) {
        console.log(`City: ${person.city}`);
    }
}
displayPersonInfo(person);
