import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product';
import { ShadowDirective } from "../shared/shadow";
import { Router } from '@angular/router';
import { FavoritProduct } from "../favorit-product/favorit-product";
import { ProductCart } from "../product-cart/product-cart";
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search-pipe';
import { ProductCard } from "../product-card/product-card";
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ShadowDirective, FavoritProduct, ProductCart, FormsModule, SearchPipe, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  standalone: true,
})
export class ProductList {
  products = signal<any[]>([]);

  username=signal<string>('');
  searchText = '';
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.username.set(localStorage.getItem('username')||'');
      this.products.set(res.products);
    });
  }

  addCart(p: any) {
    this.productService.addToCart(p);
  }

  addFav(p: any) {
    this.productService.addFavorite(p);
  }
  


   goToDetails(id: number) {
  
    this.router.navigate(['/product-details', id]);

  }
}