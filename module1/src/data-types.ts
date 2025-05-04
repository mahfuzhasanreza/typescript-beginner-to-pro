// basic data type

// string
let firstName: string = "mahfuz";
// number
let roll: number = 123;
// boolean
let isStudent: boolean = true;
// undefined
let age: undefined = undefined;
// null
let address: null = null;


let d; // any type, like JS
d = 123;
d = "mahfuz";

// array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["mahfuz", "rahman", "sami"];
let mixed: (string | number)[] = [1, 2, "mahfuz", "rahman"];

// tuple : array --> order --> type of values
let coordinates: [number, number] = [1, 5];
let student: [number, string, boolean] = [123, "mahfuz", true];


// Object , Optional and Literal Types

// Implicit Object Type
const user = {
    firstName: 'mahfuz',
    middleName: 'hasan',
    lastName: 'reza',
}

// Explicit Object Type
const user2: {
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
} = {
    firstName: 'mahfuz',
    lastName: 'reza',
}

// Literal Types
const user3: {
    firstName: 'mahfuz'; // literal type
    lastName: 'reza';
} = {
    firstName: 'mahfuz',
    lastName: 'reza',
}

// readonly
const user4: {
    readonly firstName: string; // readonly type
    lastName: string;
} = {
    firstName: 'mahfuz',
    lastName: 'reza',
}