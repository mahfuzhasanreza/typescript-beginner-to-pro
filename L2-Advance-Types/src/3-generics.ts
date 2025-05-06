{
    // generic type

    type GenericArray<T> = Array<T>

    // const rollNumber: number[] = [3, 4, 5];
    // const rollNumber: Array<number> = [3, 4, 5];
    const rollNumber: GenericArray<number> = [3, 4, 5];

    // const mentors: string[] = ['Mahfuz', 'Hasan'];
    // const mentors: Array<string> = ['Mahfuz', 'Hasan'];
    const mentors: GenericArray<string> = ['Mahfuz', 'Hasan'];
    
    // const boolArray: boolean[] = [true, false, true];
    // const boolArray: Array<boolean> = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    // Array of Object by using Generic
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

    // generic tuple
    type GenericTuple<X, Y> = [X, Y];

    // const person: [string, string] = ['Mahfuz', 'Mr Y'];
    const person: GenericTuple<string, string> = ['Mahfuz', 'Mr Y'];
    const userWithID: GenericTuple<number, {name: string, email: string}> = [12, {name: 'mahfuz', email: 'm@gmail.com'}];
}