import { CartProduct } from '@/types/Cart.types';

export const getFormatedPrice = (price: number) => parseFloat(price.toFixed(2)).toLocaleString('uk-UA');

export const getProductPrice = ({ priceDiscount, priceRegular }: CartProduct) =>
  priceDiscount ? priceDiscount : priceRegular;

export const getTotalProductsPrice = (product: CartProduct) => getProductPrice(product) * product.quantity;
