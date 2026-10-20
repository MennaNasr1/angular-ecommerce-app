//import { inject, Service } from '@angular/core';
import { HttpClient }from'@angular/common/http' ;
import {Injectable,signal} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
    cart = signal<any[]>([]);
    favorite = signal<any[]>([]);

    constructor(private http: HttpClient) {}

    // getProducts() {
    //     return this.http.get<any>('https://dummyjson.com/products');
    // }

    getProducts() {
        return this.http.get<any>('https://dummyjson.com/products?limit=10&skip=20');
      }
    addToCart(product: any) {
        if (!this.cart().find(p => p.id === product.id)) {
            this.cart.update(items => [...items, product]);
        }
    }

    deleteProduct(id: number) {
        this.cart.update(items => items.filter(p => p.id !== id));
    }

    addFavorite(product: any) {
        if (!this.favorite().find(p => p.id === product.id)) {
            this.favorite.update(items => [...items, product]);
        }
    }
    deleteFavProduct(id: number) {
        this.favorite.update(items => items.filter(p => p.id !== id));
    }
    getProductById(id: number) {
        return this.http.get<any>(`https://dummyjson.com/products/${id}`);
      }
   
}