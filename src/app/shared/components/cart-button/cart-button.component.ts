import { Component, Input } from '@angular/core';
import { Product } from '../../models/models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
})
export class CartButtonComponent {
  @Input()
  public product!: Product;

  constructor(private cartService: CartService) {}

  public get inCart(): boolean {
    return this.cartService.productInCart(this.product.id);
  }

  public addInCart(): void {
    this.cartService.addProductInCart(this.product);
  }
}
