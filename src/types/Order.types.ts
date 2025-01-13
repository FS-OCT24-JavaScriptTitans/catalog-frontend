import { CartProduct } from './Cart.types';

export interface Order {
  id: string;
  products: CartProduct[];
  date: string;
  userId: string;
}
