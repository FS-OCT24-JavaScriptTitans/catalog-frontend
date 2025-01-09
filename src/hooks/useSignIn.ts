import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';

import { SignInSchema } from '@/utils/validation/userSchema';
import { signIn } from '@/api/firebase/signIn';
import { User } from '@/types/User.type';
import { PATH } from '@/constants/path';

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

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Pick<User, 'email' | 'password'>> = async ({ email, password }) => {
    const newUser = await signIn({ email, password });

    if (newUser) {
      navigate(PATH.HOME);
      reset();
    }
  };

  return { register, handleSubmit, errors, isValid, onSubmit };
};
