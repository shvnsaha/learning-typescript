{
    // abstraction: interface abstract class:

    // idea
    interface Vehicle1 {
        startEngine(): void
        stopEngine(): void
        move() : void
    }


    // real implementation
    class Car implements Vehicle1{
       startEngine(): void {
         console.log("STart Car");  
       }
       stopEngine(): void {
           console.log("Stop engine");
       }
       move(): void {
           console.log("Move");
       }
       test(){
        console.log("Test");
       }
    }

    const toyotaCar = new Car();
    (toyotaCar.startEngine());



    // abstract class

    // idea
    abstract class Vehicle2{
       abstract  startEngine() : void
       abstract stopEngine(): void
       abstract move(): void 
     }
 
    //  implement
     class HondaCar extends Vehicle2{
        startEngine(): void {
          console.log("start");  
        }
        stopEngine(): void {
            console.log("Stop");
        }
        move(): void {
            console.log("Move");
        }
     }

     const hondaCar = new HondaCar()
     hondaCar.stopEngine()
 

    


}