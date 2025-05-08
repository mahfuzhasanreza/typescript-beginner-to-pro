{
    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }

    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    class Teahcer extends Parent {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take for ${numOfClass}`);
        }
    }

    const student1 = new Student("Mahfuz", 20, "Dhaka");
    const teacher = new Teahcer("Mr T", 40, "Dhaka", "Professor")
    console.log(student1.name);
    console.log(teacher.designation);
}