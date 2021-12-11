import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderCustomerFormComponent } from './order-customer-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [OrderCustomerFormComponent],
  exports: [OrderCustomerFormComponent]
})
export class OrderCustomerFormModule {}
