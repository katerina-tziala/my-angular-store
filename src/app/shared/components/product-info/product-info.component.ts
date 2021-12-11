import { Component, Input } from '@angular/core';
import { OrderItem, Product } from 'src/app/shared/models/models';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent {
  @Input() public product!: OrderItem | Product;
}
