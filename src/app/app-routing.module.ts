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
    path: 'cart',
    loadChildren: () =>
      import('./routes/cart/cart.module').then((m) => m.CartModule),
  },
  { path: '**', redirectTo: 'products' }, // redirect to
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
