import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/models';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent {
  @Input() public product!: Product;
}
