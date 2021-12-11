import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessageModule } from 'src/app/shared/components/alert-message/alert-message.module';
import { ProductsListComponent } from './products-list.component';
import { ProductListItemModule } from './product-list-item/product-list-item.module';

@NgModule({
  imports: [CommonModule, AlertMessageModule, ProductListItemModule],
  declarations: [ProductsListComponent],
  exports: [ProductsListComponent]
})
export class ProductsListModule {}
