let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);

console.log(mySet.has(2)); 


mySet.delete(3);


mySet.forEach((value) => {
    console.log(value);
});

console.log(mySet.size); 
