import { Component } from '@angular/core';
import { ProductService } from '../services/product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-cart',
  imports: [CommonModule],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.css',
    standalone:true ,

})
export class ProductCart {
  constructor(public service:ProductService){}
}
