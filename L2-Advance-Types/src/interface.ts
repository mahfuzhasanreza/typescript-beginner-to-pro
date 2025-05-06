{
    // **** Interface

    type User1 = {
        name: string;
        age: number;
    }

    // can not define in primitive
    // for object only
    interface User2 {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string }
    interface UserWithRole2 extends User2 {
        role: string;
    }
    
    const user1: UserWithRole2 = {
        name: "Mahfuz",
        age: 20,
        role: "student",
    };

    type rollNumber = number; // can define in primitive


    // **** Interface in array
    // JS --> object, array and function is also an object

    type Roll1 = number[];
    interface Roll2 {
        [index: number]: number
    }

    const rollNumber1: Roll2 = [1, 2, 3];

    type Add = (num1: number, num2: number) => number;
    interface Add2{
        (num1: number, num2: number) : number
    }

    const add: Add2 = (num1, num2) => num1 + num2;

}