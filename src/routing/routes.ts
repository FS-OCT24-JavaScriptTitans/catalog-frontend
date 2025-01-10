import { lazy } from 'react';

export const Pages = {
  SignInPage: lazy(() => import('../pages/SignInPage/SignInPage')),
  SignUpPage: lazy(() => import('../pages/SignUpPage/SignUpPage')),
  CartPage: lazy(() => import('../pages/CartPage/CartPage')),
  HomePage: lazy(() => import('../pages/HomePage/HomePage')),
  FavoritesPage: lazy(() => import('../pages/FavoritesPage/FavoritesPage')),
};
