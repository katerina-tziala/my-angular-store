import { Component, Input, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/shared/models/models';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
  @Input() public item!: OrderItem;

  constructor(private cartService: CartService) {}

  ngOnInit() {}
  public removeFromCart(): void {
    this.cartService.removeFromCart(this.item.id);
  }
}
