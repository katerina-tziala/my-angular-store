import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRouterModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRouterModule],
})
export class CartModule {}
