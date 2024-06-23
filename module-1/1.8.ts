{
    // destructuring

    const user = {
        id: 123,
        name:{
            firstName: 'Shovan',
            lastName: 'Saha'
        },
        presentAdd: 'Tangail',
        permanentAdd: 'Tangail',
        contactNo: '123456'
    }

    const {contactNo:phoneNo, name:{firstName}} = user;
    console.log(phoneNo,firstName)


    const friends: string[] = ['Rahul','Rohit','Kalu','Ani','Joy'];
    const [,,c,...rest] = friends;
    console.log(c,rest)
}