import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

    studentName:String="kodeeswaran";
    studentMark:Number=490;
    joinDate:Date=new Date();
  message:String="this is event binding"
  fontColor:String="blue"
    displayMessage(){
      alert(this.message)
    }
}
