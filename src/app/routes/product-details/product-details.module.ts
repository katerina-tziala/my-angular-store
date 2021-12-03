import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRouterModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, ProductRouterModule],
  exports: [],
})
export class ProductDetailsModule {}
