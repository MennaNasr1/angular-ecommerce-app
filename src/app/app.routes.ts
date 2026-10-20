import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { NotFound } from './not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProductList, canActivate: [authGuard] },
  { path: 'product-details/:id', component: ProductDetails },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.Login)
  },
  { path: 'not-found', component: NotFound },
  { path: '**', redirectTo: 'not-found' }
];