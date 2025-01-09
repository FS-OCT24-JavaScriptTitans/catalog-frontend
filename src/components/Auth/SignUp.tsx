import { useForm } from 'react-hook-form';

import { signUp } from '@/api/firebase/signUp';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const { email, name, password } = data;

        signUp({ email, name, password });
      })}
      style={{ width: '300px', margin: '400px auto' }}
    >
      <input {...register('name')} />
      <input {...register('email')} />
      <input {...register('password')} />
      <button type="submit">Sign Up</button>
    </form>
  );
};
