import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderItem, OrderSummary, Product } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private DUMMY = [
    {
      category: "men's clothing",
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
      id: 3,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      price: 55.99,
      quantity: 2,
      rating: { rate: 4.7, count: 500 },
      title: 'Mens Cotton Jacket',
    },
    {
      category: "men's clothing",
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      id: 2,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      price: 22.3,
      quantity: 1,
      rating: { rate: 4.1, count: 259 },
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
    },
    {
      category: 'jewelery',
      description:
        'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
      id: 8,
      image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
      price: 10.99,
      quantity: 3,
      rating: { rate: 1.9, count: 100 },
      title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    },
  ];
  private orderItems: BehaviorSubject<OrderItem[]> = new BehaviorSubject<
    OrderItem[]
  >(this.DUMMY);

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
    console.log(this.orderItems.value);
  }

  public getNumberOfItemsInOrder(orderItems: OrderItem[]): number {
    return orderItems.reduce((total: number, orderItem: OrderItem) => {
      return total + orderItem.quantity;
    }, 0);
  }

  public getOrderTotal(orderItems: OrderItem[]): number {
    return orderItems.reduce((total: number, orderItem: OrderItem) => {
      return total + orderItem.quantity * orderItem.price;
    }, 0);
  }

  public getOrderSummary(orderItems: OrderItem[]): OrderSummary {
    const numberOfItems = this.getNumberOfItemsInOrder(orderItems);
    const total = this.getOrderTotal(orderItems);
    return { numberOfItems, total };
  }
}
