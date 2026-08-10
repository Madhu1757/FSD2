let array: number[] = [1, 2, 3, 2, 4, 1, 5, 2];

let frequency: { [key: number]: number } = {};

for (let i = 0; i < array.length; i++) {
    let element: number = array[i];

    if (frequency[element]) {
        frequency[element]++;
    } else {
        frequency[element] = 1;
    }
}

console.log("Element Frequencies:");

for (let key in frequency) {
    console.log(key + " = " + frequency[key]);
}
export{};