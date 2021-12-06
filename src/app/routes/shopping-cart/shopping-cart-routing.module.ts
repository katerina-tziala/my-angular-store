import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { ShoppingCartCheckoutComponent } from './shopping-cart-checkout/shopping-cart-checkout.component';

const routes: Routes = [
  { path: '', component: CartComponent },
  {
    path: 'checkout',
    component: ShoppingCartCheckoutComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartRouterModule {}
