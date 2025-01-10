import { isAxiosError } from 'axios';

import { delay } from './delay';

export const handleRequest = async <T>(request: Promise<T>): Promise<T> => {
  try {
    await delay(300);

    return await request;
  } catch (err) {
    if (isAxiosError(err) && err.response && typeof err.response.data.message === 'string') {
      throw err.response.data.message;
    }

    throw 'An unexpected error occurred';
  }
};
