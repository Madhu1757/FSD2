let numb: number = 1234;
let sum: number = 0;

while (numb > 0) {
    let digit = numb % 10;
    sum = sum + digit;
    numb = Math.floor(numb / 10);
}

console.log("Sum of digits = " + sum);