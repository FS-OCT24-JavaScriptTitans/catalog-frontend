import { Route } from 'react-router-dom';

import { Pages } from './routes';

import { PATH } from '@/constants/path';

const routes = [
  { path: PATH.PHONES, element: <Pages.ProductsListPage /> },
  { path: PATH.TABLETS, element: <Pages.ProductsListPage /> },
  { path: PATH.ACCESSORIES, element: <Pages.ProductsListPage /> },
  { path: PATH.PHONES + PATH.PRODUCT, element: <Pages.ProductPage /> },
  { path: PATH.TABLETS + PATH.PRODUCT, element: <Pages.ProductPage /> },
  { path: PATH.ACCESSORIES + PATH.PRODUCT, element: <Pages.ProductPage /> },
];

export const ProductRoutes = routes.map(({ path, element }) => (
  <Route
    key={path}
    path={path}
    element={element}
  />
));
