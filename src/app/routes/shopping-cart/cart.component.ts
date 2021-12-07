import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderItem, OrderSummary } from 'src/app/models/models';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  // public orderSummary$: Observable<OrderSummary>;
  public orderItems$: Observable<OrderItem[]>;

  constructor(private cartService: CartService, private router: Router) {
    // this.router.navigate(['/your-path'])
    this.orderItems$ = this.cartService.getOrderItems$();
  }

  ngOnInit() {
    // redirectTo
  }

  public emptyCart(): void {
    this.cartService.emptyCart();
  }

  public removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
  }
}
