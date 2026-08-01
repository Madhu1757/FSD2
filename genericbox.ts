class Box<T> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }

    display(): void {
        console.log("Data: " + this.data);
    }
}

let numberBox = new Box<number>(100);
numberBox.display();

let stringBox = new Box<string>("Madhu");
stringBox.display();

let booleanBox = new Box<boolean>(true);
booleanBox.display();