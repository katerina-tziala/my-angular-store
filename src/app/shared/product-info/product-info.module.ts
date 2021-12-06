import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPhotoComponent } from './product-photo/product-photo.component';
import { ProductRatingModule } from './product-rating/product-rating.module';
import { ProductRatingComponent } from './product-rating/product-rating.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRatingModule
  ],
  declarations: [ProductPhotoComponent],
  exports: [ProductPhotoComponent, ProductRatingComponent]
})
export class ProductInfoModule { }
