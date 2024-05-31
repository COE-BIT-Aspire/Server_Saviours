import { Component } from '@angular/core';
import { AccountHolder } from './account-holder.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-holder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account-holder.component.2.html',
  styleUrl: './account-holder.component.css'
})
export class AccountHolderComponent {
    AccountHolders:AccountHolder[]=[{AccountNumber:123456789012345,AccountHolderName:"Thiraviam",TypeOfAccount:"SavingsAcc",Amount:1000,BankName:"SBI"},
    {AccountNumber:123456789012346,AccountHolderName:"Siva",TypeOfAccount:"SalaryAcc",Amount:30000,BankName:"IOB"},
    {AccountNumber:123456789012347,AccountHolderName:"Naresh",TypeOfAccount:"BusinessAcc",Amount:200000,BankName:"KVB"},
    {AccountNumber:123456789012348,AccountHolderName:"Udhaya",TypeOfAccount:"SalaryAcc",Amount:5000,BankName:"SBI"},
    {AccountNumber:123456789012349,AccountHolderName:"Saravana",TypeOfAccount:"SavingsAcc",Amount:4023440,BankName:"CB"},
    {AccountNumber:123456789012340,AccountHolderName:"Raju",TypeOfAccount:"SalaryAcc",Amount:90000,BankName:"IOB"},
    {AccountNumber:123456789012341,AccountHolderName:"kumar",TypeOfAccount:"BusinessAcc",Amount:5045690,BankName:"CB"},
    {AccountNumber:123456789012342,AccountHolderName:"Luffy",TypeOfAccount:"SalaryAcc",Amount:3000000000,BankName:"SBI"},
    {AccountNumber:123456789012343,AccountHolderName:"Naruto",TypeOfAccount:"SavingsAcc",Amount:700000,BankName:"IOB"},
    {AccountNumber:123456789012344,AccountHolderName:"Itadori",TypeOfAccount:"SalaryAcc",Amount:60000,BankName:"KVB"},
    {AccountNumber:123456789012333,AccountHolderName:"Heisenberg",TypeOfAccount:"BusinessAcc",Amount:200000,BankName:"SBI"},
    {AccountNumber:123456789012344,AccountHolderName:"Dracarys",TypeOfAccount:"SalaryAcc",Amount:92345000,BankName:"CB"},
    {AccountNumber:123456789012335,AccountHolderName:"Goku",TypeOfAccount:"SavingsAcc",Amount:23498578,BankName:"KVB"}
  ]
  TypeOfAccountInput:string="SavingsAcc";
  AmountInput:number=20000;
}
