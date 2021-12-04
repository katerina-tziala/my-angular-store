import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRouterModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { ProductRatingModule } from 'src/app/shared/presentational-components/product-rating/product-rating.module';
import { LoaderModule } from 'src/app/shared/presentational-components/loader/loader.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, ProductRouterModule, ProductRatingModule, LoaderModule],
  exports: [],
})
export class ProductDetailsModule {}
