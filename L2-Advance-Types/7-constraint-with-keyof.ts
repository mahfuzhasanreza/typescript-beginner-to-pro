{
    // keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }
    type ownerType = "bike" | "car" | "ship"; // manually
    type Owner2 = keyof Vehicle;

    // constraint using keyof operator
    const user = {
        name: 'mahfuz',
        age: 20,
        address: 'syl'
    }
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }
    getPropertyValue(user, 'name');
}