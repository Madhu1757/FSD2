class Student {
    name: string;
    branch: string;

    static collegeName: string = "shri vishnu Engineering College";

    constructor(name: string, branch: string) {
        this.name = name;
        this.branch = branch;
    }

    displayDetails(): void {
        console.log("Name: " + this.name);
        console.log("Branch: " + this.branch);
    }

    static displayCollege(): void {
        console.log("College Name: " + Student.collegeName);
    }
}

let student1 = new Student("Madhu", "AI & DS");

student1.displayDetails();

Student.displayCollege();
export{}