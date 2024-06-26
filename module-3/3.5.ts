{
    // access modifier:

    class BankAccount{
        constructor(public id: number,public name: string,private _balance: number,protected email: string){}
        
        addBalance(balance: number){
          this._balance += balance;
        }
        getBalance(){
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.email;
        }
    }

    const personAccount = new BankAccount(201,"Shovan",1000,"shovan@hor");
    personAccount.addBalance(1000);
    console.log(personAccount.getBalance());
    
}