let str: string = "programming";

for (let i = 0; i < str.length; i++) {
    let count: number = 1;

    if (str[i] !== ' ') {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }

        console.log(str[i] + " = " + count);

        // Mark this character as counted
        str = str.replaceAll(str[i], ' ');
    }
}