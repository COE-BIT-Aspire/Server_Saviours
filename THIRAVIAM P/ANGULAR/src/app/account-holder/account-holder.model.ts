export class AccountHolder{
    AccountNumber:number;
    AccountHolderName:String;
    TypeOfAccount:String;
    Amount:number;
    BankName:String;

    constructor(AccountNumber:number,AccountHolderName:String,TypeOfAccount:String,Amount:number,BankName:String){
        this.AccountNumber=AccountNumber;
        this.AccountHolderName=AccountHolderName;
        this.TypeOfAccount=TypeOfAccount;
        this.Amount=Amount;
        this.BankName=BankName;
    }
}