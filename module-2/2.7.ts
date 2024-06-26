{
    // generic constraint with keyof operator:

    type Vehicle = {
        bike: string;
        car : string;
        ship: string;
    }
    type Owner = keyof Vehicle;
    const vehicle: Owner = 'car';



    const user = {
        name: "Shovan Saha",
        age: 26,
        address: 'Dhaka'
    }

    const  getPropertyValue = <X,Y extends keyof X> (obj:X,key:Y) =>{
        return obj[key]
    }

    const result = getPropertyValue(user,'name');
    console.log(result);

  
}