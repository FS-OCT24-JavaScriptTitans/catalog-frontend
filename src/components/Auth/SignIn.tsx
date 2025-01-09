import { AuthForm } from '../../UI/AuthForm/AuthForm';

import { PATH } from '@/constants/path';
import { useSignIn } from '@/hooks/useSignIn';

export const SignIn = () => {
  const { register, handleSubmit, errors, onSubmit, isValid } = useSignIn();

  return (
    <AuthForm
      title="Sign In"
      fields={[
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Password', type: 'password', name: 'password' },
      ]}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      isValid={isValid}
      linkPath={PATH.SIGN_UP}
      linkLabel="sign up"
      buttonLabel="Sign In"
    />
  );
};
