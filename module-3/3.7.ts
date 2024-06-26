{
    // static in oop

    class Counter{
         static count: number = 0;
       static increment(){
            return ++Counter.count
        }
       static decrement(){
            return --Counter.count;
        }
    }

    // const ins1 = new Counter();
    // console.log(ins1.increment());

    // const ins2 = new Counter();
    // console.log(ins2.increment());

    console.log(Counter.increment());
}