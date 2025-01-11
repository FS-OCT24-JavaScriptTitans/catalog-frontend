//eslint-disable-next-line
import { useCookies } from 'react-cookie';

import { COOKIES } from '@/constants/cookies';

const useTokens = () => {
  const [cookies, setCookie, removeCookie] = useCookies([COOKIES.ACCESS_TOKEN, COOKIES.REFRESH_TOKEN]);

  const setTokens = (accessToken: string, refreshToken: string) => {
    setCookie(COOKIES.ACCESS_TOKEN, accessToken, { path: '/', secure: true, sameSite: 'strict' });
    setCookie(COOKIES.REFRESH_TOKEN, refreshToken, { path: '/', secure: true, sameSite: 'strict' });
  };

  const removeTokens = () => {
    removeCookie(COOKIES.ACCESS_TOKEN, { path: '/' });
    removeCookie(COOKIES.REFRESH_TOKEN, { path: '/' });
  };

  const getTokens = () => ({
    accessToken: cookies[COOKIES.ACCESS_TOKEN],
    refreshToken: cookies[COOKIES.REFRESH_TOKEN],
  });

  return { getTokens, setTokens, removeTokens };
};

export default useTokens;
