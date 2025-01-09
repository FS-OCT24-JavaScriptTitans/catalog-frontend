import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';

import { SignUpSchema } from '@/utils/validation/userSchema';
import { signUp } from '@/api/firebase/signUp';
import { User } from '@/types/User.type';
import { PATH } from '@/constants/path';

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

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<User> = async ({ name, email, password }) => {
    const newUser = await signUp({ name, email, password });

    if (newUser) {
      navigate(PATH.HOME);

      reset();
    }
  };

  return { register, handleSubmit, errors, isValid, onSubmit };
};
