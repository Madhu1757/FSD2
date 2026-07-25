let array:number[]=[1,2,3,4,5];
let n: number=2;
let rotatedArray: number[]=[
    ...array.slice(n),
    ...array.slice(0,n)
];
console.log("Original Array:",array);
console.log("Rotated Array:",rotatedArray)