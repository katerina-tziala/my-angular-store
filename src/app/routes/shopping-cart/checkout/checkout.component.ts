import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, Order } from 'src/app/models/models';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  public order: Order | undefined;

  constructor(private cartService: CartService, private router: Router) {
    if (!this.cartService.itemsInCart) {
      this.router.navigate(['/shoppingcart']);
    }
  }

  public onOrderConfirmation(customer: Customer): void {
    const number = Date.now();
    const createdAt = new Date();
    const items = this.cartService.getOrderItems();
    this.order = { createdAt, number, customer, items };
    // TODO: send a call to create the order
    this.cartService.emptyCart();
  }
}
