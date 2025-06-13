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
- node.js can not run TS code
- should call TS compiler (this convert it to JS), TS compiler: tsc

for TS configuration file: tsc --init

## ts-node-dev
- ts-node-dev is a development tool that allows you to run TypeScript code directly without compiling it to JavaScript first.
- Install it globally using npm:
```bash
npm install -g ts-node-dev
```
- You can then run your TypeScript files using ts-node-dev:
```bash
ts-node-dev --respawn --transpile-only yourfile.ts
```
- There is also short alias tsnd for running ts-node-dev:
```bash
tsnd --respawn yourfile.ts
```
  
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
- Type alias is a way to create a new name for an existing type.

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

- added `npm i -g ts-node-dev` for running ts file
- `ts-node-dev --respawn --transpile-only server.ts` for running ts file

## Ternary Operator
- The ternary operator is a shorthand way to write an if-else statement. It is used to write a conditional statement in a single line.
Example: 
```typescript
const age: number = 18;
const isAdult: boolean = age >= 18 ? true : false; // isAdult is true

console.log(isAdult); // true
```

## Nullish Coalescing Operator
- The nullish coalescing operator is used to provide a default value for a variable if the variable is null or undefined.
Example: 
```typescript
const isAuthenticated = null;
const isLoggedIn = isAuthenticated ?? 'Guest'; // isLoggedIn is 'Guest'
console.log(isLoggedIn); // 'Guest'

const isAuthenticated2 = undefined;
const isLoggedIn2 = isAuthenticated2 ?? 'Guest'; // isLoggedIn2 is 'Guest'
console.log(isLoggedIn2); // 'Guest'

const isAuthenticated3 = false;
const isLoggedIn3 = isAuthenticated3 ?? 
'Guest'; // isLoggedIn3 is false
console.log(isLoggedIn3); // false

const isAuthenticated4 = "mahfuz";
const isLoggedIn4 = isAuthenticated4 ?? 'Guest'; // isLoggedIn4 is 'mahfuz'
console.log(isLoggedIn4); // 'mahfuz'
```

## Optional Chaining
- The optional chaining operator is used to access properties of an object that may be null or undefined. It is used to access properties of an object that may be null or undefined.
Example: 
```typescript
const person = {
  name: "Mahfuz",
  age: 30,
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};
const city = person?.address?.city; // city is 'Dhaka'
const country = person?.address?.country; // country is 'Bangladesh'
const state = person?.address?.state; // state is undefined
```

## Nullable Type
- Nullable type is a way to define a type that can be null or undefined. It is used to define a type that can be null or undefined.
Example: 
```typescript
const searchName = (value: string | null): string => {
  if (value === null) {
    return "No name found";
  }
  return value;
}
const name1 = searchName("Mahfuz"); // name1 is 'Mahfuz'
const name2 = searchName(null); // name2 is 'No name found'
```

## Unknown Type
- Unknown type is a way to define a type that can be any type. It is used to define a type that can be any type.
- It can be determine type at runtime. As like JS typeof operator.
Example: 
```typescript
const getSpeedInMeterPerSecond = (value: unknown) => {
  if(typeof value === 'number'){
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
  } else if(typeof value === 'string'){
      const [result, unit] = value.split(' ');
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
  } else {
      console.log(`Wrong input`);
  }
}

getSpeedInMeterPerSecond(1000); // `The speed is 277.77777777777777 ms^-1`
getSpeedInMeterPerSecond(`1000 kmh^-1`); // `The speed is 277.77777777777777 ms^-1`
getSpeedInMeterPerSecond(null); // `Wrong input`
```

## Never Type
- Never type is a way to define a type that can never occur. It is used to define a type that can never occur.
Example: 
```typescript
const throwError = (message: string): never => {
  throw new Error(message);
}

throwError("This is an error"); // This will throw an error

const infiniteLoop = (): never => {
  while (true) {
    console.log("Infinite loop");
  }
}
```

# L2: Advance Types

Now we will explore:
1. Type assertion/type narrowing: Sometimes TypeScript might be unsure of a variable's type. We'll learn how to give hints (type assertions) and refine types (narrowing) for better code safety.
2. Interface, type vs interface: Remember data types like numbers and strings? Interfaces are like blueprints for your objects, defining their structure. You'll learn the difference and how to use them effectively.
3. Introduction to generics: A generic is a feature that allows a function, class, or interface to work with different types of data.
4. Generics with Interfaces: Combine the power of interfaces and generics! Learn how to build functions that work with objects following specific blueprints (interfaces), keeping your code safe and reusable.
5. Function with generics: Craft functions that can handle different data types using generics. We'll show you how to define what types your functions can work with.
6. Constraints in typeScript: Sometimes, you might want to limit the types generics can work with. We'll explore constraints, like setting rules for what types are allowed in your generic functions.
7. Constraint using key of: Get even more control! Learn how to use a tool called "keyof" to define constraints based on an object's properties.
8. Asynchronous typeScript: Web development often involves waiting for things. We'll show you how to handle these situations (asynchronous) safely and clearly in TypeScript.
9. Conditional Types: Imagine types that change based on what happens in your program! Discover conditional types, a powerful feature for creating dynamic type structures.
10. Mapped types: Want to transform existing types into something new? Explore mapped types, a technique for reshaping types based on your defined rules.
11. Utility Types: TypeScript comes with built-in helpers (utility types) that offer common functionalities. We'll explore these helpers to make your code shorter and easier to maintain.

## Type Assertion
- Type assertion is a way to tell TypeScript to treat a variable as a specific type.
- It is used to override the type of a variable.
Example: 
```typescript
let value: unknown = "Hello";
let strLength: number = (value as string).length; // strLength is 5

type CustomError = {
  message: string
}
try{
        
} catch(error){
    console.log((error as CustomError).message);
}
```

## Type Narrowing
- Type narrowing is a way to refine the type of a variable based on certain conditions.
- It is used to narrow down the type of a variable based on certain conditions.
Example: 
```typescript
const kgToGm = (value: string | number): string | number | undefined => {
  if(typeof value === 'string'){
      const convertedValue = parseFloat(value)*1000;
      return `The converted value: ${convertedValue}`;
  } else if(typeof value === 'number'){
      return value*1000
  }
}

const result1 = kgToGm(1000) as number;
const result2 = kgToGm("1000") as string;
const result3 = kgToGm(true) as undefined;

console.log(result1); // 1000000
console.log(result2); // The converted value: 1000000
console.log(result3); // undefined
```

## Interface
- Interface is a way to define the structure of an object.
- It is not used to define the type of a variable or primitive type.

Example: 
```typescript
interface Person {
  name: string;
  age: number;
  isMarried?: boolean; // optional property
}
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

## Type vs Interface
- Type is a way to define the type of a variable or primitive type or object.
- Interface is a way to define the structure of an object.

Example: 
```typescript
type Person = {
  name: string;
  age: number;
  isMarried?: boolean; // optional property
}
const person: Person = {
  name: "Mahfuz",
  age: 30,
  isMarried: false
}; // person is explicitly assigned the type Person
const person2: Person = {
  name: "Mahfuz",
  age: 30
}; // person2 is explicitly assigned the type Person

type rollNumber = number;

const rollNumber: rollNumber = 123456; // rollNumber is explicitly assigned the type number
```
## Intersection and Extends
- Intersection is a way to combine multiple types into one.
- Extends is a way to inherit properties from one interface to another.
- Type can make interface by extending.
- Interface can make type by intersection.
Example: 
```typescript
type Student = {
  name: string;
  age: number;
  isMarried?: boolean; // optional property
}
type ClassRepresentative = {
  designation: string;
  salary: number;
}
type StudentClassRepresentative = Student & ClassRepresentative; // intersection of Student and ClassRepresentative
const student: StudentClassRepresentative = {
  name: "Mahfuz",
  age: 30,
  isMarried: false,
  designation: "Class Representative",
  salary: 100000
}; // student is explicitly assigned the type StudentClassRepresentative

interface Person {
  name: string;
  age: number;
  isMarried?: boolean; // optional property
}
interface Employee extends Person {
  designation: string;
  salary: number;
}
const employee: Employee = {
  name: "Mahfuz",
  age: 30,
  isMarried: false,
  designation: "Software Engineer",
  salary: 100000
}; // employee is explicitly assigned the type Employee
```

## Interface on Array
- Interface can be used on array.
- In JavaScript, array is an object.
Example: 
```typescript
type Roll1 = number[];

interface Roll {
  [index: number]: number;
}

const rollNumber: Roll = [1, 2, 3, 4, 5];
```

## Interface on Function
- Interface can be used on function.
- In JavaScript, function is an object.
Example: 
```typescript
type Add1 = (x: number, y: number) => number;

interface Add {
  (x: number, y: number): number;
}
const add: Add = (x, y) => {
  return x + y;
}
```

## Generics
- Generics is a way to define a type that can be used with different types of data.
Example: 
```typescript
type GenericArray<T> = Array<T>

const numbers: GenericArray<number> = [1, 2, 3, 4, 5];
const strings: GenericArray<string> = ["John", "Jane", "Doe"];
```

## Generics in Array of Objects
- Generics can be used in array of objects.
Example: 
```typescript
type GenericArray<T> = Array<T>

const user: GenericArray<{name: string, age: number}> = [
  {
    name: 'mahfuz',
    age: 100,
  },
  {
    name: 'hasan',
    age: 10,
  }
]
```

## Generic Tuple
- Generics can be used in tuple.
Example: 
```typescript
type GenericTuple<T, U> = [T, U]

const person: GenericTuple<string, number> = ["John", 30]; // tuple of string and number
const personWithID: GenericTuple<number, {name: string, age: number}> = [1, {name: "John", age: 30}]; // tuple of string and object
```

## Generic with Interface
- Generics can be used with interface.
Example: 
```typescript
interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  },
  smartWatch: T;
  bike?: X;
}

const poorDeveloper : Developer<{
  brand: string;
  model: string;
  display: string;
}> = {
  name: 'Mahfuz',
  computer: {
    brand: 'hp',
    model: 'pavilion',
    releaseYear: 2000,
  },
  smartWatch: {
    brand: 'Emilab',
    model: 'kw66',
    display: 'Oled'
  }
}

interface AppleWatch {
  brand: string;
  model: string;
  heartTrack: boolean;
  sleepTrack: boolean;
}
interface YamahaBike {
  model: string;
  engineCapacity: string;
}

const richDeveloper : Developer<AppleWatch, YamahaBike> = {
  name: 'Mahfuz',
  computer: {
    brand: 'hp',
    model: 'pavilion',
    releaseYear: 2000,
  },
  smartWatch: {
    brand: 'Apple',
    model: 'kw66',
    heartTrack: true,
    sleepTrack: true
  },
  bike: {
    model: 'Yamaha',
    engineCapacity: '100cc',
  }
}
```

## Generic with Function
- Generics can be used with function.
Example: 
```typescript
const createArray = (param: string): string[] => {
  return [param];
}
const res1 = createArray('Bangladesh');

const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
}
const resGeneric = createArrayWithGeneric<boolean>(true);

type User = {
  id: number;
  name: string;
}
const resGenericObj = createArrayWithGeneric<User>({id: 2, name: 'mahfuz'})
```

## Generic Array with Tuple
- Generics can be used with array of tuple.
Example: 
```typescript
const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
}
const res3 = createArrayWithTuple<string, number>("Bangladesh", 123);
const res4 = createArrayWithTuple<string, {name: string}>("Bangladesh", {name: 'mahfuz'});
```

## Constraints
- Constraints are used to limit the types that can be used with generics.
Example: 
```typescript
const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
  const course = 'Learn C++';
  return {
    ...student,
    course
  }
}
const student1 = addCourseToStudent({
  id: 1,
  name: 'mahfuz',
  email: 'm@gmail.com',
  devType: 'Frontend Dev'
});
const student2 = addCourseToStudent({
  id: 2,
  name: 'hasan',
  email: 'h@gmail.com',
  hasWatch: 'Apple Watch'
});
```

## keyof Operator
- The keyof operator is used to get the keys of an object as a union type.
Example: 
```typescript
type Vehicle = {
  bike: string;
  car: string;
  ship: string;
}
type ownerType = "bike" | "car" | "ship"; // manually
type Owner2 = keyof Vehicle;
```

## keyof with Generics Constraint
- The keyof operator can be used with generics constraint.
Example: 
```typescript
const user = {
  name: 'mahfuz',
  age: 20,
  address: 'syl'
}
const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
}
getPropertyValue(user, 'name');
```

## Asynchronous TypeScript
- Asynchronous TypeScript is a way to handle asynchronous operations in TypeScript.
Example: 
```typescript
// custom promise
const createPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "something";
    if(data){
      resolve(data);
    } else{
      reject('failed to load data');
    }
  })
}

// calling create promise function
const showData = async(): Promise<string> => {
  const data: string = await createPromise();
  return data;
}
showData();
```
- Data fetching from Server
Example: 
```typescript
// data from server
type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
const getTodo = async (): Promise<Todo> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data;
}

// Call and log the result
const showTodo = async () => {
  const todo = await getTodo();
  console.log(todo);
};
showTodo();
```

## Conditional Types
- Conditional types are a way to define a type based on a condition.
Example: 
```typescript
type a = null;
type b = undefined;

type x = a extends null ? true : false;
type y = a extends null ? true : b extends undefined ? undefined : any;
```
Example: 
```typescript
type Sheikh = {
  bike: string;
  car: string;
  ship: string;
}
type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
type hasShip = CheckVehicle<"ship">;
```

## Map in TypeScript
Example: 
```typescript
const arrayOfNumbers: number[] = [1, 4, 5];

// manually
const arrOfString: string[] = ['1', '4', '5'];
// using map
const arrOfString2: string[] = arrayOfNumbers.map(
    (number) => number.toString()
);
```

## Mapped Types
- Mapped types are a way to create new types based on existing types.
Example: 
```typescript
type AreaNumber = {
  height: number;
  width: number;
}

// manually
type AreaString = {
  height: string;
  width: string;
}
// using map
type AreaString2 = {
  [key in keyof AreaNumber]: string
}
```

## Lookup Types
- Lookup types are a way to create new types based on existing types.
Example: 
```typescript
type AreaNumber = {
  height: number;
  width: number;
}
type Height = AreaNumber["height"];
type Width = AreaNumber["width"];
```
Example: 
```typescript
type AreaString3<T> = {
  [key in keyof T]: T[key];
}
const area: AreaString3<{ height: string; width: number }> = {
  height: "100",
  width: 50,
}
```

## Utility Types
- Utility types are a way to create new types based on existing types.

- Pick Utility Type: Pick is a utility type that allows you to create a new type by picking specific properties from an existing type.
Example: 
```typescript
type Person = {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
}
type Name = Pick<Person, "name" | "age">;
```
- Omit Utility Type: Omit is a utility type that allows you to create a new type by omitting specific properties from an existing type.
Example: 
```typescript
type Person = {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
}
type Name = Omit<Person, "name" | "age">;
```

- Required Utility Type: Required is a utility type that makes all properties of a type required.
Example: 
```typescript
type Person = {
  name: string;
  age?: number;
  email?: string;
  contactNo?: string;
}
type RequiredPerson = Required<Person>;
```

- Partial Utility Type: Partial is a utility type that makes all properties of a type optional.
Example: 
```typescript
type Person = {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
}
type PartialPerson = Partial<Person>;
```

- Readonly Utility Type: Readonly is a utility type that makes all properties of a type readonly.
Example: 
```typescript
type Person = {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
}
type ReadonlyPerson = Readonly<Person>;
```

- Record Utility Type: Record is a utility type that creates a new type with specific properties and their types.
Example: 
```typescript
type MyObj = Record<string, number>;
const obj1: MyObj = {
  a: 1,
  b: 2,
  c: 3,
}

const emptyObj: Record<string, unknown> = {};
```

# TypeScript Practice Set - 1

### Task 1: Basic Data Types and First Program

**Objective**: Write a TypeScript program that outputs a welcome message.

**Instructions**:

- Create a TypeScript program.
- Print the following message to the console:
  > Hello World!

**Answer**:
```typescript
const message: string = "Hello World!";
console.log(message);
```

### Task 2: Functions, Optional, and Literal Types

**Objective**: Create a function with parameters and an optional literal type.

**Instructions**:

- Define a function that takes:
  - `name` (string)
  - `age` (number)
  - `role` (optional, with type `'admin' | 'user' | 'guest'`)
- The function should log these values or perform a basic action.

**Answer**:
```typescript
function greetUser(name: string, age: number, role?: 'admin' | 'user' | 'guest') {
  console.log(`Hello ${name}, you are ${age} years old.`);
  if (role) {
    console.log(`Your role is ${role}.`);
  }
}
greetUser("John", 25, "admin");
```

### Task 3: Object Types, Type Alias, & Literal Types

**Objective**: Define a structured `Person` object using Type Aliases.

**Instructions**:

- Define a `Person` type alias with properties for `Name`, `Address`, `Hair and Eye Color`, `Income and Expense`, `Hobbies`, `Family Members`, `Job`, `Skills`, `Marital Status`, and `Friends`.

**Answer**:
```typescript
type Person = {
  name: string;
  address: string;
  hairColor: string;
  eyeColor: string;
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: string[];
  job: string;
  skills: string[];
  maritalStatus: 'single' | 'married' | 'divorced';
  friends: string[];
};
```

### Task 4: Union and Intersection Types

**Objective**: Create union and intersection types using interfaces.

**Instructions**:

- Define interfaces `Book` and `Magazine`.
- Create:
- A type that is a **union** of `Book` and `Magazine`.
- A type that is an **intersection** of `Book` and `Magazine`.

**Answer**:
```typescript
interface Book {
  title: string;
  author: string;
  pages: number;
}

interface Magazine {
  title: string;
  issueNumber: number;
  monthly: boolean;
}

// Create a union type
type BookOrMagazine = Book | Magazine;

// Create an intersection type
type BookAndMagazine = Book & Magazine;
```

### Task 5: Function Type

**Objective**: Write a function that reverses a string.

**Instructions**:

- Write a function `reverseString` that:
- Takes a single string argument.
- Returns the string in reverse order.
- **Example**:
  - Input: `"hello"`
  - Output: `"olleh"`

**Answer**:
```typescript
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"
```

### Task 6: Spread and Rest Operators, Destructuring

**Objective**: Write a function that uses the rest operator for variable-length arguments.

**Instructions**:

- Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

**Answer**:
```typescript
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumNumbers(1, 2, 3, 4)); // Output: 10
```

### Task 7: Type Assertion and Narrowing

**Objective**: Write a function that behaves differently based on the input type.

**Instructions**:

- Create a function that accepts a parameter of type `string | number`.
- The function should:
  - Return the length if the input is a string.
  - Return the square if the input is a number.

**Answer**:
```typescript
function processInput(input: string | number): number {
  if (typeof input === 'string') {
    return input.length;
  } else {
    return input * input;
  }
}
console.log(processInput("hello")); // Output: 5
console.log(processInput(4)); // Output: 16
```

### Task 8: Intersection Types

**Objective**: Practice using intersection types.

**Instructions**:

- Create a type `AdminUser` that is an intersection of:
  - `User` with properties `name` and `email`
  - `Admin` with property `adminLevel`
- Write a function `describeAdmin(user: AdminUser): string` that returns a description of the admin user.

**Answer**:
```typescript
type User = {
  name: string;
  email: string;
};
type Admin = {
  adminLevel: number;
};
type AdminUser = User & Admin;

const describeAdmin = (user: AdminUser): string => {
  return `${user.name} (${user.email}) is an admin with level ${user.adminLevel}.`;
};

console.log(describeAdmin({
    name: 'mahfuz',
    email: 'm@gmail.com',
    adminLevel: 5
}));
```

### Task 9: Optional Chaining

**Objective**: Use optional chaining with nested objects.

**Instructions**:

- Write a function `getEmployeeCity(employee)` that safely retrieves the city of an employee from a nested object using optional chaining.

**Answer**:
```typescript
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
```

### Task 10: Nullish Coalescing

**Objective**: Handle null and undefined values using nullish coalescing.

**Instructions**:

- Write a function `getDisplayName(name: string | null | undefined): string` that returns `"Anonymous"` if `name` is null or undefined.

**Answer**:
```typescript
const getDisplayName = (name: string | null | undefined): string => {
  return name ?? "Anonymous";
};

console.log(getDisplayName(null)); // Output: "Anonymous"
```

### Task 11: Unknown Type

**Objective**: Handle different types with the `unknown` type.

**Instructions**:

- Write a function `processData(data: unknown)` that:
  - Checks if `data` is a string and returns the uppercased version.
  - If `data` is a number, returns the square of it.

**Answer**:
```typescript
const processData = (data: unknown): string | number => {
  if (typeof data === 'string') {
    return data.toUpperCase();
  } else if (typeof data === 'number') {
    return data * data;
  }
  return "Invalid data type";
};

console.log(processData("hello")); // Output: "HELLO"
console.log(processData(4)); // Output: 16
```

### Task 12: Never Type

**Objective**: Use the `never` type for functions that don’t return.

**Instructions**:

- Write a function `handleError` that:
  - Accepts a `message: string`.
  - Throws an error with the given message.
  - Use the `never` return type to indicate that this function never returns.

**Answer**:
```typescript
const handleError = (message: string): never => {
  throw new Error(message);
};

handleError("This is an error!"); // This will throw an error
```

### Task 13: Generics with Functions and Interfaces

**Objective**: Use generics to handle different types.

**Instructions**:

- Create a generic function that:
  - Accepts an array of any type.
  - Returns a new array with duplicate values removed.

**Answer**:
```typescript
function removeDuplicates<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
const strings = ["apple", "banana", "apple", "orange"];
const uniqueStrings = removeDuplicates(strings);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
console.log(uniqueStrings); // Output: ["apple", "banana", "orange"]
```

### Task 14: Asynchronous TypeScript and Type Aliases

**Objective**: Simulate an asynchronous operation with TypeScript.

**Instructions**:

- Write an asynchronous function that:
  - Simulates fetching user data (containing `name` and `age`).
  - Returns the data after a short delay.

**Answer**:
```typescript
type UserData = {
  name: string;
  age: number;
};

const fetchUserData = async (): Promise<UserData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Mahfuz", age: 30 });
    }, 1000);
  });
};
const displayUserData = async () => {
  const user = await fetchUserData();
  console.log(`Name: ${user.name}, Age: ${user.age}`);
};

displayUserData(); // Output: Name: Mahfuz, Age: 30
```

### Task 15: Type Guards

**Objective**: Create custom type guards for more accurate type checking.

**Instructions**:

- Write a function `isString(value: unknown): value is string` that checks if a value is a string.
- Use this in another function `printUpperCase(value: unknown): void` that prints the value in uppercase if it’s a string.

**Answer**:
```typescript
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

printUpperCase("hello"); // Output: "HELLO"
printUpperCase(123); // Output: "Not a string"
```

### Task 16: Utility Types and Keyof Constraints

**Objective**: Access object properties dynamically using `keyof`.

**Instructions**:

- Create a function that:
  - Takes an object and a key.
  - Returns the property value from the object based on the provided key.
  - Use `keyof` to constrain the key to valid properties of the object.

**Answer**:
```typescript
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const user = {
  id: 101,
  name: "mahfuz",
  active: true
};
const userName = getProperty(user, "name");
const userId = getProperty(user, "id");
const userActive = getProperty(user, "active");
```

---

# OOP in TypeScript
- OOP stands for Object Oriented Programming.

- In this section, you'll dive into the heart of Object-Oriented Programming (OOP). Here's what you'll explore:
1. Introduction of Object Oriented Programming: You'll learn what OOP is and how OOP principles help structure and maintain complex codebases.
2. Class and object: Classes serve as blueprints for creating objects, which are instances that encapsulate both state and behavior. You'll learn how to define classes with properties and methods, create objects from them, and understand why this pattern is crucial for building scalable and maintainable applications.
3. Inheritance in OOP: Continuing our exploration of Object-Oriented Programming, we will let talk about inheritance, one of the most powerful tools for code reuse. Inheritance allows a class to inherit properties and methods from another class, creating a parent-child relationship.
4. Type guard using typeof & in: When working with dynamic types, it's crucial to ensure that you're dealing with the expected type. TypeScript offers type guards to help with this. In this section, you'll explore how to use the typeof operator to check the type of a variable at runtime, providing a safe way to implement conditional logic based on variable types. 
5. Type guard using instance of: Building on your knowledge of type guards, this section introduces instanceof, a powerful operator that allows you to check whether an object is an instance of a specific class. This is particularly useful in OOP, where objects might belong to different classes in an inheritance hierarchy. 
6. Access modifiers: Access modifiers are a key concept in Object-Oriented Programming, allowing you to control the visibility of class properties and methods. In this section, you'll learn about the different access modifiers in TypeScript
7. Getter and setter: Take control of how your class properties are accessed and modified! You'll learn how to define getters and setters in TypeScript and explore their benefits
8. Statics in OOP: Static properties and methods belong to the class itself, not to individual instances. We'll explore the concept of static members in TypeScript, showing you how to declare and use them.
9. Polymorphism: Polymorphism is a fundamental concept in Object-Oriented Programming that allows different classes to be treated as if they are the same through a common interface or base class. In this section, you'll learn how to implement polymorphism in TypeScript.
10. Abstraction in OOP: Abstraction allows you to hide complex implementation details behind a simple interface, providing a cleaner and more focused interaction with code. In this section, you'll learn how to use abstract classes and interfaces in TypeScript to create high-level blueprints. 
11. Encapsulation in OOP: Encapsulation is the practice of restricting access to certain parts of a class, ensuring that internal details remain hidden from external code. We will delve into encapsulation in TypeScript, demonstrating how to use access modifiers, private properties, and other techniques to safeguard your code's internal state.

<br>
> With this knowledge, you can confidently build complex applications that are both maintainable and resilient. Keep practicing and experimenting with these concepts. The more you apply them, the more intuitive they will become!

<br>

## Introduction of Object Oriented Programming
- Object Oriented Programming (OOP) is a `programming paradigm` that uses objects and classes to structure code.

What is Paradigm?
- A paradigm is a way of thinking about and approaching problems. The style used to write and organize code.

## Some Paradigms in Programming
- Procedural Programming: Procedural programming is a programming paradigm that uses procedures or functions to structure code. It focuses on the sequence of actions to be performed. <br>
Example: 
```typescript
function add(a: number, b: number): number {
  return a + b;
}
const result = add(2, 3);
```
- Functional Programming: Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. <br>
Example: 
```typescript
const add = (a: number, b: number): number => a + b;
```
- Declarative Programming: Declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow. It focuses on what to do rather than how to do it. <br>
Example: 
```typescript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
```
- Object Oriented Programming: Object Oriented Programming is a programming paradigm that uses objects and classes to structure code. It focuses on the organization of code into reusable components. <br>
Example: 
```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const person = new Person("John", 30);
person.greet(); // Output: Hello, my name is John and I am 30 years old.
```
- Event Driven Programming: Event-driven programming is a programming paradigm that uses events to trigger actions. It focuses on the occurrence of events and the response to those events. <br>
Example: 
```typescript
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

## Building Blocks of OOP
- Inheritance
- Polymorphism
- Encapsulation
- Abstraction

## Class and Object
- Class is a blueprint for creating objects.
- Object is an instance of a class.

**Warning:** this keyword not work in arrow function.

Example: 
```typescript
class Person {
  name: string; // property
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() { // method
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("John", 30); // object
const person2 = new Person("Jane", 25); // object
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.
```

Using Parameter Properties:
```typescript
class Person {
  constructor(public name: string, public age: number) {} // parameter properties

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.
```

## Inheritance in OOP
- Inheritance is a way to create a new class that is based on an existing class.

Example: 
```typescript
class Animal {
  constructor(public name: string) {}

  makeSound(sound: string) {
    console.log(`${this.name} says ${sound}.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); // call the constructor of the parent class
  }
}
class Cat extends Animal {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
  makeSleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers", 2);
dog.makeSound("Woof"); // Output: Buddy says Woof.
cat.makeSound("Meow"); // Output: Whiskers says Meow.
cat.makeSleep(); // Output: Whiskers is sleeping.
```

## Type Guard or Narrowing using typeof & in
- Type guards are used to check the type of a variable at runtime.
- The `typeof` operator is used to check the type of a variable.
- The `in` operator is used to check if a property exists in an object.

Example: (using typeof)
```typescript
const add = (param1: string | number, param2: string | number): string | number => {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

console.log(add(2, 3));
console.log(add("5", 7));
```

Example: (using in)
```typescript
type User = {
  name: string;
  age: number;
};
type Admin = {
  name: string;
  age: number;
  role: string;
};
type UserOrAdmin = User | Admin;

const user: UserOrAdmin = {
  name: "John",
  age: 30,
  role: "admin"
};

const printUserInfo = (user: UserOrAdmin) => {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
  if ("role" in user) {
    console.log(`Role: ${user.role}`);
  } else {
    console.log("Role: User");
  }
};

printUserInfo(user);
```

## Type Guard or Narrowing using instanceof
- The `instanceof` operator is used to check if an object is an instance of a specific class.

Example: 
```typescript
class Animal {
  constructor(public name: string) {}
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}
class Cat extends Animal {
  meow() {
    console.log(`${this.name} says Meow!`);
  }
}

const animal: Animal = new Dog("Buddy");
const animal2: Animal = new Cat("Whiskers");
const animal3: Animal = new Animal("Generic Animal");

const makeSound = (animal: Animal) => {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  } else {
    console.log(`${animal.name} makes a sound.`);
  }
};
makeSound(animal); // Output: Buddy says Woof!
makeSound(animal2); // Output: Whiskers says Meow!
makeSound(animal3); // Output: Generic Animal makes a sound.
```

Example: (using is keyword)
```typescript
class Animal {
  constructor(public name: string) {}
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}
class Cat extends Animal {
  meow() {
    console.log(`${this.name} says Meow!`);
  }
}

const animal: Animal = new Dog("Buddy");
const animal2: Animal = new Cat("Whiskers");
const animal3: Animal = new Animal("Generic Animal");

const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).bark !== undefined;
};
const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).meow !== undefined;
};

const makeSound = (animal: Animal) => {
  if (isDog(animal)) {
    animal.bark();
  } else if (isCat(animal)) {
    animal.meow();
  } else {
    console.log(`${animal.name} makes a sound.`);
  }
};

makeSound(animal); // Output: Buddy says Woof!
makeSound(animal2); // Output: Whiskers says Meow!
makeSound(animal3); // Output: Generic Animal makes a sound.
```

## Access Modifiers
- Access modifiers are used to control the visibility of class properties and methods.
- There are three access modifiers in TypeScript:
  - public: The property or method is accessible from anywhere.
  - private: The property or method is only accessible within the class.
  - protected: The property or method is only accessible within the class and its subclasses.

readonly: The property is only accessible within the class and cannot be modified. readonly is not technically an access modifier, but a property modifier.

Convention for Access Modifiers:
- Public properties should not start with an underscore or hash.
- Private properties should start with an underscore (_).
- Protected properties should start with a hash (#).
- Public methods should not start with an underscore or hash.
- Private methods should start with an underscore (_).
- Protected methods should start with a hash (#).

Example: 
```typescript
class BankAccount {
  public readonly id: number; // public property
  public accountType: string; // public property
  private _balance: number; // private property
  protected accountHolder: string; // protected property

  constructor(id: number, accountType: string, _balance: number, accountHolder: string) {
    this.id = id;
    this.accountType = accountType;
    this._balance = _balance;
    this.accountHolder = accountHolder;
  }

  public deposit(amount: number) { // public method
    this._balance += amount;
  }
  public withdraw(amount: number) { // public method
    if (this._balance >= amount) {
      this._balance -= amount;
    } else {
      console.log("Insufficient Balance");
    }
  }
  public getBalance(): number { // public method
    return this._balance;
  }
  protected getAccountHolder(): string { // protected method
    return this.accountHolder;
  }
}

class SavingsAccount extends BankAccount {
  constructor(id: number, accountType: string, _balance: number, accountHolder: string) {
    super(id, accountType, _balance, accountHolder);
  }
  public getAccountHolderName(): string { // public method
    return this.getAccountHolder();
  }
}

const account = new BankAccount(1, "Savings", 1000, "John Doe");
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
// console.log(account._balance); // Error: Property '_balance' is private and only accessible within class 'BankAccount'.
// console.log(account.accountHolder); // Error: Property 'accountHolder' is protected and only accessible within class 'BankAccount' and its subclasses.
const savingsAccount = new SavingsAccount(2, "Savings", 2000, "Jane Doe");
savingsAccount.deposit(1000);
savingsAccount.withdraw(500);
console.log(savingsAccount.getBalance()); // Output: 2500
console.log(savingsAccount.getAccountHolderName()); // Output: Jane Doe
```
## Getter and Setter
- Getters and setters are special methods that allow you to access and modify private properties of a class.
- Getters are used to access the value of a private property.
- Setters are used to modify the value of a private property.
- Getters and setters are defined using the get and set keywords, respectively.

Example: 
```typescript
class BankAccount {
  private _balance: number; // private property

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  get getBalance(): number { // getter
    return this._balance;
  }

  set balance(amount: number) { // setter
    if (amount < 0) {
      console.log("Balance cannot be negative");
    } else {
      this._balance = amount;
    }
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance); // Output: 1000
account.balance = 2000;
console.log(account.getBalance); // Output: 2000
```

## Statics in OOP
- Statics are properties and methods that belong to the class itself, rather than to instances of the class.
- Static properties and methods are defined using the static keyword.
- Static properties and methods can be accessed using the class name, rather than an instance of the class.

Example: 
```typescript
class Counter {
  static count: number = 0;

  increment() {
    return (Counter.count = Counter.count + 1);
  }
  static decrement() {
    return Counter.count = Counter.count - 1;
  }
}

const instance1= new Counter();
const instance2 = new Counter();

console.log(instance1.increment()); // Output: 1
console.log(instance2.increment()); // Output: 2

console.log(Counter.decrement()); // Output: 1
console.log(Counter.decrement()); // Output: 0
```

## Polymorphism
- Polymorphism is the ability of different classes to be treated as instances of the same class through a common interface or base class.
- It allows methods to do different things based on the object it is acting upon, even if they share the same method name.
Example: 
```typescript
class Animal {
  makeSound() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Cat meows");
  }
}

const getAnimalSound = (animal: Animal) => {
  animal.makeSound();
};

const dog = new Dog();
const cat = new Cat();
getAnimalSound(dog); // Output: Dog barks
getAnimalSound(cat); // Output: Cat meows

// another example
class Shape {
  area(): number {
    return 0;
  }
}
class Circle extends Shape {
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

const calculateArea = (shape: Shape): number => {
  return shape.area();
};

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(calculateArea(circle)); // Output: 78.53981633974483
console.log(calculateArea(rectangle)); // Output: 24
```

## Abstraction in OOP
- Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object.
- It allows you to create a simplified model of a complex system, focusing on the relevant aspects while ignoring the unnecessary details.
- In TypeScript, abstraction can be achieved using abstract classes and interfaces.
Example: 
```typescript
// using abstract class
abstract class Shape {
  abstract area(): number; // abstract method
  abstract perimeter(): number; // abstract method
  render(): void {
    console.log(`Area: ${this.area()}, Perimeter: ${this.perimeter()}`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
circle.render(); // Output: Area: 78.53981633974483, Perimeter: 31.41592653589793
rectangle.render(); // Output: Area: 24, Perimeter: 20

// using interface
interface Shape {
  area(): number; // method signature
  perimeter(): number; // method signature
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}
const circle2 = new Circle(5);
const rectangle2 = new Rectangle(4, 6);
const shapes: Shape[] = [circle2, rectangle2];
shapes.forEach((shape) => {
  console.log(`Area: ${shape.area()}, Perimeter: ${shape.perimeter()}`);
});
// Output:
// Area: 78.53981633974483, Perimeter: 31.41592653589793
// Area: 24, Perimeter: 20
```

## Encapsulation in OOP
- Encapsulation is the practice of restricting access to certain parts of an object, ensuring that the internal state is protected from unintended interference and misuse.
- It allows you to bundle the data (properties) and methods (functions) that operate on that data into a single unit, known as a class.
  
Example: 
```typescript
class BankAccount {
  private _balance: number; // private property

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  deposit(amount: number): void { // public method
    if (amount > 0) {
      this._balance += amount;
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount: number): void { // public method
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    } else {
      console.log("Insufficient balance or invalid withdrawal amount.");
    }
  }

  getBalance(): number { // public method
    return this._balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
// account._balance = 2000; // Error: Property '_balance' is private and only accessible within class 'BankAccount'.
```

# TypeScript Practice Set - 2
### Task 1

**Description:**
Create a function that takes a `string` and an optional `boolean`.

* If the boolean is `true` or not provided, return the string in **uppercase**.
* If the boolean is `false`, return the string in **lowercase**.

**Function Signature:**

```ts
function formatString(input: string, toUpper?: boolean): string
```

**Example:**

```ts
formatString("Hello");          // Output: "HELLO"
formatString("Hello", true);   // Output: "HELLO"
formatString("Hello", false);  // Output: "hello"
```
**Answer:**
```typescript
function formatString(input: string, toUpper?: boolean): string {
    if(toUpper === false){
        return input.toLowerCase();
    }
    return input.toUpperCase();
}
console.log(formatString("Hello"));          // Output: "HELLO"
console.log(formatString("Hello", true));   // Output: "HELLO"
console.log(formatString("Hello", false));  // Output: "hello"
```

### Task 2

**Description:**
Create a function that filters an array of objects by the `rating` property, returning only items with a rating of **4 or more**.

**Function Signature:**

```ts
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]
```

**Example:**

```ts
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

filterByRating(books); 
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
```

**Answer:**
```typescript
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
```

### Task 3
**Description:**
Create a generic function that concatenates multiple arrays of the **same type** using rest parameters.

**Function Signature:**

```ts
function concatenateArrays<T>(...arrays: T[][]): T[]
```

**Example:**

```ts
concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
```

**Answer:**
```typescript
function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    for(let array of arrays){
        result = result.concat(array);
    }
    return result;
}

console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]
```

### Task 4

**Description:**

* Create a `Vehicle` class with private `make` and `year` properties and a `getInfo()` method.
* Create a `Car` class extending `Vehicle`, adding a private `model` property and a `getModel()` method.

**Example:**

```ts
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"
```

**Answer:**
```typescript
class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }

    public getInfo(): void{
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string){
        super(make, year);
        this.model = model;
    }

    public getModel(): void{
        console.log(`Model: ${this.model}`);
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"
```

### Task 5

**Description:**
Write a function that takes a `string | number` and returns:

* The **length** if it's a string
* The **number multiplied by 2** if it's a number

**Function Signature:**

```ts
function processValue(value: string | number): number
```

**Example:**

```ts
processValue("hello"); // Output: 5
processValue(10);      // Output: 20
```

**Answer:**
```ts
function processValue(value: string | number): number {
    if(typeof value === "string"){
        return value.length;
    }
    return value*2;
}

console.log(processValue("hello")); // Output: 5
console.log(processValue(10)); // Output: 20
```

### Task 6

**Description:**
Define an interface `Product` and create a function to find the product with the **highest price** in an array. If the array is empty, return `null`.

**Interface & Function Signature:**

```ts
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null
```

**Example:**

```ts
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

getMostExpensiveProduct(products);  
// Output: { name: "Bag", price: 50 }
```

**Answer:**
```typescript
interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length === 0){
        return null;
    }

    let maxProduct: Product = products[0];
    for(const product of products){
        if(maxProduct.price < product.price){
            maxProduct = product;
        }
    }
    return maxProduct;
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products)); // Output: { name: "Bag", price: 50 }
```

### Task 7

**Description:**

* Define an `enum Day` for the days of the week.
* Create a function that returns `"Weekday"` or `"Weekend"` based on the input day.

**Enum & Function Signature:**

```ts
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string
```

**Example:**

```ts
getDayType(Day.Monday);   // Output: "Weekday"
getDayType(Day.Sunday);   // Output: "Weekend"
```

**Answer:**
```typescript
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
  
function getDayType(day: Day): string {
    if(day === Day.Saturday || day === Day.Sunday){
        return "Weekend";
    }
    return "Weekday";
}

console.log(getDayType(Day.Monday)); // Output: "Weekday"
console.log(getDayType(Day.Sunday)); // Output: "Weekend"
```

### Task 8

**Description:**
Create an async function that:

* Returns the square of a number after 1 second
* Rejects if the number is negative

**Function Signature:**

```ts
async function squareAsync(n: number): Promise<number>
```

**Example:**

```ts
squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
```

**Answer:**
```typescript
async function squareAsync(n: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            if(n < 0){
                reject(new Error("Negative number not allowed"));
            } else{
                resolve(n * n);
            }
        }, 1000);
    })
}

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
```

## Some Interview Questions

1. What are some differences between interfaces and types in TypeScript?
2. What is the use of the `keyof` keyword in TypeScript? Provide an example.
3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.
4. What is the use of `enums` in TypeScript? Provide an example of a numeric and string enum.
5. What is type inference in TypeScript? Why is it helpful?
6. How does TypeScript help in improving code quality and project maintainability?
7. Provide an example of using **union** and **intersection** types in TypeScript.

---

# **1. TypeScript Showdown: Interface vs Type – What’s the Real Difference?**

TypeScript gives developers the best of both worlds: the flexibility of JavaScript and the safety of static typing. But with great power comes great decisions—like whether to use `interface` or `type` to define your objects.

At first glance, `interface` and `type` in TypeScript seem interchangeable. They can both describe the shape of an object, function signatures, or even complex union types. So, what's the difference? Why do both exist? And more importantly, **when should you choose one over the other?**

Let’s dive into **two critical differences** that can shape how you architect your next TypeScript project.

## 1. **Declaration Merging – The Interface Advantage**

One of the standout features of `interface` is **declaration merging**. This means if you declare the same interface name more than once, TypeScript automatically merges their properties.

### Example:

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// Merged version:
const user: User = {
  name: "Alice",
  age: 30,
};
```

This is **not possible** with `type`. If you try to redefine a type with the same name, you’ll get a duplicate identifier error.

### 🚫 Using `type`:

```ts
type User = {
  name: string;
};

type User = {
  age: number;
}; // ❌ Error: Duplicate identifier 'User'
```

**Use case:** Declaration merging is particularly useful when working with third-party libraries or extending existing types without modifying original definitions.

## 2. **Complex Type Composition – The Type Alias Power**

When it comes to **creating union or intersection types**, `type` is more flexible and powerful than `interface`.

### ✅ With `type`:

```ts
type Admin = {
  role: "admin";
};

type RegularUser = {
  role: "user";
};

type User = Admin | RegularUser;
```

You can even combine primitives, tuples, and conditional types—all of which are **not** possible with `interface`.

### ❌ With `interface`:

```ts
interface Admin {
  role: "admin";
}

interface RegularUser {
  role: "user";
}

// interface User = Admin | RegularUser; // ❌ Interfaces can’t do this
```

**Use case:** If you're working with **unions**, **tuples**, or **conditional types**, `type` is your go-to tool.

## So, Which One Should You Use?

* Use **`interface`** when you want to define object shapes, especially when you expect extensions or declaration merging.
* Use **`type`** when you're composing multiple types, working with unions/intersections, or creating utility types.

In practice, many teams use both. And that's okay—TypeScript is flexible enough to let you mix and match wisely.

## Final Thought

Think of `interface` as your structured blueprint and `type` as your versatile building block. Knowing when and how to use them can significantly impact the readability, maintainability, and scalability of your TypeScript codebase.

---

# 2. Understanding `keyof` in TypeScript: Unlocking the Power of Type-Safe Programming

When working with TypeScript, one of the most powerful tools you can use to write flexible, type-safe code is the `keyof` keyword. It might seem simple at first glance, but `keyof` unlocks a whole new level of type safety and developer productivity—especially when you're dealing with dynamic data structures like forms, APIs, or reusable functions.

## What is `keyof`?

The `keyof` keyword in TypeScript is a **type operator** that returns a union of the **keys of a given object type**.

In simple terms:

```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// Result: "name" | "age"
```

Here, `PersonKeys` becomes a union of the literal types `"name"` and `"age"`—the keys of the `Person` object. This is incredibly useful when you want to **restrict values to only valid keys** of an object type.

## Why is `keyof` Useful?

Let’s say you're building a utility function that reads a value from an object by key. Without `keyof`, you might accidentally pass an invalid key. But with `keyof`, TypeScript helps you catch mistakes *before* runtime.

### Example: A Safe Object Property Getter

```ts
type User = {
  id: number;
  username: string;
  isAdmin: boolean;
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  id: 1,
  username: "mahfuz",
  isAdmin: true,
};

// Works perfectly:
const username = getProperty(user, "username"); // type is string

// TypeScript error:
// const invalid = getProperty(user, "email"); // ❌ Argument of type '"email"' is not assignable
```

Here, `K extends keyof T` ensures that `key` must be one of the keys of the object `T`. This prevents runtime errors due to accessing undefined properties.

## Common Use Cases of `keyof`

* **Dynamic forms:** Use `keyof` to map field names safely.
* **API response validation:** Enforce keys that match an expected interface.
* **Refactoring helpers:** Create generic functions for logging, updating, or cloning objects.

## Final Thoughts

The `keyof` keyword isn’t just syntactic sugar—it’s a guardrail for writing reliable and maintainable code. Whether you’re building enterprise-level apps or learning TypeScript fundamentals, mastering `keyof` can save you from countless bugs and type mismatches.

So the next time you're working with object types, ask yourself:

> *“Can `keyof` make this code safer or smarter?”*

Most likely, it can.

---

# 3. Mastering TypeScript: Demystifying `any`, `unknown`, and `never`

TypeScript is a powerful superset of JavaScript that brings **static typing** to your code, helping you catch errors before runtime. But with this power comes responsibility—especially when dealing with special types like `any`, `unknown`, and `never`. These types may seem similar at a glance but serve **distinct and critical purposes** in a robust TypeScript codebase.

In this section, we’ll break down the differences between `any`, `unknown`, and `never`—and when to use (or avoid) each one.

## 1. `any` — The “Opt-out” Type

### What it is:

`any` disables type checking entirely for a variable. It's like saying: *"I don’t care what type this is—just trust me."*

```ts
let value: any;

value = 5;
value = "hello";
value = { x: 1 };
```

You can call any method on an `any` variable, access any property, and assign it to any other type.

### Why it's risky:

Using `any` means giving up all of TypeScript’s safety features. Errors that should be caught during development will surface at runtime instead.

```ts
value.notAFunction(); // ❌ No error from TypeScript, but crashes at runtime
```

### When to use:

* Migrating JavaScript to TypeScript (temporarily)
* Interacting with third-party libraries without types
* Quick prototyping (but should be removed later)

## 2. `unknown` — The “Safe `any`”

### What it is:

`unknown` is like `any`, but **TypeScript forces you to do a type check** before you use it.

```ts
let input: unknown = "hello";

if (typeof input === "string") {
  console.log(input.toUpperCase()); // ✅ Safe
}
```

Unlike `any`, you **can’t** use or assign `unknown` without narrowing its type.

```ts
input.trim(); // ❌ Error: Object is of type 'unknown'
```

### Why it’s better than `any`:

It maintains flexibility **without sacrificing type safety**. This is ideal when you’re dealing with user input or data from external sources.

### When to use:

* Accepting dynamic or external input (e.g., from APIs)
* Building type-safe wrapper functions
* Replacing `any` in most scenarios

## 3. `never` — The Impossible Type

### What it is:

`never` represents values that **never occur**. It’s often used:

* As the return type of functions that **throw errors or never return**
* In exhaustive checks for **discriminated unions**

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

```ts
type Shape = { kind: "circle" } | { kind: "square" };

function handleShape(shape: Shape) {
  if (shape.kind === "circle") {
    // ...
  } else if (shape.kind === "square") {
    // ...
  } else {
    const _exhaustiveCheck: never = shape; // ✅ Ensures all cases are handled
  }
}
```

### Why it’s powerful:

It enforces **completeness and correctness** in code, especially in pattern matching and switch cases.

### When to use:

* Indicating unreachable code
* Handling exhaustive checks
* Returning from functions that **never finish normally**

## Quick Summary Table

| Type      | Flexibility | Type Safety | Common Use Case                       |
| --------- | ----------- | ----------- | ------------------------------------- |
| `any`     | ✅ High      | ❌ None      | Prototyping, temp migration           |
| `unknown` | ✅ High      | ✅ Enforced  | APIs, dynamic inputs, safer `any`     |
| `never`   | ❌ N/A       | ✅ Absolute  | Exhaustive checks, throwing functions |

## Final Thoughts

Choosing between `any`, `unknown`, and `never` is not just about syntax—it’s about **intention and discipline**. `any` might feel like freedom, but it comes at the cost of reliability. `unknown` helps you write **resilient code**, and `never` ensures **impossible states stay impossible**.

Use them wisely, and you'll level up your TypeScript skills—and your entire codebase.

---

# 4. Understanding Enums in TypeScript: Why & How to Use Them

Enums, short for **enumerations**, are one of TypeScript’s powerful features that provide a way to **define a set of named constants**. They make your code **more readable, maintainable, and expressive**, especially when you're working with a fixed set of values — like user roles, status codes, or color themes.

Let’s break down why enums are useful and explore both **numeric** and **string** enums with practical examples.

### Why Use Enums in TypeScript?

Enums allow developers to:

1. **Avoid magic numbers or strings** in code.
2. **Group related constants** under a single umbrella.
3. **Improve code readability** and reduce the chance of errors.
4. Ensure **type-safety** — TypeScript will complain if you try to use an invalid enum value.

Imagine you're building a task management app. Without enums, you might have code like this:

```ts
function getTaskStatus(status: string) {
  if (status === "pending") {
    return "Waiting to start";
  } else if (status === "in_progress") {
    return "Work in progress";
  } else if (status === "done") {
    return "Completed";
  }
  return "Unknown";
}
```

This works — but is error-prone and messy. A typo like `"inprogress"` would silently fail. Enums fix this.

### Example 1: Numeric Enums

TypeScript assigns numeric values to enums by default, starting from 0.

```ts
enum TaskStatus {
  Pending,      // 0
  InProgress,   // 1
  Done          // 2
}

function getTaskStatus(status: TaskStatus) {
  switch (status) {
    case TaskStatus.Pending:
      return "Waiting to start";
    case TaskStatus.InProgress:
      return "Work in progress";
    case TaskStatus.Done:
      return "Completed";
    default:
      return "Unknown";
  }
}

console.log(getTaskStatus(TaskStatus.InProgress)); // Work in progress
```

Pro tip: You can customize the starting value if needed:

```ts
enum TaskStatus {
  Pending = 1,
  InProgress = 2,
  Done = 3
}
```

### Example 2: String Enums

String enums are useful when you need readable and meaningful values, especially useful in debugging or when data needs to be serialized (e.g., sent over an API).

```ts
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

function getPermissions(role: UserRole): string[] {
  switch (role) {
    case UserRole.Admin:
      return ["create", "edit", "delete", "view"];
    case UserRole.Editor:
      return ["edit", "view"];
    case UserRole.Viewer:
      return ["view"];
    default:
      return [];
  }
}

console.log(getPermissions(UserRole.Editor)); // [ 'edit', 'view' ]
```

### Numeric vs. String Enums: When to Use What?

| Type        | Use When You Need...                                            |
| ----------- | --------------------------------------------------------------- |
| **Numeric** | Performance and compactness (especially in memory-limited apps) |
| **String**  | Human-readable values and clarity (especially for APIs, logs)   |

### Final Thoughts

Enums are an excellent tool in your TypeScript toolbox. They eliminate the risk of typos, organize your constants, and make your code more expressive.

Whether you use **numeric enums for performance** or **string enums for clarity**, leveraging enums is a best practice that elevates your TypeScript codebase to a more professional and maintainable level.

*Pro Tip:* Always give your enums meaningful names and group them logically. And remember — enums are not just for UI states or roles. Use them anywhere constants repeat or represent a set of options.

---

# 5. What is Type Inference in TypeScript? Why Is It Helpful?

TypeScript is widely loved for bringing type safety to JavaScript, helping developers catch errors before runtime. But one of its most powerful — yet often overlooked — features is **type inference**. If you're new to TypeScript or just curious about how it works behind the scenes, this concept is a game-changer.

### What is Type Inference in TypeScript?

**Type inference** is the ability of TypeScript to **automatically detect and assign a type** to a variable, function return, or expression **without you explicitly stating it**.

In simpler terms, if you write:

```ts
let name = "Mahfuz";
```

TypeScript automatically understands that `name` is a `string`, even though you didn’t write `let name: string = "Mahfuz";`.

It does this by analyzing the value assigned and guessing the most appropriate type. This is called **"implicit typing."**

#### Where Type Inference Happens:

1. **Variable Declarations**:

   ```ts
   let age = 25; // inferred as number
   ```
2. **Function Return Types**:

   ```ts
   function greet() {
     return "Hello";
   }
   // return type inferred as string
   ```
3. **Array Literals**:

   ```ts
   let colors = ["red", "green", "blue"];
   // inferred as string[]
   ```

### Why Is Type Inference Helpful?

Type inference is more than just a convenience — it’s a **developer productivity booster** and a **safety net**.

#### 1. Cleaner Code, Less Repetition

Type inference reduces the need for repetitive type annotations.

```ts
// Instead of this:
let count: number = 42;

// You can just write:
let count = 42;
```

Less boilerplate = cleaner, more readable code.

#### 2. Type Safety Without the Noise

Even without explicit types, TypeScript still protects you:

```ts
let isReady = true;
// isReady is now a boolean

isReady = "yes"; // ❌ Error: Type 'string' is not assignable to type 'boolean'
```

This ensures your code is safe, even when you're not writing types manually.

#### 3. Smarter Autocomplete and IntelliSense

Thanks to inference, your editor (like VSCode) can provide smart suggestions, documentation, and error detection — even when you didn’t define types yourself.

This improves your **development speed** and reduces bugs caused by wrong assumptions.

#### 4. Balances Flexibility and Control

You can **let TypeScript infer** where it makes sense and **override it with explicit types** when needed — for clarity, readability, or strict enforcement.

```ts
// Type inferred as any[]
let items = [];

// Better with explicit type
let items: string[] = [];
```

### Final Thoughts

Type inference in TypeScript is like having a smart assistant: it quietly works in the background, understands your intentions, and saves you time — all while keeping your code safe.

If you're writing TypeScript and not taking advantage of type inference, you're missing out on one of the best parts of the language. It’s not about writing more types — it’s about writing **better, safer, cleaner code** with less effort.

**Embrace the power of inference. Your future self will thank you.**

---

# 6. How TypeScript Elevates Code Quality and Boosts Project Maintainability

In today’s fast-paced software development landscape, writing clean, scalable, and maintainable code is not a luxury—it’s a necessity. As applications grow in complexity, the limitations of traditional JavaScript become more evident. That’s where **TypeScript**, a superset of JavaScript developed by Microsoft, enters the scene.

TypeScript offers powerful tools for developers to write better code and manage large codebases with ease. In this blog post, we’ll dive deep into two critical ways TypeScript enhances **code quality** and **project maintainability**.

## 1. **Static Typing: Catch Errors Early, Code with Confidence**

One of TypeScript’s core features is **static type checking**. This means that it checks your code for type-related errors at **compile time**, not at runtime.

### Why this matters:

* **Early Error Detection**: JavaScript is dynamically typed, which means a lot of bugs are discovered only when the application is running. TypeScript, on the other hand, flags issues like calling a method on `undefined`, passing the wrong argument type, or accessing non-existent properties—**before** you ever run the code.

* **Intelligent Tooling**: With clear type definitions, editors like VS Code can offer **autocomplete, type inference, and inline documentation**. This drastically improves the developer experience and productivity.

* **Code Predictability**: Knowing what types of data functions expect and return makes it easier to understand what the code does—especially when revisiting it after weeks or months.

> *Example:*

```ts
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
```

Calling this function with a string like `calculateTotal("10", 2)` will immediately show an error, preventing a potentially disastrous runtime bug.

## 2. **Improved Project Maintainability: Scale Without Fear**

As projects evolve and teams grow, maintaining a codebase becomes increasingly difficult. TypeScript helps mitigate these challenges through features that promote long-term maintainability.

### How TypeScript helps:

* **Self-Documenting Code**: Type annotations act as a form of documentation. Anyone reading a function or class knows exactly what types of inputs and outputs are expected—without needing to refer to separate docs.

* **Refactoring Made Safe**: In a JavaScript project, renaming a variable or updating a function signature can break things silently. TypeScript’s static analysis ensures that all affected code is updated or flagged—**reducing regression bugs**.

* **Modular Architecture**: With TypeScript interfaces, enums, and type aliases, developers are encouraged to write **modular, reusable components**. This enforces a structure and reduces coupling between components.

* **Long-Term Collaboration**: Teams can onboard new members faster. With clear types, well-defined contracts between modules, and fewer hidden behaviors, new developers can make changes confidently without breaking existing features.

> *Imagine working on a codebase with 200,000+ lines of code. TypeScript provides a safety net that ensures one developer’s changes don’t cause another team’s feature to crash unexpectedly.*

## Final Thoughts

JavaScript will always be essential for the web, but as projects scale, **TypeScript is the upgrade** your team needs for long-term success. It offers the **type safety, clarity, and tooling support** that modern development demands.

By catching errors early and improving code organization, TypeScript doesn’t just make your code better—it makes your project **future-proof**.

If you're building a serious web application, it might be time to ask yourself:
*Why write JavaScript when you can write TypeScript?*

**Ready to level up?**
Try migrating a small module in your project to TypeScript and experience the difference. The future of maintainable code is strongly typed.

---

# 7. Mastering Union and Intersection Types in TypeScript: Real-World Examples

When working with TypeScript, understanding how to leverage its powerful **type system** can significantly improve your code’s readability, maintainability, and safety. Two advanced but essential tools in this system are **Union** and **Intersection** types. These allow you to write more expressive types that better model your data. Let’s explore both with real-world examples that you can use today.

## 1. Union Types (`|`) – Flexibility in Input

**Union types** allow a variable to be one of several types. This is incredibly useful when handling flexible input formats, such as APIs or UI components.

### Example: Accepting Multiple Input Formats

Imagine you're building a form that accepts either an email or a phone number:

```ts
type Email = { type: "email"; email: string };
type Phone = { type: "phone"; phoneNumber: string };

type ContactInfo = Email | Phone;

function sendVerification(contact: ContactInfo) {
  if (contact.type === "email") {
    console.log(`Sending email to ${contact.email}`);
  } else {
    console.log(`Sending SMS to ${contact.phoneNumber}`);
  }
}

// Usage
sendVerification({ type: "email", email: "user@example.com" });
sendVerification({ type: "phone", phoneNumber: "+880123456789" });
```

### Why It's Useful

* Enables **type-safe branching** logic.
* Easily scalable: you can add `type: "whatsapp"` or `type: "telegram"` later.
* Forces the caller to specify the `type`, reducing ambiguity.

## 2. Intersection Types (`&`) – Combining Powers

**Intersection types** allow you to combine multiple types into one. It’s like saying: “This type must fulfill all these roles.”

### Example: Merging Roles in a System

Let’s say you’re designing a system with users who can have **multiple roles**, like `Admin` and `Auditor`.

```ts
type Admin = {
  canDeleteUsers: boolean;
};

type Auditor = {
  canViewLogs: boolean;
};

type AdminAuditor = Admin & Auditor;

const superUser: AdminAuditor = {
  canDeleteUsers: true,
  canViewLogs: true
};

function showPermissions(user: AdminAuditor) {
  if (user.canDeleteUsers) console.log("Can delete users");
  if (user.canViewLogs) console.log("Can view logs");
}

showPermissions(superUser);
```

### Why It's Useful

* Promotes **composition over inheritance**.
* Helps in building **role-based access systems**.
* Ensures **all required properties are present**.

## Final Thoughts

* Use **Union types** when a value can be **one of many options**.
* Use **Intersection types** when a value needs to **fulfill multiple roles**.

Understanding and using these tools lets you write **more expressive and safer code** — something every developer should aim for. TypeScript isn’t just about preventing bugs; it’s about writing code that clearly communicates your intent to others and your future self.

Happy typing!