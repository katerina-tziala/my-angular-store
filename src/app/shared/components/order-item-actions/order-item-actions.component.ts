import { Component, Input } from '@angular/core';
import { OrderItem } from 'src/app/shared/models/models';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-order-item-actions',
  templateUrl: './order-item-actions.component.html',
  styleUrls: ['./order-item-actions.component.scss']
})
export class OrderItemActionsComponent {
  @Input() public item!: OrderItem;

  constructor(private cartService: CartService) {}

  public removeFromCart(): void {
    this.cartService.removeFromCart(this.item.id);
  }

  public onQuantityUpdate(quantity: number | undefined): void {
    if (quantity) {
      const updatedItem = { ...this.item, quantity };
      this.cartService.updateItem(updatedItem);
    }
  }
}
