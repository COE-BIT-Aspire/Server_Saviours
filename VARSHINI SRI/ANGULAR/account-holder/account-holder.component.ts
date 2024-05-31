import { Component } from '@angular/core';
import { account } from './account-holder.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-holder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account-holder.component.html',
  styleUrl: './account-holder.component.css'
})
export class AccountHolderComponent {
  categoryInput: string = "SavingsACC"
  accounts:account[] = [{AccountNumber:1234567890, ACHolderName: "Varshini", TypeOfAccount: "SavingsACC", Amount: 50000, Dates: "24/6/2020"},
  {AccountNumber:4567890123, ACHolderName: "Silpa", TypeOfAccount: "SalaryACC", Amount: 50000, Dates: "20/1/2018"},
  {AccountNumber:7894560123, ACHolderName: "Jaya", TypeOfAccount: "BusinessACC", Amount: 60000, Dates: "10/5/2015"},
  {AccountNumber:5607894123, ACHolderName: "Savitha", TypeOfAccount: "SavingsACC", Amount: 30000, Dates: "5/9/2022"},
  {AccountNumber:8904567123, ACHolderName: "Saraswathi", TypeOfAccount: "SalaryACC", Amount: 60000, Dates: "20/1/2017"},
  {AccountNumber:1278945603, ACHolderName: "Subbu", TypeOfAccount: "BusinessACC", Amount: 70000, Dates: "10/5/2016"},
  {AccountNumber:6057894123, ACHolderName: "Snigdha", TypeOfAccount: "SalaryACC", Amount: 30000, Dates: "5/9/2022"},
  {AccountNumber:4156078923, ACHolderName: "Anitha", TypeOfAccount: "SavingsACC", Amount: 40000, Dates: "9/5/2019"},
  {AccountNumber:9478560123, ACHolderName: "Dinesh", TypeOfAccount: "BusinessACC", Amount: 65000, Dates: "10/5/2021"}
  ]
}
