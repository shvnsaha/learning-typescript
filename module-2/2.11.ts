{

    // utility types:
    //pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person,"name" | "age">

    //Ommit
    type ContactInfo = Omit<Person,"name" | "age">

    // required
    type RequiredType = Required<Person>


    // partial;
    type PartialType = Partial<Person>

    // readonly:
    type ReadOnlyType = Readonly<Person>
    const person1: ReadOnlyType ={
        name: "Shovan",
        age: 200,
        contactNo: "9328234"
    }


    // Record:
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

     
    const emptyObj: Record<string,unknown> = {}
    
    type MyObj = Record<string,string>
    const obj: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc'
    }
}