# Typescript

## Types
JavaScript types in Typescript: Number, String, Boolean, Null, Undefined, Object, Symbol
Typescript owns types:  Interface, Void, Array, Tuple, Enum, Union, Intersection

## JS vs TS
JS: Dynamically typed language, By default - not OOP, No maintainable large-scale project
TS: Have type, OOP, Maintainable large-scale project

TS must be convert in JS, then run.
TS Code can be transpiled older version of JS (es6, es5, es3).

## Node Version Manager
- nvm: Node Version Manager
- nfm: Node Fast Manager

## TS configure
-node.js can not run TS code
-should call TS compiler (this convert it to JS), TS compiler: tsc

for TS configuration file: tsc --init

## Primitive Types and Non Primitive Types (Typescript)
- Typescript Primitive Types
  - string
  - number
  - boolean
  - null
  - undefined
  - symbol
  - bigint

<br>

- Typescript Non Primitive Types
  - Object
  - Array
  - Tuple
  - Enum
  - Union
  - Intersection

Can we find type on runtime from Typescript?
- No, types are erased at runtime. Typescript is a superset of JavaScript and it is used for static type checking.

## TS Implicit Data Types
- Implicit data types are the data types that are automatically assigned by the TypeScript compiler based on the value assigned to a variable.
Example: 
```typescript
let x = 10; // x is implicitly assigned the type number
let y = "Hello"; // y is implicitly assigned the type string
let z = true; // z is implicitly assigned the type boolean
```

## TS Explicit Data Types
- Explicit data types are the data types that are explicitly assigned to a variable by the programmer.
Example: 
```typescript
let x: number = 10; // x is explicitly assigned the type number
let y: string = "Hello"; // y is explicitly assigned the type string
let z: boolean = true; // z is explicitly assigned the type boolean
```

## Basic Types
- string
Example: 
```typescript
let name: string = "John Doe";
```
- number
Example: 
```typescript
let age: number = 30;
```
- boolean
Example: 
```typescript
let isMarried: boolean = false;
```
- null
Example: 
```typescript
let address: null = null;
```
- undefined
Example: 
```typescript
let phoneNumber: undefined = undefined;
```

- any
Example: 
```typescript
let data: any = "Hello"; // data can be of any type
data = 10; // data can be reassigned to a number
data = true; // data can be reassigned to a boolean

let data2;
data2 = "Hello"; // data2 can be of any type
data2 = 10; // data2 can be reassigned to a number
```
- array
Example: 
```typescript
let numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers
let names: string[] = ["John", "Jane", "Doe"]; // array of strings
let mixed: (string | number)[] = ["John", 30, "Doe"]; // array of mixed types
```
- tuple
Example: 
```typescript
let person: [string, number] = ["John", 30]; // tuple of string and number
let person2: [string, number, boolean] = ["John", 30, true]; // tuple of string, number and boolean
```

## object Type
- Implicit object type
Example: 
```typescript
let person = {
  name: "John",
  age: 30,
  isMarried: false
}; // person is implicitly assigned the type { name: string, age: number, isMarried: boolean }
```
- Explicit object type
Example: 
```typescript
let person: { name: string, age: number, isMarried: boolean } = {
  name: "John",
  age: 30,
  isMarried: false
}; // person is explicitly assigned the type { name: string, age: number, isMarried: boolean }
```
- Explicit object type with optional properties
Example: 
```typescript
let person: { name: string, age: number, isMarried?: boolean } = {
  name: "John",
  age: 30
}; // person is explicitly assigned the type { name: string, age: number, isMarried?: boolean }
```
- Literal object type
Example: 
```typescript
let person: { name: "John", age: 30, isMarried: false } = {
  name: "John",
  age: 30,
  isMarried: false
}; // person is explicitly assigned the type { name: "John", age: 30, isMarried: false }
```
- readonly object type
Example: 
```typescript
let person: { readonly name: string, age: number, isMarried: boolean } = {
  name: "John",
  age: 30,
  isMarried: false
}; // person is explicitly assigned the type { readonly name: string, age: number, isMarried: boolean }
```

# Functions in Typescript
- 2 types of function
  - normal function
  - arrow function

- normal function
Example: 
```typescript
function add(x: number, y: number): number {
  return x + y;
}
```
- arrow function
Example: 
```typescript
const add = (x: number, y: number): number => {
  return x + y;
}
```
- function with default parameter
Example: 
```typescript
function add(x: number, y: number = 10): number {
  return x + y;
}
```

## Method
- Method is a function that is defined inside a class or an object.
Example: 
```typescript
const person = {
  name: "Mahfuz",
  balance: 1000,
  addBalance(balance: number): string{
    return `Your balance is ${this.balance + balance}`;
  }
};

console.log(person.addBalance(100)); // Your balance is 1100
```

## Callback Function
- A callback function is a function that is passed as an argument to another function and is executed after the completion of that function.
Example: 
```typescript
const arr: number[] = [1, 2, 3, 4, 5];
const newArr: number[] = arr.map((item: number): number => item * item);
```

## Spread Operator
- The spread operator is used to expand an iterable (array, object, etc.) into its individual elements.
Example: 
```typescript
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const arr3: number[] = [...arr1, ...arr2]; // arr3 = [1, 2, 3, 4, 5, 6]

const bros1: string[] = ["Mahfuz", "Sakib"];
const bros2: string[] = ["Sakib", "Mahfuz"];
bros1.push(...bros2); // bros1 = ["Mahfuz", "Sakib", "Sakib", "Mahfuz"]
```
Example for Object:
```typescript
const mentors1 = {
  typescript: "Mahfuz",
  javascript: "Sakib",
}
const mentors2 = {
  react: "Sakib",
  node: "Mahfuz",
}
const mentors3 = {
  ...mentors1,
  ...mentors2,
} // mentors3 = { typescript: "Mahfuz", javascript: "Sakib", react: "Sakib", node: "Mahfuz" }
```

## Rest Operator
- The rest operator is used to collect all the remaining elements of an iterable (array, object, etc.) into a single array or object.
Example: 
```typescript
const greetFriends = (...friends: string[]) => {
  frineds.forEach((friend) => {
    console.log(`Hello ${friend}`);
  });
}
greetFriends("Mahfuz", "Sakib", "Shamim"); // Hello Mahfuz, Hello Sakib, Hello Shamim
```

## Destructuring
- Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.

- Object Destructuring
Example: 
```typescript
const person = {
  name: {
    firstName: "Mahfuz",
    lastName: "Hossain"
  }
  age: 30,
  isMarried: false
};
const { name: { firstName: fName, lastName }, age, isMarried } = person; // fName is name alias
```
- Array Destructuring
Example: 
```typescript
const friends = ["Mahfuz", "Sakib", "Shamim", "Shamim", "Sakib"];
const [firstFriend, secondFriend] = friends;
const [, , thirdFriend] = friends;
const [, , , ...restFriends] = friends;
```

## Type Alias
- Type alias is a way to create a new name for an existing type. It is used to give a type a new name.
- Type alias for Object
Example: 
```typescript
type Person = {
  name: string;
  age: number;
  isMarried?: boolean;
};
const person: Person = {
  name: "Mahfuz",
  age: 30,
  isMarried: false
}; // person is explicitly assigned the type Person
const person2: Person = {
  name: "Mahfuz",
  age: 30
}; // person2 is explicitly assigned the type Person
```
- Type alias for Normal Type
Example: 
```typescript
type UserName = string;
type IsStudent = boolean;
const userName: UserName = 'mahfuz';
const isStudent: IsStudent = true;
```

- Type alias for Function
Example: 
```typescript
type Add = (x: number, y: number) => number;
const add: Add = (x, y) => {
  return x + y;
}
```

## Union Type
- Union type is a way to define a type that can be one of several types. It is used to define a type that can be one of several types.
Example: 
```typescript
type Developer = 'Frontend' | 'Backend' | 'Fullstack';
type ProblemSolving = 'Easy' | 'Medium' | 'Hard';

const newDeveloper: Developer = 'Frontend';
const newProblemSolving: ProblemSolving = 'Easy';

type DeveloperType = Developer | ProblemSolving;
const newDeveloperType: DeveloperType = 'Frontend';
const newProblemSolvingType: DeveloperType = 'Easy';

type User = {
  name: string;
  age: number;
  gender: 'male' | 'female';
}
const user: User = {
  name: 'John Doe',
  age: 30,
  gender: 'male',
};
```
## Intersection Type
- Intersection type is a way to define a type that combines multiple types into one. It is used to define a type that can be one of several types.
Example: 
```typescript
type FrontendDeveloper = {
  skills: string[];
  designation1: 'Frontend Developer';
}
type BackendDeveloper = {
  skills: string[];
  designation2: 'Backend Developer';
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper: FullstackDeveloper = {
  skills: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
  designation1: 'Frontend Developer',
  designation2: 'Backend Developer'
};
```