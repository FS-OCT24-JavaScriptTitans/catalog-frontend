import { CartProduct, CartSummary } from '@/types/Cart.types';

const intitialState = { totalQuantity: 0, totalPrice: 0, totalDiscountPrice: 0 };

export const calculateCartSummary = (cart: CartProduct[]): CartSummary =>
  cart.reduce((summary, { quantity, priceRegular, priceDiscount }) => {
    summary.totalQuantity += quantity;
    summary.totalPrice += quantity * priceRegular;
    summary.totalDiscountPrice += quantity * priceDiscount;

    return summary;
  }, intitialState);
