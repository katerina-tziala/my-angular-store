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
