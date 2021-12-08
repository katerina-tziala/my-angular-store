import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRouterModule } from './shopping-cart-routing.module';
import { CartComponent } from './cart.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ProductInfoModule } from 'src/app/shared/product-info/product-info.module';
import { OrderItemComponent } from './order-item/order-item.component';
import { NumberInputModule } from 'src/app/components/number-input/number-input.module';
import { PriceModule } from 'src/app/components/price/price.module';

@NgModule({
  declarations: [CartComponent, ShoppingCartSummaryComponent, OrderItemComponent],
  imports: [CommonModule, ShoppingCartRouterModule, PriceModule, ProductInfoModule, NumberInputModule],
})
export class ShoppingCartModule {}
