import { Navigate, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import { Loader } from './components/Loader/Loader';
import { PATH } from './constants/path';
import { Pages } from './routing/routes';
import AuthRoute from './routing/AuthRoute';
import { App } from './App';
import { ProductRoutes } from './routing/ProductRoutes';

export const Root = () => (
  <BrowserRouter>
    <ToastContainer />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path={PATH.HOME}
          element={<App />}
        >
          <Route element={<AuthRoute />}>
            {/*  HOME */}
            <Route
              index
              element={<Pages.HomePage />}
            />
            <Route
              path="/home"
              element={<Navigate to={PATH.HOME} />}
            />
            {/*  CART */}
            <Route
              path={PATH.CART}
              element={<Pages.CartPage />}
            />

            {/*  SEARCH */}
            <Route
              path={PATH.SEARCH__PRODUCT}
              element={<Pages.SearchProductPage />}
            />

            {...ProductRoutes}

            {/* ORDERS */}
            <Route
              path={PATH.ORDERS}
              element={<Pages.OrdersPage />}
            />

            {/*  FAVORITES */}
            <Route
              path={PATH.FAVORITES}
              element={<Pages.FavoritesPage />}
            />

            {/* Auth Route */}
            <Route
              path={PATH.AUTH}
              element={<Pages.AuthPage />}
            >
              <Route
                path={`/auth${PATH.SIGN_IN}`}
                element={<Pages.SignInPage />}
              />
              <Route
                path={`/auth${PATH.SIGN_UP}`}
                element={<Pages.SignUpPage />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
