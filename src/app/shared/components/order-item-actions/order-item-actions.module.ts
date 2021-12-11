import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemActionsComponent } from './order-item-actions.component';
import { NumberInputModule } from '../number-input/number-input.module';

@NgModule({
  imports: [CommonModule, NumberInputModule],
  declarations: [OrderItemActionsComponent],
  exports: [OrderItemActionsComponent]
})
export class OrderItemActionsModule {}
