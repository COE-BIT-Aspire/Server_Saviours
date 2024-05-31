export class accountHolder{
    accountNumber:number;
    accountHolderName:string;
    accountType:string;
    amount:number;
    date:string;

    constructor( accountNumber:number,accountHolderName:string,accountType:string,amount:number,date:string){
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.accountType=accountType;
        this.amount=amount;
        this.date=date;
    }
}