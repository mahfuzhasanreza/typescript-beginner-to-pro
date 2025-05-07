/*
Task 15: Type Guards
Objective: Create custom type guards for more accurate type checking.

Instructions:

Write a function isString(value: unknown): value is string that checks if a value is a string.
Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string.
*/

function isString(value: unknown): value is string {
    return typeof value === 'string';
}

function printUpperCase(value: unknown): void {
    if (isString(value)) {
        console.log(value.toUpperCase());
    } else {
        console.log("Not a string");
    }
}

printUpperCase("hello");