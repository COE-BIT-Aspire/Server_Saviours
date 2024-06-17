export class accountHolder{
    accountNumber: number;
    accountHolderName: String;
    typeOfAccount: String;
    amount: number;
    date: String;

constructor(accountNumber: number, accountHolderName: String, typeOfAccount: String, amount: number, date: String){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.typeOfAccount = typeOfAccount;
        this.amount = amount;
        this.date = date;
}
}