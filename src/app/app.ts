import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FavoritProduct } from "./favorit-product/favorit-product";
import { ProductCart } from "./product-cart/product-cart";
import { ProductList } from "./product-list/product-list";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FavoritProduct, ProductCart, ProductList,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
    standalone:true ,

})
export class App {
  protected readonly title = signal('my-app');
}
