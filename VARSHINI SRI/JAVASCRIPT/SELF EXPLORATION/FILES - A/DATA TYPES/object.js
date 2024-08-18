let  testObj  =  {};
console.log(typeof  testObj); 

testObj  =  {
	nr:  600,
	str:  "text"
};

console.log(testObj.nr);  
console.log(testObj.str);  

let  user1  =  {
    name:  "Calvin",
    surname:  "Hart",
    age:  66,
    email:  "CalvinMHart@teleworm.us"
};

let  user2  =  {
    name:  "Mateus",
    surname:  "Pinto",
    age:  21,
    email:  "MateusPinto@dayrep.com"
};

console.log(user1.name);  
console.log(user2.name);  
   
console.log(user1.age);  
user1.age  =  67;
console.log(user1.age);  
   
console.log(user2.phone);  
user2.phone  =  "904-399-7557";
console.log(user2.phone);  
delete user2.phone;
console.log(user2.phone); 
