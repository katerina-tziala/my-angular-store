import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartModalMessageComponent } from './cart-modal-message.component';
import { ProductInfoModule } from '../product-info/product-info.module';

@NgModule({
  imports: [CommonModule, RouterModule, ProductInfoModule],
  declarations: [CartModalMessageComponent],
  exports: [CartModalMessageComponent]
})
export class CartModalMessageModule {}
