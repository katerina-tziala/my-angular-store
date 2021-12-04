import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartButtonComponent } from './cart-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartButtonComponent],
  exports: [CartButtonComponent],
})
export class CartButtonModule {}
