{
    //type assertion:
     let anything : any;
     anything = "Next Level Web Dev";
     (anything as string).includes('next')

     const kgToGm = (value: string|number| undefined) =>{
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value);
            return `The converted Value is ${convertedValue*1000}`
        }else if(typeof value === 'number'){
            return value*1000;
        }
     }

     const result1 = kgToGm('10000') as string;
     const result2 = kgToGm(10000) as number;


     type CustomError = {
        message: string;
     }

     try{

     }catch(error){
        console.log((error as CustomError).message);
     }

}