import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductRouterModule } from './product-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductListItemComponent } from './products-list/product-list-item/product-list-item.component';
import { LoaderModule } from 'src/app/shared/presentational-components/loader/loader.module';
import { CartButtonModule } from 'src/app/shared/components/cart-button/cart-button.module';
import { ProductInfoModule } from 'src/app/shared/product-info/product-info.module';

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
    ProductInfoModule,
  ],
  exports: [],
})
export class ProductsModule {}
