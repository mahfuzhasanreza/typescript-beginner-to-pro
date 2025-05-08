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

        // setter
        set deposit(amount: number){
            this._balance = this._balance + amount
        }

        // addDeposit(amount: number){
        //     this._balance = this._balance + amount;
        // }

        // getter
        get Balance(){
            return this._balance;
        }

        // getBalance(){
        //     return this._balance;
        // }
    }

    const account1 = new BankAccount(1, "mahfuz", 2000);
    // console.log(account1.getBalance()); // function call
    console.log(account1.Balance); // like property
    account1.deposit = 100;

}