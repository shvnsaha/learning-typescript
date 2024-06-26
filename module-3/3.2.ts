{
    // inheritance 

    class Main{
        constructor(public name: string,public age: number,public address: string){
        }
        getSleep(numOfHours: number){
            console.log(`${this.name} sleep ${numOfHours}`);
        }
    }

    class Student extends Main{   
        constructor(name: string,age: number,address: string){
            super(name,age,address)
        } 
    }

    class Teacher extends Main{
        constructor(public name: string,public age: number,public address: string,public designation: string){
           super(name,age,address)
        }
        takeClass(numOfClass: number){
            console.log(`${this.name} take ${numOfClass}`);
        }
    }

    const student1 = new Student('Shovan',23,'Dhaka');
    student1.getSleep(10);

    const teacher1 = new Teacher("Anu",40,"Dhaka","assistant")
    console.log(teacher1.designation);
}