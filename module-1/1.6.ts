{
    // function

    function add(num1:number,num2:number = 10):number{
        return num1+num2;
    }

    const addArrow = (num1:number,num2:number):number => num1+num2

    const poorUser = {
        name: 'Shovan',
        balance: 100,
        addBalance(balance:number):number{
           return this.balance+=balance
        }
    }

    console.log(poorUser.addBalance(1900))

    const arr: number[] = [1,4,10];
    const newArr: number[] = arr.map((ele:number):number=>ele*ele)

}