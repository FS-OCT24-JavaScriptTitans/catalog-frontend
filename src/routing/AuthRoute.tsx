import { ReactNode, useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { PATH } from '@/constants/path';
import { useAppSelector } from '@/redux/hooks';
import useTokens from '@/hooks/useTokens';
import { signInWithToken } from '@/api/firebase/signInWithToken';
import useAuthData from '@/hooks/useAuthData';
import { Loader } from '@/components/Loader/Loader';

const AuthRoute = (): ReactNode => {
  const location = useLocation();
  const { getTokens } = useTokens();
  const { refreshToken } = getTokens();
  const { saveAuthData } = useAuthData();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (refreshToken && !user) {
      setLoading(true);

      signInWithToken(refreshToken)
        .then((res) => {
          if (res) {
            saveAuthData(res);
          }
        })
        .catch(() => {
          navigate(PATH.SIGN_IN);
        })
        .finally(() => setLoading(false));
    }
  }, [refreshToken, user, saveAuthData, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  const isAuthPath =
    location.pathname === `${PATH.AUTH}/${PATH.SIGN_IN}` || location.pathname === `${PATH.AUTH}/${PATH.SIGN_UP}`;

  if (!isLoading && user && isAuthPath) {
    return <Navigate to={PATH.HOME} />;
  }

  return <Outlet />;
};

export default AuthRoute;
