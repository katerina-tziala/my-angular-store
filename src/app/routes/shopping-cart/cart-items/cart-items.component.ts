import { Component, Input } from '@angular/core';
import { OrderItem } from 'src/app/shared/models/models';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent {
  @Input() cartItems: OrderItem[] = [];

  public trackItem(_: number, item: OrderItem): number {
    return item.id;
  }
}
