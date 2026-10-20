import { Component } from '@angular/core';
import { ProductService } from '../services/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorit-product',
  imports: [CommonModule],
  templateUrl: './favorit-product.html',
  styleUrls: ['./favorit-product.css'],
  standalone: true,

})
export class FavoritProduct {
 constructor(public service:ProductService){}
//  ngOnInit() {
//   console.log(this.service.favorite);
// }
}
