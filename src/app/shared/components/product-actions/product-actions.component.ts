import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderItem, Product } from 'src/app/shared/models/models';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-actions',
  templateUrl: './product-actions.component.html',
  styleUrls: ['./product-actions.component.scss']
})
export class ProductActionsComponent {
  @Input() public product!: Product;

  public productInOrder$: Observable<OrderItem | undefined>;

  constructor(private cartService: CartService) {
    this.productInOrder$ = this.cartService
      .getOrderItems$()
      .pipe(
        map((items: OrderItem[]) =>
          items.find(item => item.id === this.product.id)
        )
      );
  }

  public addInCart(): void {
    this.cartService.addProductInCart(this.product);
  }
}
