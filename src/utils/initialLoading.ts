import { SetStateAction } from 'react';

import { PATH } from '@/constants/path';

const setInitialLoading = (setLoading: React.Dispatch<SetStateAction<boolean>>) => (setLoading(false), true);

export const initialLoading = (
  user: unknown,
  refreshToken: string | null,
  pathname: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  switch (true) {
    case !!user: {
      return setInitialLoading(setLoading);
    }

    case !user && !refreshToken && pathname.startsWith(PATH.AUTH): {
      return setInitialLoading(setLoading);
    }

    case !user && !refreshToken: {
      return setInitialLoading(setLoading);
    }

    default:
      return false;
  }
};
