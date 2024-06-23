{
    // spread operator
    const friends1: string[] = ['Rahul','Rohit','Kanu'];
    const friends2: string[] = ['Mir','Shakil','Nahid'];
    friends1.push(...friends2);
    
    const mentors1 = {
        typescript: 'Mehedi',
        redux: 'Nahid',
        dbms: 'Rasel'
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Riyad'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    //rest operator;
    const greetFriends = (...friends:string[]) =>{
        friends.forEach((fnd:string)=> console.log(`hello ${fnd}`))
    }

    greetFriends('Kamal','Jamal','Nil');

}