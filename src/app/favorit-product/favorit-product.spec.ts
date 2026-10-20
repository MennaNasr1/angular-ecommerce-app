import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritProduct } from './favorit-product';

describe('FavoritProduct', () => {
  let component: FavoritProduct;
  let fixture: ComponentFixture<FavoritProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
