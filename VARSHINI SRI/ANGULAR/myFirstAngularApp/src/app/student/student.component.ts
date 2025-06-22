import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  colorChanged: boolean = false;
  studentName: String = "Varshini";
  studentMark: number = 483;
  joinDate: Date = new Date();
  message: String = "This is event binding";
  fontColor: String = "Blue";
  email: String = 'propertyBinding@gmail.com'
  colspans: number = 4
  messagePlaceholder = "Enter Value"

  displayMessage(){
    alert(this.message);
  }
  changeBackground(){
    this.colorChanged = true;
  }
}
