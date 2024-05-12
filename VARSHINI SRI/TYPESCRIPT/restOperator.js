"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(empId, empName, dept) {
        if (dept === void 0) { dept = "HR"; }
        this.empId = empId;
        this.empName = empName;
        this.dept = dept;
    }
    Employee.prototype.displayEmployeeRecord = function () {
        console.log("EmpId: ", this.empId);
        console.log("EmpName: ", this.empName);
        console.log("Dept: ", this.dept);
    };
    Employee.prototype.totalSalary = function () {
        var salary = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            salary[_i] = arguments[_i];
        }
        var total = 0;
        salary.forEach(function (num) { return total += num; });
        return total;
    };
    return Employee;
}());
var empDetail = new Employee(1, "varshini");
empDetail.displayEmployeeRecord();
console.log(empDetail.totalSalary(10000, 12000, 13000, 15000));
