# টাইপস্ক্রিপ্ট

## টাইপ
জাভাস্ক্রিপ্ট টাইপস্ক্রিপ্টে টাইপ: নাম্বার, স্ট্রিং, বুলিয়ান, নাল, আনডিফাইন্ড, অবজেক্ট, সিম্বল
টাইপস্ক্রিপ্টের নিজস্ব টাইপ: ইন্টারফেস, ভয়েড, অ্যারে, টাপল, এনাম, ইউনিয়ন, ইন্টারসেকশন

## জেএস বনাম টিএস
জেএস: ডায়নামিক্যালি টাইপড ল্যাঙ্গুয়েজ, ডিফল্টভাবে - ওওপি নয়, বড় স্কেল প্রজেক্ট মেইনটেইন করা যায় না
টিএস: টাইপ আছে, ওওপি, বড় স্কেল প্রজেক্ট মেইনটেইন করা যায়

টিএস কোড অবশ্যই জেএসে কনভার্ট করতে হবে, তারপর রান করতে হবে।
টিএস কোড পুরানো ভার্সনের জেএসে (es6, es5, es3) ট্রান্সপাইল করা যায়।

## নোড ভার্সন ম্যানেজার
- nvm: নোড ভার্সন ম্যানেজার
- nfm: নোড ফাস্ট ম্যানেজার

## টিএস কনফিগার
- node.js টিএস কোড রান করতে পারে না
- টিএস কম্পাইলার কল করতে হবে (এটি জেএসে কনভার্ট করে), টিএস কম্পাইলার: tsc

টিএস কনফিগারেশন ফাইলের জন্য: tsc --init

## প্রিমিটিভ টাইপ এবং নন প্রিমিটিভ টাইপ (টাইপস্ক্রিপ্ট)
- টাইপস্ক্রিপ্ট প্রিমিটিভ টাইপ
  - string
  - number
  - boolean
  - null
  - undefined
  - symbol
  - bigint

- টাইপস্ক্রিপ্ট নন প্রিমিটিভ টাইপ
  - Object
  - Array
  - Tuple
  - Enum
  - Union
  - Intersection

টাইপস্ক্রিপ্ট থেকে রানটাইমে টাইপ খুঁজে পাওয়া যায়?
- না, রানটাইমে টাইপ মুছে যায়। টাইপস্ক্রিপ্ট জাভাস্ক্রিপ্টের একটি সুপারসেট এবং এটি স্ট্যাটিক টাইপ চেকিং এর জন্য ব্যবহৃত হয়। 

## টিএস ইমপ্লিসিট ডাটা টাইপ
- ইমপ্লিসিট ডাটা টাইপ হল সেই ডাটা টাইপ যা টাইপস্ক্রিপ্ট কম্পাইলার স্বয়ংক্রিয়ভাবে একটি ভেরিয়েবলে অ্যাসাইন করে।
উদাহরণ: 
```typescript
let x = 10; // x ইমপ্লিসিটলি নাম্বার টাইপ অ্যাসাইন করা হয়েছে
let y = "Hello"; // y ইমপ্লিসিটলি স্ট্রিং টাইপ অ্যাসাইন করা হয়েছে
let z = true; // z ইমপ্লিসিটলি বুলিয়ান টাইপ অ্যাসাইন করা হয়েছে
```

## টিএস এক্সপ্লিসিট ডাটা টাইপ
- এক্সপ্লিসিট ডাটা টাইপ হল সেই ডাটা টাইপ যা প্রোগ্রামার দ্বারা একটি ভেরিয়েবলে স্পষ্টভাবে অ্যাসাইন করা হয়।
উদাহরণ: 
```typescript
let x: number = 10; // x এক্সপ্লিসিটলি নাম্বার টাইপ অ্যাসাইন করা হয়েছে
let y: string = "Hello"; // y এক্সপ্লিসিটলি স্ট্রিং টাইপ অ্যাসাইন করা হয়েছে
let z: boolean = true; // z এক্সপ্লিসিটলি বুলিয়ান টাইপ অ্যাসাইন করা হয়েছে
```

## বেসিক টাইপ
- string
উদাহরণ: 
```typescript
let name: string = "John Doe";
```
- number
উদাহরণ: 
```typescript
let age: number = 30;
```
- boolean
উদাহরণ: 
```typescript
let isMarried: boolean = false;
```
- null
উদাহরণ: 
```typescript
let address: null = null;
```
- undefined
উদাহরণ: 
```typescript
let phoneNumber: undefined = undefined;
```

- any
উদাহরণ: 
```typescript
let data: any = "Hello"; // data যেকোনো টাইপ হতে পারে
data = 10; // data নাম্বারে রিঅ্যাসাইন করা যাবে
data = true; // data বুলিয়ানে রিঅ্যাসাইন করা যাবে

let data2;
data2 = "Hello"; // data2 যেকোনো টাইপ হতে পারে
data2 = 10; // data2 নাম্বারে রিঅ্যাসাইন করা যাবে
```
- array
উদাহরণ: 
```typescript
let numbers: number[] = [1, 2, 3, 4, 5]; // নাম্বারের অ্যারে
let names: string[] = ["John", "Jane", "Doe"]; // স্ট্রিং এর অ্যারে
let mixed: (string | number)[] = ["John", 30, "Doe"]; // মিশ্র টাইপের অ্যারে
```
- tuple
উদাহরণ: 
```typescript
let person: [string, number] = ["John", 30]; // স্ট্রিং এবং নাম্বারের টাপল
let person2: [string, number, boolean] = ["John", 30, true]; // স্ট্রিং, নাম্বার এবং বুলিয়ানের টাপল
```

## অবজেক্ট টাইপ
- ইমপ্লিসিট অবজেক্ট টাইপ
উদাহরণ: 
```typescript
let person = {
  name: "John",
  age: 30,
  isMarried: false
}; // person ইমপ্লিসিটলি { name: string, age: number, isMarried: boolean } টাইপ অ্যাসাইন করা হয়েছে
```
- এক্সপ্লিসিট অবজেক্ট টাইপ
উদাহরণ: 
```typescript
let person: { name: string, age: number, isMarried: boolean } = {
  name: "John",
  age: 30,
  isMarried: false
}; // person এক্সপ্লিসিটলি { name: string, age: number, isMarried: boolean } টাইপ অ্যাসাইন করা হয়েছে
```
- অপশনাল প্রপার্টি সহ এক্সপ্লিসিট অবজেক্ট টাইপ
উদাহরণ: 
```typescript
let person: { name: string, age: number, isMarried?: boolean } = {
  name: "John",
  age: 30
}; // person এক্সপ্লিসিটলি { name: string, age: number, isMarried?: boolean } টাইপ অ্যাসাইন করা হয়েছে
```
- লিটারাল অবজেক্ট টাইপ
উদাহরণ: 
```typescript
let person: { name: "John", age: 30, isMarried: false } = {
  name: "John",
  age: 30,
  isMarried: false
}; // person এক্সপ্লিসিটলি { name: "John", age: 30, isMarried: false } টাইপ অ্যাসাইন করা হয়েছে
```
- রিডঅনলি অবজেক্ট টাইপ
উদাহরণ: 
```typescript
let person: { readonly name: string, age: number, isMarried: boolean } = {
  name: "John",
  age: 30,
  isMarried: false
}; // person এক্সপ্লিসিটলি { readonly name: string, age: number, isMarried: boolean } টাইপ অ্যাসাইন করা হয়েছে
```

# টাইপস্ক্রিপ্টে ফাংশন
- ২ ধরনের ফাংশন
  - নরমাল ফাংশন
  - অ্যারো ফাংশন

- নরমাল ফাংশন
উদাহরণ: 
```typescript
function add(x: number, y: number): number {
  return x + y;
}
```
- অ্যারো ফাংশন
উদাহরণ: 
```typescript
const add = (x: number, y: number): number => {
  return x + y;
}
```
- ডিফল্ট প্যারামিটার সহ ফাংশন
উদাহরণ: 
```typescript
function add(x: number, y: number = 10): number {
  return x + y;
}
``` 

## মেথড
- মেথড হল একটি ফাংশন যা একটি ক্লাস বা অবজেক্টের ভিতরে ডিফাইন করা হয়।
উদাহরণ: 
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

## কলব্যাক ফাংশন
- কলব্যাক ফাংশন হল একটি ফাংশন যা অন্য একটি ফাংশনের আর্গুমেন্ট হিসেবে পাস করা হয় এবং সেই ফাংশন সম্পন্ন হওয়ার পর এক্সিকিউট হয়।
উদাহরণ: 
```typescript
const arr: number[] = [1, 2, 3, 4, 5];
const newArr: number[] = arr.map((item: number): number => item * item);
```

## স্প্রেড অপারেটর
- স্প্রেড অপারেটর একটি ইটারেবল (অ্যারে, অবজেক্ট ইত্যাদি) কে তার পৃথক এলিমেন্টে বিস্তার করতে ব্যবহৃত হয়।
উদাহরণ: 
```typescript
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const arr3: number[] = [...arr1, ...arr2]; // arr3 = [1, 2, 3, 4, 5, 6]

const bros1: string[] = ["Mahfuz", "Sakib"];
const bros2: string[] = ["Sakib", "Mahfuz"];
bros1.push(...bros2); // bros1 = ["Mahfuz", "Sakib", "Sakib", "Mahfuz"]
```
অবজেক্টের উদাহরণ:
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

## রেস্ট অপারেটর
- রেস্ট অপারেটর একটি ইটারেবল (অ্যারে, অবজেক্ট ইত্যাদি) এর বাকি সব এলিমেন্টকে একটি অ্যারে বা অবজেক্টে সংগ্রহ করতে ব্যবহৃত হয়।
উদাহরণ: 
```typescript
const greetFriends = (...friends: string[]) => {
  frineds.forEach((friend) => {
    console.log(`Hello ${friend}`);
  });
}
greetFriends("Mahfuz", "Sakib", "Shamim"); // Hello Mahfuz, Hello Sakib, Hello Shamim
``` 

## ডিস্ট্রাকচারিং
- ডিস্ট্রাকচারিং হল একটি সিনট্যাক্স যা অ্যারে থেকে ভ্যালু বা অবজেক্ট থেকে প্রপার্টি আলাদা ভেরিয়েবলে আনপ্যাক করতে দেয়।

- অবজেক্ট ডিস্ট্রাকচারিং
উদাহরণ: 
```typescript
const person = {
  name: {
    firstName: "Mahfuz",
    lastName: "Hossain"
  }
  age: 30,
  isMarried: false
};
const { name: { firstName: fName, lastName }, age, isMarried } = person; // fName হল name এর এলিয়াস
```
- অ্যারে ডিস্ট্রাকচারিং
উদাহরণ: 
```typescript
const friends = ["Mahfuz", "Sakib", "Shamim", "Shamim", "Sakib"];
const [firstFriend, secondFriend] = friends;
const [, , thirdFriend] = friends;
const [, , , ...restFriends] = friends;
```

## টাইপ এলিয়াস
- টাইপ এলিয়াস হল একটি বিদ্যমান টাইপের জন্য নতুন নাম তৈরি করার উপায়।

- অবজেক্টের জন্য টাইপ এলিয়াস
উদাহরণ: 
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
}; // person এক্সপ্লিসিটলি Person টাইপ অ্যাসাইন করা হয়েছে
const person2: Person = {
  name: "Mahfuz",
  age: 30
}; // person2 এক্সপ্লিসিটলি Person টাইপ অ্যাসাইন করা হয়েছে
```

- নরমাল টাইপের জন্য টাইপ এলিয়াস
উদাহরণ: 
```typescript
type UserName = string;
type IsStudent = boolean;
const userName: UserName = 'mahfuz';
const isStudent: IsStudent = true;
```

- ফাংশনের জন্য টাইপ এলিয়াস
উদাহরণ: 
```typescript
type Add = (x: number, y: number) => number;
const add: Add = (x, y) => {
  return x + y;
}
``` 

## ইউনিয়ন টাইপ
- ইউনিয়ন টাইপ হল একটি টাইপ যা একাধিক টাইপের মধ্যে একটি হতে পারে। এটি একাধিক টাইপের মধ্যে একটি টাইপ ডিফাইন করতে ব্যবহৃত হয়।
উদাহরণ: 
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

## ইন্টারসেকশন টাইপ
- ইন্টারসেকশন টাইপ হল একটি টাইপ যা একাধিক টাইপকে একটি টাইপে একত্রিত করে। এটি একাধিক টাইপের মধ্যে একটি টাইপ ডিফাইন করতে ব্যবহৃত হয়।
উদাহরণ: 
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

- `npm i -g ts-node-dev` টাইপস্ক্রিপ্ট ফাইল রান করার জন্য
- `ts-node-dev --respawn --transpile-only server.ts` টাইপস্ক্রিপ্ট ফাইল রান করার জন্য

## টারনারি অপারেটর
- টারনারি অপারেটর হল if-else স্টেটমেন্ট লেখার একটি সংক্ষিপ্ত উপায়। এটি একটি লাইনে কন্ডিশনাল স্টেটমেন্ট লেখার জন্য ব্যবহৃত হয়।
উদাহরণ: 
```typescript
const age: number = 18;
const isAdult: boolean = age >= 18 ? true : false; // isAdult হল true

console.log(isAdult); // true
``` 