{
    // instance guard in oop:

    class Animal {
        constructor(public name: string, public species: string) { }
        makeSound() {
            console.log("I am making sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            console.log("I am Barking");
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMeaw() {
            console.log("I am Meawing");
        }
    }

    const dog = new Dog("Dog", "XYE");
    const cat = new Cat("Cat", "VVB");


    // smart way handle: 
    const isDog = (animal: Animal): animal is Dog =>{
        return animal instanceof Dog
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            (animal.makeBark());
        } else if (animal instanceof Cat) {
            (animal.makeMeaw());
        } else {
            animal.makeSound()
        }
    }
    getAnimal(dog)




}