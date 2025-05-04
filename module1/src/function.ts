{

// function

// normal function
// arrow function

// normal function
function add(a: number, b: number = 10): number {
  return a + b;
}

// arrow function
const addArrow = (a: number, b: number): number => {
  return a + b;
};


// method: function inside a class or object
const poorUser = {
    name: 'John',
    balance: 100,
    addBalance(balance: number): string {
        return `${this.name} has ${this.balance + balance}`; 
    }
};

// callback function
const arr: number[] = [1, 2, 3, 4, 5];
const newArr: number[] = arr.map((elem: number): number => elem*elem);


}