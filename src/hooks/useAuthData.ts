import { useNavigate } from 'react-router';

import useTokens from './useTokens';

import { useAppDispatch } from '@/redux/hooks';
import { ResponseUser } from '@/types/User.type';
import notification from '@/utils/notification';
import { removeUser, setUser } from '@/redux/slices/user/user.slice';
import { PATH } from '@/constants/path';

const useAuthData = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setTokens, removeTokens } = useTokens();

  const saveAuthData = (newUser: ResponseUser | string) => {
    if (typeof newUser !== 'string') {
      dispatch(setUser(newUser));
      setTokens(newUser.accessToken, newUser.refreshToken);

      navigate(PATH.HOME);
    } else notification('error', newUser);
  };

  const removeAuthData = () => {
    dispatch(removeUser());
    removeTokens();
    navigate(PATH.SIGN_IN);
  };

  return { saveAuthData, removeAuthData };
};

export default useAuthData;
