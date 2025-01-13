import { CartProduct } from '@/types/Cart.types';

export const increaseProductQuantity = (cart: CartProduct[], id: string): CartProduct[] =>
  cart.map((product) => {
    if (product.id === id) product.quantity += 1;

    return product;
  });

export const decreaseProductQuantity = (cart: CartProduct[], id: string): CartProduct[] =>
  cart.filter((product) => {
    if (product.id === id) product.quantity -= 1;

    return product.quantity;
  });
