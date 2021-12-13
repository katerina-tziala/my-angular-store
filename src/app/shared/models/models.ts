export interface Rating {
  count: number;
  rate: number;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: Rating;
}

export interface OrderItem extends Product {
  quantity: number;
}

export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
}

export interface Order {
  createdAt: Date;
  number: number;
  customer: Customer;
  items: OrderItem[];
}

export enum CartMessageType {
  Added = 'added',
  Removed = 'removed'
}
export interface CartMessage {
  type: CartMessageType;
  item: Product | OrderItem;
}
