class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public displayDetails(): void {
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
        console.log("Department: " + this.department);
    }
}

class Manager extends Employee {
    public showDepartment(): void {
        console.log("Department: " + this.department);
    }
}

let emp = new Employee("Madhu", 50000, "IT");

console.log("Employee Name: " + emp.name);   

emp.displayDetails();

let manager = new Manager("Rahul", 70000, "HR");
manager.showDepartment();