{
    // function with generics:

    const createArray = (param: string) : string[] =>{
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] =>{
         return [param]
    } 

    const res1 = createArrayWithGeneric("Bangladesh");
    const re2 = createArrayWithGeneric(1000);


    const createArrayWithTuple = <T,Q>(param1: T,param2: Q): [T,Q] =>{
         return [param1,param2]
    } 
    const result1 = createArrayWithTuple<string,number>("Shovan",100)


    const addCourseToStudent = <T>(student:T) =>{
        const course = "Next Level Web DEV"
        return {
            ...student,
            course
        }
    }

    const st1 = addCourseToStudent({name: "Mr x",email:"Svn@gmail.com",devType: 'NLWB'});

    const st2 = addCourseToStudent({name: "Mr x",email:"Svn@gmail.com",devType: 'NLWB',hasWatch: "apple"});



}