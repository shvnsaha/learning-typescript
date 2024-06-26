{
    // promise:
    const createPromise = (): Promise<string>=>{
        return new Promise<string>((resolve,reject)=>{
            const data: string = "something";
            if(data){
                resolve(data)
            }else{
                reject("Failed to load data")
            }
        })
    }
    const showData = async() =>{
        const data = await createPromise();
        console.log(data);
    }
    showData()


    // 
    const getTodo = async() =>{
       const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const result = await response.json();
       console.log(result);
    }

     getTodo()
}