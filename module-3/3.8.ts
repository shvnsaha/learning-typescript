{
    // polymorphism:
    class Person{
        getSleep(){
            console.log("I am sleep 8 Hours");
        }
    }

    class Student extends Person{
        getSleep() {
            console.log("I am sleep 7 Hours");
        }
    }

    class Developer extends Person{
        getSleep() {
            console.log("I am sleep 6 Hours");
        }
    }


    const getSleepingHours = (param: Person) =>{
        param.getSleep()
    }

    const p1 = new Person();
    const s1 = new Student();
    const d1 = new Developer();


    getSleepingHours(p1);
    getSleepingHours(s1);
    getSleepingHours(d1);





    class Shape{
        getArea(): number{
            return 0
        }
    }
    class Circle extends Shape{
        constructor(public radius: number){
            super()
        };
        getArea(): number {
            return Math.PI*this.radius*this.radius;
        }
    }


    const space1 = new Shape();
    const circle1 = new Circle(10);

    console.log(space1.getArea());
    console.log(circle1.getArea());


}