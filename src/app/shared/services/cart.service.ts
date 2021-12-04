import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderItem } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private orderItems: BehaviorSubject<OrderItem[]> = new BehaviorSubject<
    OrderItem[]
  >([]);

  constructor() {
    console.log(this.orderItems);
  }
}
