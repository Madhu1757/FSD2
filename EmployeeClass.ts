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
        console.log("Employee Name: " + this.name);
        console.log("Salary: ₹" + this.salary);
        console.log("Department: " + this.department);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        console.log("Department: " + this.department);
    }
}

let emp = new Employee("", 50000, "AI & DS");

console.log("Employee Name: " + emp.name); // Public - Accessible
// console.log(emp.salary);                // Error - Private
// console.log(emp.department);            // Error - Protected

emp.displayDetails();

let manager = new Manager("Rahul", 70000, "HR");
manager.showDepartment();