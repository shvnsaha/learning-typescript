{
    // access modifier:

    class BankAccount{
        constructor(public id: number,public name: string,private _balance: number,protected email: string){}
        
        set addBalance(balance: number){
            this._balance += balance;
        }
       get getBalance(){
            return this._balance;
        }
    }


    const personAccount = new BankAccount(201,"Shovan",1000,"shovan@hor");
    personAccount.addBalance = 1001;
    console.log(personAccount.getBalance);
    
}