import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListItemComponent } from './product-list-item.component';
import { ProductPhotoModule } from 'src/app/shared/components/product-photo/product-photo.module';
import { ProductInfoModule } from 'src/app/shared/components/product-info/product-info.module';
import { PriceModule } from 'src/app/shared/components/price/price.module';
import { ProductActionsModule } from 'src/app/shared/components/product-actions/product-actions.module';

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
  exports: [ProductListItemComponent]
})
export class ProductListItemModule {}
