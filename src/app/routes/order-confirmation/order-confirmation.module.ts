import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmationComponent } from './order-confirmation.component';
import { OrderConfirmationRouterModule } from './order-confirmation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrderConfirmationRouterModule
  ],
  declarations: [OrderConfirmationComponent]
})
export class OrderConfirmationModule { }
