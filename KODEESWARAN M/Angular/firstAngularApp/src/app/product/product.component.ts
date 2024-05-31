import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.2.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  categoryInput:string="Electronics";


  products:product[]=[{productId:1000,productName:"hearphone",cost:1300,category:"Electronics"},
  {productId:1001,productName:"laptop",cost:50000,category:"Electronics"},
  {productId:1002,productName:"tv",cost:40000,category:"Electronics"},
  {productId:1003,productName:"pepsi",cost:90,category:"beverages"},
  {productId:1004,productName:"campa cola",cost:20,category:"beverages"},
  {productId:1005,productName:"coca cola",cost:80,category:"beverages"},
  {productId:1006,productName:"eraser",cost:5,category:"stationary"},
  {productId:1007,productName:"powerBank",cost:4200,category:"Electronics"},
  {productId:1008,productName:"pencil",cost:10,category:"stationary"},
  {productId:1009,productName:"pen",cost:15,category:"stationary"}
  ]
}
