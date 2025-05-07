/*
Task 6: Spread and Rest Operators, Destructuring
Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions:

Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
*/

const getSum = (...num: number[]): number => {
    let sum: number = 0;
    num.forEach(n => {
        sum += n;
    })
    return sum;
}

console.log(getSum(5, 5, 1.5));