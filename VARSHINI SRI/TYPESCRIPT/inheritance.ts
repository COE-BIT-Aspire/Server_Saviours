class Employee{
    empId: number=0;
    empName: String="";
    constructor(empId: number, empName: String){
        this.empId = empId;
        this.empName = empName;
    }
}
class Manager extends Employee{
    constructor(empId: number, empName: String){
        super(empId,empName);
    }
}
let manager = new Manager(1,"Varshini");