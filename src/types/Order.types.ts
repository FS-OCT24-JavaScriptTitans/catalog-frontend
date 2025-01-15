import { CartProduct } from './Cart.types';

export interface Order {
  id: string;
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string;
  postcode: number;
  phone: string;
  email: string;
  products: CartProduct[];
  totalPrice: number;
}
