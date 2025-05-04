{
    // spread operator
    // rest operator
    // destructuring

    // spread operator
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

    const bros1: string[] = ['a', 'b', 'c'];
    const bros2: string[] = ['d', 'e', 'f'];
    // bros1.push(bros2); // error
    bros1.push(...bros2); // ['a', 'b', 'c', 'd', 'e', 'f']

    const mentors1 = {
        typescript: 'mahfuz',
        javascript: 'shamim',
        python: 'sabbir',
    }
    const mentors2 = {
        react: 'shamim',
        nodejs: 'sabbir',
        c: 'mahfuz',
    }
    const mentorList = {
        ...mentors1,
        ...mentors2,
    }

    // rest operator
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hello ${friend}`));
    }
    greetFriends("shamim", "sabbir", "mahfuz");

    // destructuring
    
    // object destructuring
    const user = {
        id: 1,
        name: {
            firstName: 'John',
            middleName: 'Doe',
            lastName: 'Smith',
        },
        age: 30,
        address: "123 Main St",
    }
    const { id, name: { firstName: fName, lastName }, age } = user;

    // array destructuring
    const myFriends = ['shamim', 'sabbir', 'mahfuz'];
    const [a, b, bestFriend] = myFriends;
    const [,, bestFriend2] = myFriends;
    const [,, bestFriend3, ...rest] = myFriends;
}