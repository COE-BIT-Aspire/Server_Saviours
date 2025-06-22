import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { accountHolder } from './account.model';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account.1.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  categoryInput: string = "SavingsACC";
  getStatus(amount:number):string{
    if(amount>50000)
      return "Loyal"
    else if(amount>=10000 && amount<=50000)
      return "Active"
    else if(amount<10000)
      return "Inactive"
    else
      return "Account Closed"
}
  accounts:accountHolder[] = [{accountNumber: 6112345678, accountHolderName: "Jaya", typeOfAccount: "BusinessACC", amount: 100000, date: "24/06/2002"},
    {accountNumber: 8112345676, accountHolderName: "Subbu", typeOfAccount: "BusinessACC", amount: 50000, date: "22/07/2001"},
    {accountNumber: 6712345618, accountHolderName: "Silpa", typeOfAccount: "BusinessACC", amount: 1000, date: "20/08/2003"},
    {accountNumber: 8712345616, accountHolderName: "Saras", typeOfAccount: "SalaryACC", amount: 80000, date: "18/09/2004"},
    {accountNumber: 6162345178, accountHolderName: "Saba", typeOfAccount: "SavingsACC", amount: 40000, date: "16/05/2005"},
    {accountNumber: 8112435676, accountHolderName: "Naveen", typeOfAccount: "SalaryACC", amount: 4000, date: "14/04/2006"},
    {accountNumber: 9112345678, accountHolderName: "Anitha", typeOfAccount: "SavingsACC", amount: 60000, date: "12/03/2007"},
    {accountNumber: 5112345678, accountHolderName: "Savitha", typeOfAccount: "SalaryACC", amount: 30000, date: "10/02/2008"},
    {accountNumber: 4112345678, accountHolderName: "Snigdha", typeOfAccount: "SavingsACC", amount: 3000, date: "30/01/2009"}
  ]
}
