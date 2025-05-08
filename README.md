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

# TypeScript Practice Set

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

## Type Guard using typeof & in
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

## Type Guard using instanceof
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