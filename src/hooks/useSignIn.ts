import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useAuthData from './useAuthData';

import { SignInSchema } from '@/utils/validation/userSchema';
import { signIn } from '@/api/firebase/signIn';
import { User } from '@/types/User.type';

export const useSignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Pick<User, 'email' | 'password'>>({
    resolver: yupResolver(SignInSchema),
    mode: 'onChange',
  });

  const { saveAuthData } = useAuthData();

  const onSubmit: SubmitHandler<Pick<User, 'email' | 'password'>> = async ({ email, password }) => {
    const newUser = await signIn({ email, password });

    if (newUser) {
      saveAuthData(newUser);
      reset();
    }
  };

  return { register, handleSubmit, errors, isValid, onSubmit };
};
