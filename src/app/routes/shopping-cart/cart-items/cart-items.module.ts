import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './cart-items.component';
import { OrderItemModule } from './order-item/order-item.module';
import { AlertMessageModule } from 'src/app/shared/components/alert-message/alert-message.module';

@NgModule({
  imports: [CommonModule, AlertMessageModule, OrderItemModule],
  declarations: [CartItemsComponent],
  exports: [CartItemsComponent],
})
export class CartItemsModule {}
