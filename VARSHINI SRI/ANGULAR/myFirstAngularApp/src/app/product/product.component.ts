import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  categoryInput: string = "Stationary";
  search: string = "";
  products:product[] = [{productId: 101, productName: "Laptop", cost: 40000, category: "Electronics", Availability:true},
    {productId: 102, productName: "PenDrive", cost: 400, category: "Electronics", Availability:false},
    {productId: 103, productName: "MobilePhone", cost: 30000, category: "Electronics", Availability:true},
    {productId: 104, productName: "Pepsi", cost: 80, category: "Beverages", Availability:false},
    {productId: 105, productName: "7Up", cost: 85, category: "Beverages", Availability:true},
    {productId: 106, productName: "Charger", cost: 450, category: "Electronics", Availability:false},
    {productId: 107, productName: "Pen", cost: 40, category: "Stationary", Availability:true},
    {productId: 108, productName: "Bag", cost: 1200, category: "Stationary", Availability:false},
    {productId: 109, productName: "PowerBank", cost: 4000, category: "Electronics", Availability:true},
    {productId: 110, productName: "File", cost: 50, category: "Stationary", Availability:false},
    {productId: 111, productName: "Slice", cost: 90, category: "Beverages", Availability:true}
  ]
}
