import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  CartMessageType,
  CartMessage,
  Product,
  OrderItem
} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CartModalMessageService {
  private cartMessage: BehaviorSubject<CartMessage | null> =
    new BehaviorSubject<CartMessage | null>(null);

  public getMessage$(): Observable<CartMessage | null> {
    return this.cartMessage.asObservable();
  }

  public addedInCart(product: Product): void {
    this.cartMessage.next({
      type: CartMessageType.Added,
      item: { ...product }
    });
  }

  public removedFromCart(item: OrderItem): void {
    this.cartMessage.next({
      type: CartMessageType.Removed,
      item
    });
  }

  public removeMessage(): void {
    this.cartMessage.next(null);
  }
}
