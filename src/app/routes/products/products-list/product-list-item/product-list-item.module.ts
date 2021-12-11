import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListItemComponent } from './product-list-item.component';
import { ProductPhotoModule } from 'src/app/components/product-photo/product-photo.module';
import { ProductInfoModule } from 'src/app/components/product-info/product-info.module';
import { PriceModule } from 'src/app/components/price/price.module';
import { ProductActionsModule } from 'src/app/components/product-actions/product-actions.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductPhotoModule,
    ProductInfoModule,
    PriceModule,
    ProductActionsModule
  ],
  declarations: [ProductListItemComponent],
  exports: [ProductListItemComponent],
})
export class ProductListItemModule {}
