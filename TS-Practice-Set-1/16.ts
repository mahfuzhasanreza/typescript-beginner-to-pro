/*
Task 16: Utility Types and Keyof Constraints
Objective: Access object properties dynamically using keyof.

Instructions:

Create a function that:
Takes an object and a key.
Returns the property value from the object based on the provided key.
Use keyof to constrain the key to valid properties of the object.
*/
{
    const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
        return obj[key];
    };

    const user = {
        id: 101,
        name: "Mahfuz",
        active: true
    };
    console.log(getProperty(user, "name"));
}