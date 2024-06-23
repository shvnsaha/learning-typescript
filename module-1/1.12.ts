{

    // nullable type;

    const search = (value: string | null) =>{
        if(value){
            console.log('Searching...')
        }else{
            console.log('there is nothing to search')
        }
    }
    search(null)

    // unknown type:
    const getSpeedInMeterPerSecond = (value:unknown): number| string =>{
        if(typeof value === 'number'){
            return (value*1000)/3600
        }else if(typeof value === 'string'){
            return (parseFloat(value)*1000)/3600
        }else{
            return 'Invalid Input'
        }
    }
    console.log(getSpeedInMeterPerSecond(null));

    // never type:
    const throwError = (msg:string):never =>{
       throw new Error(msg); 
    }
    throwError('Muskil se error ')
}