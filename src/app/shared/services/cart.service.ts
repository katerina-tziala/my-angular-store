import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderItem, Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private orderItems: BehaviorSubject<OrderItem[]> = new BehaviorSubject<
    OrderItem[]
  >([]);

  public get itemsInCart(): boolean {
    const items = [...this.orderItems.value];
    return !!items.length;
  }

  public getOrderItems$(): Observable<OrderItem[]> {
    return this.orderItems.asObservable();
  }

  public getOrderItems(): OrderItem[] {
    return this.orderItems.value;
  }

  public productInCart(id: number): boolean {
    const product = this.orderItems.value.find(product => product.id === id);
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

  public getNumberOfItemsInOrder(orderItems: OrderItem[]): number {
    return orderItems.reduce((total: number, orderItem: OrderItem) => {
      return total + orderItem.quantity;
    }, 0);
  }

  public getOrderTotal(orderItems: OrderItem[]): number {
    return orderItems.reduce((total: number, orderItem: OrderItem) => {
      return total + this.getItemTotal(orderItem);
    }, 0);
  }

  public getItemTotal(orderItem: OrderItem): number {
    return orderItem.quantity * orderItem.price;
  }

  public emptyCart(): void {
    this.orderItems.next([]);
  }

  public removeFromCart(id: number): void {
    if (!this.productInCart(id)) {
      return;
    }
    const items = [...this.orderItems.value].filter(item => item.id !== id);
    this.orderItems.next(items);
  }

  public updateItem(updatedItem: OrderItem): void {
    const items = [...this.orderItems.value].map(item => {
      if (item.id === updatedItem.id) {
        return { ...updatedItem };
      }
      return item;
    });
    this.orderItems.next(items);
  }
}
