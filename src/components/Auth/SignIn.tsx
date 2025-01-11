import { AuthForm } from '../../UI/AuthForm/AuthForm';

import { useSignIn } from '@/hooks/useSignIn';

export const SignIn = () => {
  const { register, handleSubmit, errors, onSubmit, isValid } = useSignIn();

  return (
    <AuthForm
      fields={[
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Password', type: 'password', name: 'password' },
      ]}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      isValid={isValid}
      buttonLabel="Sign In"
    />
  );
};
