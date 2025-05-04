{
    // Union type
    type Developer = 'FrontendDeveloper' | 'BackendDeveloper';
    type ProblemSolver = 'ProblemSolver' | 'CodeReviewer';

    type CSEEngineer = Developer | ProblemSolver;

    const newDeveloper: Developer = 'FrontendDeveloper';

    type User = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }
    const user: User = {
        name: 'John Doe',
        age: 30,
        gender: 'male',
    };


    // Intersection type
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'FrontendDeveloper';
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'BackendDeveloper';
    }
    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['React', 'Node.js'],
        designation1: 'FrontendDeveloper',
        designation2: 'BackendDeveloper',
    }
}