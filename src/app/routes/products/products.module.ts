import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductRouterModule } from './product-routing.module';
import { ProductRatingModule } from 'src/app/shared/presentational-components/product-rating/product-rating.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductListItemComponent } from './products-list/product-list-item/product-list-item.component';
import { LoaderModule } from 'src/app/shared/presentational-components/loader/loader.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductListItemComponent,
  ],
  imports: [CommonModule, LoaderModule, ProductRouterModule, ProductRatingModule],
  exports: [],
})
export class ProductsModule {}
