/*
Task 14: Asynchronous TypeScript and Type Aliases
Objective: Simulate an asynchronous operation with TypeScript.

Instructions:

Write an asynchronous function that:
Simulates fetching user data (containing name and age).
Returns the data after a short delay.
*/

type UserData = {
    name: string;
    age: number;
};

const fetchUserData = async (): Promise<UserData> => {
    return new Promise<UserData>((resolve) => {
        setTimeout(() => {
            resolve({ name: "Mahfuz", age: 30 });
        }, 1000);
    });
};
const displayUserData = async () => {
    const user = await fetchUserData();
    console.log(`Name: ${user.name}, Age: ${user.age}`);
};

displayUserData();