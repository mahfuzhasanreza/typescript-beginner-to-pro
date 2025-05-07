/*
Task 11: Unknown Type
Objective: Handle different types with the unknown type.

Instructions:

Write a function processData(data: unknown) that:
Checks if data is a string and returns the uppercased version.
If data is a number, returns the square of it.
*/

const processData = (data: unknown): string | number => {
    if(typeof data === 'string'){
        return (data as string).toUpperCase();
    } else if(typeof data === 'number'){
        return data*data;
    }
    return 'no valid format';
}

console.log(processData(5));