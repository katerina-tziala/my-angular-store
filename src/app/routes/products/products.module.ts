import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductRouterModule } from './product-routing.module';
import { ProductRatingModule } from 'src/app/shared/presentational-components/product-rating/product-rating.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductListItemComponent } from './products-list/product-list-item/product-list-item.component';
import { LoaderModule } from 'src/app/shared/presentational-components/loader/loader.module';
import { CartButtonModule } from 'src/app/shared/components/cart-button/cart-button.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductListItemComponent,
  ],
  imports: [
    CommonModule,
    LoaderModule,
    CartButtonModule,
    ProductRouterModule,
    ProductRatingModule,
  ],
  exports: [],
})
export class ProductsModule {}
