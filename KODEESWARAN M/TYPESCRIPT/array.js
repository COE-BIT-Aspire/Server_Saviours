// Array
var emp_id = [1, 1001, 1002];
var emp_name = ['ajay', 'vijay', 'kumar'];
console.log(emp_id[0]);
console.log(emp_name[1]);
emp_id[0] = 1000;
emp_name[1] = 'prakash';
console.log("emp_id:");
for (var i = 0; i < emp_id.length; i++) {
    console.log(emp_id[i]);
}
console.log("emp_name:");
for (var _i = 0, emp_name_1 = emp_name; _i < emp_name_1.length; _i++) {
    var fruit = emp_name_1[_i];
    console.log(fruit);
}
// Tuple
var person_detail = ['kumar', 30, 'male'];
console.log(person_detail);
