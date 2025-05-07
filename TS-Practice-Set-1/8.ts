/*
Task 8: Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.
*/

type User = {
    name: string;
    email: string;
}
type Admin = {
    adminLevel: number;
}
type AdminUser = User & Admin;

const describeAdmin = (user: AdminUser): string => {
    return `Name: ${user.name}, Email: ${user.email}, Admin Level: ${user.adminLevel}`;
}

console.log(describeAdmin({
    name: 'mahfuz',
    email: 'm@gmail.com',
    adminLevel: 5
}));