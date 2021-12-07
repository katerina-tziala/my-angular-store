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

export interface OrderSummary {
  numberOfItems: number;
  total: number;
}