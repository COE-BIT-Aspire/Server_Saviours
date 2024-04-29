let arr1 = [ 1, 2, 3, 4];
let arr2 = [ 5, 6, 7, 8];
let copy_arr = [...arr1];
let new_arr = [...arr1, 9, 10];
let merged_arr = [...arr1, ...arr2];

console.log(arr1); 
console.log(arr2);
console.log(copy_arr);
console.log(new_arr);
console.log(merged_arr);

var employeeNames = [ 'Jai', 'Sri', 'Ram', 'Hari', 'San' ];
console.log("To find a employee working in our Company");
var empName= prompt('Please enter the name.');

if(employeeNames.includes('empName')){
    console.log("He is working in this company");
}
else{
    console.log("He is not our employ");
}
