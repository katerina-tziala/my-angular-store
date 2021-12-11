import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderItem } from 'src/app/models/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.scss'],
})
export class ShoppingCartSummaryComponent {
  public total$: Observable<number>;

  constructor(private cartService: CartService) {
    this.total$ = this.cartService
      .getOrderItems$()
      .pipe(
        map((orderItems: OrderItem[]) =>
          this.cartService.getOrderTotal(orderItems)
        )
      );
  }
}
