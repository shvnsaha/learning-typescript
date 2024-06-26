{
    //oop --> class
    class Animal{

        // name: string;
        // species: string;
        // sound: string;

        // constructor(name: string,species: string,sound: string){
        //     this.name = name;
        //     this.species =species;
        //     this.sound = sound
        // }

        //parameter properties:
        constructor(public name: string,public species: string,public sound: string){}

        makeSound(){
            console.log(`${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal('Dog','Big','Ghew');
    dog.makeSound()
}