import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderItem } from 'src/app/shared/models/models';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-indicator',
  templateUrl: './cart-indicator.component.html',
  styleUrls: ['./cart-indicator.component.scss'],
})
export class CartIndicatorComponent {
  public numberOfItems$: Observable<number>;

  constructor(private cartService: CartService) {
    this.numberOfItems$ = this.cartService
      .getOrderItems$()
      .pipe(
        map((orderItems: OrderItem[]) =>
          this.cartService.getNumberOfItemsInOrder(orderItems)
        )
      );
  }
}
