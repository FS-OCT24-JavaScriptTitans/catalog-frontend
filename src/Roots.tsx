import { Navigate, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import { App } from './App';
import { Loader } from './components/Loader/Loader';
import { PATH } from './constants/path';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
// import AuthRoute from './routing/AuthRoute';

export const Root = () => (
  <BrowserRouter>
    <ToastContainer />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path={PATH.HOME}
          element={<App />}
        >
          <Route
            path="/home"
            element={<Navigate to={PATH.HOME} />}
          />
        </Route>

        {/* <Route element={<AuthRoute />}> */}
        <Route
          path={PATH.SIGN_IN}
          element={<SignInPage />}
        />
        <Route
          path={PATH.SIGN_UP}
          element={<SignUpPage />}
        />
        {/* </Route> */}
      </Routes>
    </Suspense>
  </BrowserRouter>
);
