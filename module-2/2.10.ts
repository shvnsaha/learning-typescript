{
    // mapped types:
    const arrOfNumbers: number[] =[1,2,3,4,5];
    const arrOfStrings: string[] = ['1','2','3','4'];

    const arrOfStringsMap = arrOfNumbers.map(number=>number.toString());
    console.log(arrOfStringsMap);


    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber['height'] //lookup

    // type AreaString = {
    //     [property in keyof AreaNumber]: string
    // }



    type AreaString<T> = {
        [property in keyof T]: T[property]
    }


    const area1: AreaString<{height: string;width: number}> = {
        height: "100",
        width: 50
    }

    
}