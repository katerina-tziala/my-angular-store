import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from './order-item.component';
import { OrderItemActionsModule } from 'src/app/shared/components/order-item-actions/order-item-actions.module';
import { PriceModule } from 'src/app/shared/components/price/price.module';
import { ProductPhotoModule } from 'src/app/shared/components/product-photo/product-photo.module';
import { RouterModule } from '@angular/router';
import { ProductInfoModule } from 'src/app/shared/components/product-info/product-info.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PriceModule,
    OrderItemActionsModule,
    ProductPhotoModule,
    ProductInfoModule
  ],
  declarations: [OrderItemComponent],
  exports: [OrderItemComponent],
})
export class OrderItemModule {}
