{
    // utility types

    // Pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }
    type Name = Pick<Person, "name" | "age">;

    // Omit
    type ContactInfo = Omit<Person, "name" | "age">;

    // Required
    type PersonRequired = Required<Person>;

    // Partial
    type PersonPartial = Partial<Person>;

    // Readonly
    type PersonReadonly = Readonly<Person>;

    // Record
    type MyObj = Record<string, number>

    const obj1: MyObj = {
        a: 1,
        b: 2,
        c: 3,
    }

    const emptyObj: Record<string, unknown> = {};
}