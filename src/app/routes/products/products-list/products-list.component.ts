import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  @Input() public products: Product[] = [];

  public trackProduct(_: number, product: Product): number {
    return product.id;
  }
}
