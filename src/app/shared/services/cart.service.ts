import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderItem, Product } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private orderItems: BehaviorSubject<OrderItem[]> = new BehaviorSubject<
    OrderItem[]
  >([]);

  constructor() {
    // console.log(this.orderItems);
  }

  public getOrderItems$(): Observable<OrderItem[]> {
    return this.orderItems.asObservable();
  }

  public productInCart(id: number): boolean {
    const product = this.orderItems.value.find((product) => product.id === id);
    return !!product;
  }

  public addProductInCart(product: Product): void {
    if (this.productInCart(product.id)) {
      return;
    }
    const items = [...this.orderItems.value];
    items.push({ ...product, quantity: 1 });
    this.orderItems.next(items);
  }
}
