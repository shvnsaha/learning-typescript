{
    // object

    const user: {
        readonly firstName: string;  //readonly
        middleName?: string;   //optional type
        lastName: string;
        isMarried: boolean;
        company: 'CSS Company' //literal type
    } = {
        firstName: 'Shovan',
        // middleName: 'Saha',
        lastName: 'Hriday',
        isMarried: false,
        company: 'CSS Company'
    }

    // user.firstName = 'Shovan'


}