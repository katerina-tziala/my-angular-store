import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' }, // redirect to,
  {
    path: 'products',
    loadChildren: () =>
      import('./routes/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./routes/product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
  {
    path: 'shoppingcart',
    loadChildren: () =>
      import('./routes/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
  {
    path: 'order-confirmation/:id',
    loadChildren: () =>
      import('./routes/order-confirmation/order-confirmation.module').then(
        (m) => m.OrderConfirmationModule
      ),
  },
  { path: '**', redirectTo: 'products' }, // redirect to
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
