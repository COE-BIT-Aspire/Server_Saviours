// Array
let emp_id: number[] = [1,1001,1002];
let emp_name: string[] = ['ajay', 'vijay', 'kumar'];

console.log(emp_id[0]);
console.log(emp_name[1]); 


emp_id[0] = 1000;
emp_name[1] = 'prakash';


console.log("emp_id:");
for (let i = 0; i < emp_id.length; i++) {
    console.log(emp_id[i]);
}

console.log("emp_name:");
for (let fruit of emp_name) {
    console.log(fruit);
}

// Tuple
let person_detail : [string, number,string] = ['kumar', 30,'male'];
console.log(person_detail);