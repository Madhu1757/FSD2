let start: number = 1;
let end: number = 20;

console.log("Prime numbers between " + start + " and " + end + " are:");

for (let i = start; i <= end; i++) {
    let isPrime: boolean = true;

    if (i < 2) {
        isPrime = false;
    } else {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(i);
    }
}