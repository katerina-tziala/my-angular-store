import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRouterModule } from './checkout-routing.module';
import { ShoppingCartSummaryModule } from '../shopping-cart-summary/shopping-cart-summary.module';
import { CheckoutComponent } from './checkout.component';
import { OrderCustomerFormModule } from './order-customer-form/order-customer-form.module';
import { OrderConfirmationModule } from './order-confirmation/order-confirmation.module';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRouterModule,
    ShoppingCartSummaryModule,
    OrderCustomerFormModule,
    OrderConfirmationModule
  ]
})
export class CheckoutModule {}
