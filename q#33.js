/*
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

*/

const OrdinalNumber = (number) => {
    let numbers = [];
    numbers.push(number);

    for (let i = 0; i < numbers.length; i++) {
        const n = numbers[i];
        if (n == 1) {
            console.log("1st");
        } else if (n == 2) {
            console.log("2nd");
        } else if (n == 3) {
            console.log("3th");
        } else if (n == 4) {
            console.log("4th");
        } else if (n == 5) {
            console.log("5th");
        } else if (n == 6) {
            console.log("6th");
        } else if (n == 7) {
            console.log("7th");
        } else if (n == 8) {
            console.log("8th");
        } else if (n == 9) {
            console.log("9th");
        } else {
            console.log("Please enter number between 1 to 9.");
        }
    }
};

OrdinalNumber(3);
