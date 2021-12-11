import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductActionsComponent } from './product-actions.component';
import { OrderItemActionsModule } from '../order-item-actions/order-item-actions.module';

@NgModule({
  imports: [
    CommonModule,
    OrderItemActionsModule
  ],
  declarations: [ProductActionsComponent],
  exports: [ProductActionsComponent]
})
export class ProductActionsModule { }
