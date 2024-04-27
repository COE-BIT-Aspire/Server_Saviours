let myMap = new Map<string, number>();

myMap.set('product_one', 100);
myMap.set('product_two', 220);
myMap.set('product_three', 180);

console.log(myMap.get('product_one')); 

console.log(myMap.has('product_two')); 

myMap.delete('product_three');

myMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

console.log(myMap.size); 
