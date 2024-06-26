{
    // interface:
    type TUser ={
        name: string;
        age: number;
    }
    type TUSerWithRoll = TUser & {
        roll: string
    }

    const user1: TUser ={
        name: "Shovan",
        age: 24
    }

  

    interface IUser{
        name: string;
        age: number;
    }
    interface IUserWithRoll extends IUser{roll: string}

    const user2:IUserWithRoll = {
        name: "Shovan",
        age: 24,
        roll: "IT-19033"
    }


    //array 
    type TRoll = number[];
    const roll1: TRoll = [1,2,3];

    interface IRoll{
       [index: number]: number
    }
    const roll2: IRoll = [1,2,3];


    // function:
    type TAdd = (num1:number,num2:number) => number;
    const add1: TAdd = (num1,num2) =>num1+num2

    interface IAdd{
        (num1:number,num2:number): number
    }
    const add2:IAdd = (num1,num2) => num1+num2


}