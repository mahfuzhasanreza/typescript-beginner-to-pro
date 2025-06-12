/**
Description: Write a function that takes a string | number and returns:

The length if it's a string
The number multiplied by 2 if it's a number
Function Signature:

function processValue(value: string | number): number
Example:

processValue("hello"); // Output: 5
processValue(10);      // Output: 20
*/

function processValue(value: string | number): number {
    if(typeof value === "string"){
        return value.length;
    }
    return value*2;
}

console.log(processValue("hello")); // Output: 5
console.log(processValue(10)); // Output: 20