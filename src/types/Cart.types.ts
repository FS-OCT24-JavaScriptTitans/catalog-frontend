import { Product } from './Product.type';

export interface CartProduct extends Product {
  quantity: number;
}

export interface CartSummary {
  totalQuantity: number;
  totalPrice: number;
  totalDiscountPrice: number;
}
