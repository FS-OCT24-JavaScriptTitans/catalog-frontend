import { useForm } from 'react-hook-form';

import { signIn } from '@/api/firebase/signIn';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const { email, password } = data;

        signIn({ email, password });
      })}
      style={{ width: '300px', margin: '400px auto' }}
    >
      <input {...register('email')} />
      <input {...register('password')} />
      <button type="submit">Sign In</button>
    </form>
  );
};
