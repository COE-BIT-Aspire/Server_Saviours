 class AspireEmployee{
     empId: number;
     empName: string;
     constructor(){
         this.empId = 1;
         this.empName = "jai";
     }
     display(){
         console.log(this.empId + " " + this.empName);
     }
 }
 let aspireEmployee = new AspireEmployee();
 aspireEmployee.display();

var sam = ["ana", 3, "one", 3.23, true];


 class Employee{
     empId: number;
     empName: string;
     constructor(empId: number, empName: string){
         this.empId = empId;
         this.empName = empName;
     }
     show() {
         console.log(this.empId + " " + this.empName);
     }
 }

 class Manager extends Employee{
     constructor(empid: number, empname: string){
         super(empid, empname);
     }
 }

 let man1 = new Manager(2, "kavin");
 man1.show();
 

Spread operator
 let arr1 = [ 16,1,14,34];
 let arr2 = [ 42, 53, 66,89];
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