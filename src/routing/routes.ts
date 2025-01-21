import { lazy } from 'react';

export const Pages = {
  ProductsListPage: lazy(() => import('../pages/ProductsListPage/ProductsListPage')),
  SignInPage: lazy(() => import('../pages/SignInPage/SignInPage')),
  SignUpPage: lazy(() => import('../pages/SignUpPage/SignUpPage')),
  CartPage: lazy(() => import('../pages/CartPage/CartPage')),
  HomePage: lazy(() => import('../pages/HomePage/HomePage')),
  FavoritesPage: lazy(() => import('../pages/FavoritesPage/FavoritesPage')),
  AuthPage: lazy(() => import('../pages/AuthPage/AuthPage')),
  OrdersPage: lazy(() => import('../pages/OrdersPage/OrdersPage')),
  ProductPage: lazy(() => import('../pages/ProductPage/ProductPage')),
  SearchProductPage: lazy(() => import('../pages/SearchProductPage/SearchProductPage')),
  NotFoundPage: lazy(() => import('../pages/NotFoundPage/NotFoundPage')),
  RightsPage: lazy(() => import('../pages/RightsPage/RightsPage')),
  ContactsPage: lazy(() => import('../pages/ContactsPage/ContactsPage')),
};
