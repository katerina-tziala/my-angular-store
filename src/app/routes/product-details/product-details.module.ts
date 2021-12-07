import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRouterModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { LoaderModule } from 'src/app/shared/presentational-components/loader/loader.module';
import { CartButtonModule } from 'src/app/shared/components/cart-button/cart-button.module';
import { ProductInfoModule } from 'src/app/shared/product-info/product-info.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    LoaderModule,
    ProductRouterModule,
    ProductInfoModule,
    CartButtonModule,
  ],
  exports: [],
})
export class ProductDetailsModule {}
