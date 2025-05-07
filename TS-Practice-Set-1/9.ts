/*
Task 9: Optional Chaining
Objective: Use optional chaining with nested objects.

Instructions:

Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.
*/

type Employee = {
    name: string;
    address?: {
        city?: string;
        country?: string;
    };
};

const getEmployeeCity = (employee: Employee): string | undefined => {
    return employee.address?.city;
};