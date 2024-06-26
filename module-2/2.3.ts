{
    // Generic type:
   
    type TUser = {
        name: string;
        age: number;
    }

    type TGenericArray<T> = Array<T>
   
    const rollNumbers: TGenericArray<number> = [1,2,34];
    const friends: TGenericArray<string> =['akash','prabin'];
    const boolArray : TGenericArray<boolean> =[true,false,true]

    const user: TGenericArray<TUser> = [{
        name: "Shovan",
        age: 24
    },
    {
        name: "Saha",
        age: 25
    }

]


// generic tuple
type TGenericTuple<T,Q> = [T,Q];

const manush:TGenericTuple<string,string> = ['Mr. x','Mr. Y']
  


}