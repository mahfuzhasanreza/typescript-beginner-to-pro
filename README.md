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