// Example with let
function exampleLet() {
    if (true) {
        let name = 'ajay';
        console.log(name); 
    }
    // console.log(name); // Error: name is not defined
}
exampleLet();

// Example with const
function exampleConst() {
    const PI = 3.14;
    // PI = 3.14159; // Error: Assignment to constant variable
    console.log(PI); 

    const person = { name: 'sam' };
    person.name = 'sam curran'; 
    console.log(person); 

    const numbers = [1, 2, 3];
    numbers.push(4); 
    console.log(numbers); 
}
exampleConst();



// Example with var
function exampleVar() {
    if (true) {
        var actor_name = 'vijay';
        console.log(actor_name); //vijay
    }
    console.log(actor_name); //vijay
}
exampleVar();

