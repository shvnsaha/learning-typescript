{
    // type alias

    type TStudent = {
        name: string;
        age: number;
        gender: 'male'| 'female';
        contactNo?: string;
        address: string
    }

    const student:TStudent = {
        name: 'Shovan',
        age: 25,
        gender: 'male',
        address: 'Tangail'
    }
    

    type TAdd = (num1:number,num2:number) => number;
    const add:TAdd = (num1,num2) => num1+num2

}