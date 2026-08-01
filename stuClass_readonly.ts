class Student {
    readonly studentId: number;
    name: string;
    branch: string;

    constructor(studentId: number, name: string, branch: string) {
        this.studentId = studentId;
        this.name = name;
        this.branch = branch;
    }

    displayDetails(): void {
        console.log("Student ID: " + this.studentId);
        console.log("Name: " + this.name);
        console.log("Branch: " + this.branch);
    }
}

let student = new Student(101, "Madhu", "AI & DS");

student.displayDetails();

