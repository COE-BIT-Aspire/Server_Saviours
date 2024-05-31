import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { BankComponent } from './bank/bank.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { CubePipe } from './cube.pipe';
import { ProductdetComponent } from './productdet/productdet.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[HttpClientModule,CubePipe,RouterOutlet,RouterLink,ProductdetComponent,StudentComponent,BankComponent,FormsModule,ShopComponent,HomeComponent,ProductComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAngularApp';
  doj=new Date();
}
