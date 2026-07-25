class Student {
    name: string;
    rollNo: number;
    course: string;

    constructor(name: string, rollNo: number, course: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }

    display(): void {
        console.log("Student Details");
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollNo);
        console.log("Course: " + this.course);
    }
}

let student1 = new Student("Madhu", 71, "B.Tech AI & DS");

student1.display();