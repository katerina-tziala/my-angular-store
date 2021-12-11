import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './product-info.component';
import { ProductRatingModule } from '../product-rating/product-rating.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, ProductRatingModule],
  declarations: [ProductInfoComponent],
  exports: [ProductInfoComponent]
})
export class ProductInfoModule {}
