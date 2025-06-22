class Employee{
    private empId: number;
    private empName: String;
    private dept: String;
    constructor(empId: number, empName: String, dept="HR"){
        this.empId = empId;
        this.empName = empName;
        this.dept = dept;
    }
    displayEmployeeRecord():void{
        console.log("EmpId: ",this.empId);
        console.log("EmpName: ",this.empName);
        console.log("Dept: ",this.dept);
    }
    totalSalary(...salary:number[]):number{
        let total = 0;
        salary.forEach((num)=>total+=num);
        return total;
    }
}
let empDetail = new Employee(1,"varshini");
empDetail.displayEmployeeRecord();
console.log(empDetail.totalSalary(10000,12000,13000,15000));