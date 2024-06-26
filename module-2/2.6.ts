{
    // constraints:

    const addCourseToStudent = <T extends {name: string,email: string}>(student: T) => {
        const course = "Next Level Web DEV"
        return {
            ...student,
            course
        }
    }

    const st1 = addCourseToStudent({ 
        name: "Mr x",
        email: "Svn@gmail.com", 
        devType: 'NLWB' 
    });

    const st2 = addCourseToStudent({
         name: "Mr x", 
         email: "Svn@gmail.com", 
         devType: 'NLWB', 
         hasWatch: "apple" 
    });

}