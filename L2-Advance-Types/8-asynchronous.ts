{
    // promise

    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "something";
            if (data) {
                resolve(data);
            } else {
                reject('failed to load data');
            }
        })
    }
    // calling create promise function
    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        return data;
    }
    showData();

    
    // data from server
    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }
    const getTodo = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    }
    
    // Call and log the result
    const showTodo = async () => {
        const todo = await getTodo();
        console.log(todo);
    };
    showTodo();
}