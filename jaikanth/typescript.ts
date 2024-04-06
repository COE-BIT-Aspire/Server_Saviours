 class AspireEmployee{
     empName: string;
     constructor(){
         this.empName = "jai";
     }
     display(){
         console.log("Welcome" +" " + this.empName);
     }
 }
 let aspireEmployee = new AspireEmployee();
 aspireEmployee.display();


 class Employee{
     empName: string;
     constructor(empName: string){
         this.empName = empName;
     }
     show() {
         console.log("Welcome" +" "+ this.empName);
     }
 }

 class Manager extends Employee{
     constructor(empname: string){
         super(empname);
     }
 }

 let man1 = new Manager("jai");
 man1.show();
 


 let arr1 = [ 1,2,3];
 let arr2 = [ 4,5,6];
 let copy_arr = [...arr1];
 let new_arr = [...arr1, 72, 83,78];
 let merged_arr = [...arr1, ...arr2];

 console.log(new_arr); 


 let set = new Set();
 set.add("2");
 set.add(true);
 set.add("kavin");
 set.add("kavin");

 let map1 = new Map();
 map1.set("ind", "India");
 map1.set("in", "indonesia");

map1.get();

 console.log(map1.keys());

 let sam=function(){
     console.log("hello");
 }

 let sam1 = () => {
     console.log("hello");
 }

 let n: string = "kavin";
 console.log(typeof(n));
