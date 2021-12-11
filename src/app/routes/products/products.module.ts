import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductRouterModule } from './product-routing.module';
import { ProductsListModule } from './products-list/products-list.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    LoaderModule,
    ProductRouterModule,
    ProductsListModule
  ],
  exports: [],
})
export class ProductsModule {}
