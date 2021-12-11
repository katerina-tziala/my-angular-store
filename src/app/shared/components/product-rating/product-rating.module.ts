import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRatingComponent } from './product-rating.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductRatingComponent, RatingStarsComponent],
  exports: [ProductRatingComponent]
})
export class ProductRatingModule {}
