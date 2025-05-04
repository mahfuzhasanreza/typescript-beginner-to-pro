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
}