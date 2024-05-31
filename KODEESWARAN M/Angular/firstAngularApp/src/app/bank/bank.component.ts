import { Component } from '@angular/core';
import { accountHolder } from './bank.model';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterOutlet],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})



export class BankComponent {

  accountCategory:string="savingsAccount";
   getStatus(amount:number):string{
      if(amount>10000)
        return "Loyal"
      else if(amount>=1000 && amount<=10000)
        return "Active"
      else if(amount>=500 && amount<1000)
        return "Inactive"
      else
      return "Dead"
  }

  accountHolders:accountHolder[]=[{accountNumber:9999888801,accountHolderName:"ajay",accountType:"savingsAccount",amount:1010,date:"2023-04-22"},
  {accountNumber:9999888802,accountHolderName:"vijay",accountType:"savingsAccount",amount:600,date:"2022-05-02"},
  {accountNumber:9999888803,accountHolderName:"suresh",accountType:"currentAccount",amount:29000,date:"2020-06-02"},
  {accountNumber:9999888804,accountHolderName:"kumar",accountType:"savingsAccount",amount:900,date:"2019-11-11"},
  {accountNumber:9999888805,accountHolderName:"sree",accountType:"currentAccount",amount:7500,date:"2023-12-21"},
  {accountNumber:9999888806,accountHolderName:"vicky",accountType:"salaryAccount",amount:25000,date:"2022-01-05"},
  {accountNumber:9999888807,accountHolderName:"sam",accountType:"salaryAccount",amount:17500,date:"2019-07-22"},
  {accountNumber:9999888808,accountHolderName:"john",accountType:"savingsAccount",amount:850,date:"2022-09-12"},
  {accountNumber:9999888809,accountHolderName:"ramya",accountType:"currentAccount",amount:5500,date:"2023-03-26"},
  {accountNumber:9999888810,accountHolderName:"barath",accountType:"salaryAccount",amount:12200,date:"2020-08-30"},
  {accountNumber:9999888811,accountHolderName:"anjali",accountType:"salaryAccount",amount:1200,date:"2019-06-22"},
  {accountNumber:9999888812,accountHolderName:"arun",accountType:"currentAccount",amount:22000,date:"2022-02-12"},
  {accountNumber:9999888813,accountHolderName:"naveen",accountType:"savingsAccount",amount:888,date:"2023-04-02"}
  ]

 
}
