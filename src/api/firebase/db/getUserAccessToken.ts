import { IdTokenResult, User } from 'firebase/auth';

import { convertDateToMs } from '@/utils/convertDateToMs';

type TGetUserAccessToken = (user: User) => Promise<{
  accessToken: IdTokenResult;
  expirationTime: number;
}>;

const getUserAccessToken: TGetUserAccessToken = async (user) => {
  const accessToken = await user.getIdTokenResult();
  const expirationTime = convertDateToMs(accessToken.expirationTime);

  return { accessToken, expirationTime };
};

export default getUserAccessToken;
