{
    // ternary operator, optional chaining, nullish coalescing operator

    
    const age: number = 18;
    if(age >= 18) {
        console.log('Adult');
    } else {
        console.log('Not Adult');
    }
    // ternary operator
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log(isAdult);

    // nullish coalescing operator
    // when decision make based on null or undefined
    const isAuthenticated = ""; // here not null or undefined
    const user = isAuthenticated ?? 'Guest';
    const user2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({user}, {user2});

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }
    const user3: User = {
        name: 'Mahfuz',
        address: {
            city: 'dhaka',
            road: '102',
            presentAddress: 'Gulshan',
        }
    }
    const permanentAddress = user3?.address?.permanentAddress ?? 'No Permanent Address'; // optional chaining
    console.log({permanentAddress});
}