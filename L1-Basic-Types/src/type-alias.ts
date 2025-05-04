{
    // Type Alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        address: string;
        contact?: string;
    }
    const student1: Student = {
        name: 'mahfuz',
        age: 30,
        gender: 'male',
        address: '123 Main St',
        contact: '123-456-7890',
    };
    const student2: Student = {
        name: 'sabbir',
        age: 25,
        gender: 'male',
        address: '456 Elm St',
    }

    type UserName = string;
    type IsStudent = boolean;
    const userName: UserName = 'mahfuz';
    const isStudent: IsStudent = true;

    // function
    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;
}