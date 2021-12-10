import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemComponent } from './order-item.component';
import { OrderItemActionsModule } from 'src/app/components/order-item-actions/order-item-actions.module';
import { PriceModule } from 'src/app/components/price/price.module';
import { ProductPhotoModule } from 'src/app/components/product-photo/product-photo.module';
import { ProductRatingModule } from 'src/app/components/product-rating/product-rating.module';
import { RouterModule } from '@angular/router';
import { ProductInfoModule } from 'src/app/components/product-info/product-info.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PriceModule,
    OrderItemActionsModule,
    ProductPhotoModule,
    ProductRatingModule,
    ProductInfoModule
  ],
  declarations: [OrderItemComponent],
  exports: [OrderItemComponent],
})
export class OrderItemModule {}
