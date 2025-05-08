{
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number){
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test(){
            this._balance = 100;
        }
    }

    const account1 = new BankAccount(1, "mahfuz", 2000);
    console.log(account1.getBalance());

}