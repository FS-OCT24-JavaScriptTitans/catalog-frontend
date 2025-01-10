import { lazy } from 'react';

export const Pages = {
  PhonesPage: lazy(() => import('../pages/PhonesPage/PhonesPage')),
  SignInPage: lazy(() => import('../pages/SignInPage/SignInPage')),
  SignUpPage: lazy(() => import('../pages/SignUpPage/SignUpPage')),
  CartPage: lazy(() => import('../pages/CartPage/CartPage')),
  HomePage: lazy(() => import('../pages/HomePage/HomePage')),
};
