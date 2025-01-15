import { lazy } from 'react';

export const Pages = {
  ProductsListPage: lazy(() => import('../pages/ProductsListPage/ProductPage')),
  SignInPage: lazy(() => import('../pages/SignInPage/SignInPage')),
  SignUpPage: lazy(() => import('../pages/SignUpPage/SignUpPage')),
  CartPage: lazy(() => import('../pages/CartPage/CartPage')),
  HomePage: lazy(() => import('../pages/HomePage/HomePage')),
  FavoritesPage: lazy(() => import('../pages/FavoritesPage/FavoritesPage')),
  AuthPage: lazy(() => import('../pages/AuthPage/AuthPage')),
  TabletsPage: lazy(() => import('../pages/TabletsPage/TabletsPage')),
  AccessoriesPage: lazy(() => import('../pages/AccessoriesPage/AccessoriesPage')),
  OrdersPage: lazy(() => import('../pages/OrdersPage/OrdersPage')),
  ProductPage: lazy(() => import('../pages/ProductPage/ProductPage')),
};
