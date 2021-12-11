import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRouterModule } from './shopping-cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemsModule } from './cart-items/cart-items.module';
import { ShoppingCartSummaryModule } from './shopping-cart-summary/shopping-cart-summary.module';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    ShoppingCartRouterModule,
    LoaderModule,
    ShoppingCartSummaryModule,
    CartItemsModule
  ]
})
export class ShoppingCartModule {}
