import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRouterModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';
import { AlertMessageModule } from 'src/app/shared/components/alert-message/alert-message.module';
import { ProductPhotoModule } from 'src/app/shared/components/product-photo/product-photo.module';
import { ProductRatingModule } from 'src/app/shared/components/product-rating/product-rating.module';
import { PriceModule } from 'src/app/shared/components/price/price.module';
import { ProductActionsModule } from 'src/app/shared/components/product-actions/product-actions.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    LoaderModule,
    AlertMessageModule,
    ProductRouterModule,
    ProductPhotoModule,
    ProductRatingModule,
    PriceModule,
    ProductActionsModule
  ],
  exports: []
})
export class ProductDetailsModule {}
