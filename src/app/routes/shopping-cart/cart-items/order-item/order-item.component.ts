import { Component, Input } from '@angular/core';
import { OrderItem } from 'src/app/models/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent {
  @Input() public item!: OrderItem;

  constructor(private cartService: CartService) {}

  public get totalAmount(): number {
    return this.cartService.getItemTotal(this.item);
  }
}
