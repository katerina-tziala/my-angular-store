import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductRouterModule } from './product-routing.module';
import { ProductRatingModule } from 'src/app/shared/presentational-components/product-rating/product-rating.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductRouterModule, ProductRatingModule],
  exports: [],
})
export class ProductsModule {}
