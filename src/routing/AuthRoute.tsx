import { ReactNode } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { PATH } from '@/constants/path';

const AuthRoute = (): ReactNode => {
  const location = useLocation();

  if (location.pathname === PATH.SIGN_IN || location.pathname === PATH.SIGN_UP) {
    return <Navigate to={location.pathname} />;
  }

  return <Outlet />;
};

export default AuthRoute;
