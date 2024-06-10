import { Component } from '@angular/core';
import { Shop } from './shop.model';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  shop: Shop; // Object (shop) of the type of the class called Shop
  constructor(){
    this.shop = new Shop("Books", 100, "Bangalore");
  }
}
