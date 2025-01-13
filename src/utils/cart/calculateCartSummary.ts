import { CartProduct, CartSummary } from '@/types/Cart.types';

const intitialState = { totalQuantity: 0, totalPrice: 0, totalDiscountPrice: 0 };

export const calculateCartSummary = (cart: CartProduct[]): CartSummary =>
  cart.reduce(
    (summary, { quantity, priceRegular, priceDiscount }) => ({
      totalQuantity: summary.totalQuantity + quantity,
      totalPrice: summary.totalPrice + quantity * priceRegular,
      totalDiscountPrice: summary.totalDiscountPrice + quantity * priceDiscount,
    }),
    { ...intitialState },
  );
