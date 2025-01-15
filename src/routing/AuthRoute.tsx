import { ReactNode, useLayoutEffect, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { shallowEqual } from 'react-redux';

import { PATH } from '@/constants/path';
import { useAppSelector } from '@/redux/hooks';
import useTokens from '@/hooks/useTokens';
import { signInWithToken } from '@/api/firebase/signInWithToken';
import useAuthData from '@/hooks/useAuthData';
import { Loader } from '@/components/Loader/Loader';
import { selectUser } from '@/redux/selectors';
import { initialLoading } from '@/utils/іnitialLoading';

const AuthRoute = (): ReactNode => {
  const { pathname } = useLocation();
  const { getTokens } = useTokens();
  const { refreshToken } = getTokens();
  const { saveAuthData } = useAuthData();
  const navigate = useNavigate();
  const user = useAppSelector(selectUser, shallowEqual);
  const [isLoading, setLoading] = useState(true);

  useLayoutEffect(() => {
    if (initialLoading(user, refreshToken, pathname, setLoading)) {
      return;
    }

    signInWithToken(refreshToken)
      .then((res) => {
        if (res) {
          saveAuthData(res);
          navigate(pathname.startsWith(PATH.AUTH) ? PATH.HOME : pathname);
        }
      })
      .catch(() => {
        navigate(PATH.AUTH + PATH.SIGN_IN);
      })
      .finally(() => setLoading(false));
  }, [refreshToken, user, saveAuthData, navigate, pathname]);

  if (isLoading) return <Loader />;

  if (!isLoading) {
    return user && pathname.startsWith(PATH.AUTH) ? <Navigate to={PATH.HOME} /> : <Outlet />;
  }

  return null;
};

export default AuthRoute;
