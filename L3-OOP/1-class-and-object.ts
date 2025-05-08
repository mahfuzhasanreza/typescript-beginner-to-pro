{
    // oop - class

    class Animal {
        public name: string; // property
        // public species: string;
        public sound: string;



        constructor(name: string, public species: string, sound: string){
            this.name = name;
            // this.species = species; // using parameter properties
            this.sound = sound;
        }

        // this keyword not work in arrow function

        makeSound(){ // method
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("Germany Dog", "dog", "Ghew Ghew");
    dog.makeSound();

}