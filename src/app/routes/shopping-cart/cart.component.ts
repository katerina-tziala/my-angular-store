import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItem } from 'src/app/models/models';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public orderItems$: Observable<OrderItem[]>;

  constructor(private cartService: CartService) {
    this.orderItems$ = this.cartService.getOrderItems$();
  }

  public emptyCart(): void {
    this.cartService.emptyCart();
  }

  public removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
  }
}
