{
    // ternary operator:
    let age = 19;
    (age>=18) ? console.log('Adult') : console.log('Not Adult');


    // nullish coalescing:  --> null or undefined
    const isAuthenticated = '';
    const result1 = isAuthenticated ?? 'Guest';
    const result2 =  isAuthenticated ? isAuthenticated : 'Guest'
    console.log({result1},{result2})

    type TUser = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAdd: string;
            permanentAdd?: string;
        }
    }

    const user: TUser ={
        name: "Shovan",
        address:{
            city: 'Tangail',
            road: '12 road',
            presentAdd: 'Tangail Thana'
        }
    }

    const permanentAddress = user?.address?.permanentAdd ?? 'No Permanent Address';
    console.log(permanentAddress)


}