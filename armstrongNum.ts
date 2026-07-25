let number: number = 153;
let original: number = number;
let sum: number = 0;

while (number > 0) {
    let digit: number = number % 10;
    sum = sum + (digit * digit * digit);
    number = Math.floor(number / 10);
}

if (sum === original) {
    console.log(original + " is an Armstrong Number");
} else {
    console.log(original + " is not an Armstrong Number");
}