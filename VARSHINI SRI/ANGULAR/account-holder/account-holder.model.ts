export class account{
    AccountNumber:number;
    ACHolderName:String;
    TypeOfAccount:String;
    Amount:number;
    Dates:String;

    constructor(AccountNumber:number, ACHolderName:String,TypeOfAccount:String,Amount:number,Dates:String){
        this.ACHolderName = ACHolderName;
        this.AccountNumber = AccountNumber;
        this.Amount = Amount;
        this.Dates = Dates;
        this.TypeOfAccount = TypeOfAccount;
    }
}