import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../pipes/truncate-pipe';
import { ShadowDirective } from '../shared/shadow';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, TruncatePipe, ShadowDirective],
  templateUrl: './product-card.html',
})
export class ProductCard {
  @Input() product: any;
  @Output() addCart = new EventEmitter<any>();
  @Output() addFav = new EventEmitter<any>();
  @Output() titleClick = new EventEmitter<number>();
}