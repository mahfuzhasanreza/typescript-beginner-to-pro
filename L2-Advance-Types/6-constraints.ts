{
    // constraints

    const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
        const course = 'Learn C++';
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({
        id: 1,
        name: 'mahfuz',
        email: 'm@gmail.com',
        devType: 'Frontend Dev'
    });
    const student2 = addCourseToStudent({
        id: 2,
        name: 'hasan',
        email: 'h@gmail.com',
        hasWatch: 'Apple Watch'
    });

}