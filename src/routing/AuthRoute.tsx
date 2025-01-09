import { ReactNode, useLayoutEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { PATH } from '@/constants/path';
import { useAppSelector } from '@/redux/hooks';
import useTokens from '@/hooks/useTokens';
import { signInWithToken } from '@/api/firebase/signInWithToken';
import useAuthData from '@/hooks/useAuthData';

const AuthRoute = (): ReactNode => {
  const location = useLocation();
  const { getTokens } = useTokens();
  const { refreshToken } = getTokens();
  const { saveAuthData } = useAuthData();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  useLayoutEffect(() => {
    if (refreshToken && !user) {
      signInWithToken(refreshToken)
        .then((res) => {
          if (res) {
            saveAuthData(res);
          }
        })
        .catch(() => {
          navigate(PATH.SIGN_IN);
        });
    }
  }, [refreshToken, user, saveAuthData, navigate]);

  if (user && (location.pathname === PATH.SIGN_IN || location.pathname === PATH.SIGN_UP)) {
    return <Navigate to={PATH.HOME} />;
  }

  return <Outlet />;
};

export default AuthRoute;
