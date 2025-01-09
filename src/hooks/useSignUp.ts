import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useAuthData from './useAuthData';

import { SignUpSchema } from '@/utils/validation/userSchema';
import { signUp } from '@/api/firebase/signUp';
import { User } from '@/types/User.type';

export const useSignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<User>({
    resolver: yupResolver(SignUpSchema),
    mode: 'onChange',
  });

  const { saveAuthData } = useAuthData();

  const onSubmit: SubmitHandler<User> = async ({ name, email, password }) => {
    const newUser = await signUp({ name, email, password });

    if (newUser) {
      saveAuthData(newUser);
      reset();
    }
  };

  return { register, handleSubmit, errors, isValid, onSubmit };
};
