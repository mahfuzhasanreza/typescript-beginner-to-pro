{
    // generics with function
    const createArray = (param: string): string[] => {
        return [param];
    }
    const res1 = createArray('Bangladesh');

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }
    const resGeneric = createArrayWithGeneric<boolean>(true);
    
    type User = {
        id: number;
        name: string;
    }
    const resGenericObj = createArrayWithGeneric<User>({id: 2, name: 'mahfuz'})

    // array with tuple (generics)
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }
    const res3 = createArrayWithTuple<string, number>("Bangladesh", 123);
    const res4 = createArrayWithTuple<string, {name: string}>("Bangladesh", {name: 'mahfuz'});

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Learn C++';
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({name: 'mahfuz', email: 'm@gmail.com', devType: 'Frontend Dev'});
    const student2 = addCourseToStudent({name: 'hasan', email: 'h@gmail.com', hasWatch: 'Apple Watch'});

}