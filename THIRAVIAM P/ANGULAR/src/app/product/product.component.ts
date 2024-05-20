import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.2.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    
    products:product[]=[{productId:101,productName:"Laptop",cost:50000,category:"Electronics"},
    {productId:102,productName:"Bag",cost:6000,category:"Stationary"},
    {productId:103,productName:"Pendrive",cost:400,category:"Electronics"},
    {productId:104,productName:"Pencil",cost:5,category:"Stationary"},
    {productId:105,productName:"Phone",cost:20000,category:"Electronics"},
    {productId:106,productName:"Pen",cost:50,category:"Stationary"},
    {productId:107,productName:"Slice",cost:10,category:"Beverages"},
    {productId:108,productName:"File",cost:20,category:"Stationary"},
    {productId:109,productName:"Charger",cost:500,category:"Electronics"},
    {productId:110,productName:"pepsi",cost:50000,category:"Beverages"},
    {productId:111,productName:"Notebook",cost:40,category:"Stationary"},
    {productId:112,productName:"Headphone",cost:1000,category:"Electronics"},
    {productId:113,productName:"Map",cost:10,category:"Stationary"},
    {productId:114,productName:"GPU",cost:90000,category:"Electronics"},
    {productId:115,productName:"Milkshake",cost:50,category:"Beverages"}
  ]
  categoryInput:String="Beverages";
}
