import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRouterModule } from './checkout-routing.module';
import { ShoppingCartSummaryModule } from '../shopping-cart-summary/shopping-cart-summary.module';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRouterModule,
    ShoppingCartSummaryModule,
  ],
})
export class CheckoutModule {}
