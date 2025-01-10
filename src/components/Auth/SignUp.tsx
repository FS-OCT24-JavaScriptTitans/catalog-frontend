import { PATH } from '@/constants/path';
import { useSignUp } from '@/hooks/useSignUp';
import { AuthForm } from '@/UI/AuthForm/AuthForm';

export const SignUp = () => {
  const { register, handleSubmit, errors, onSubmit, isValid } = useSignUp();

  return (
    <AuthForm
      title="Sign Up"
      fields={[
        { label: 'Name', type: 'text', name: 'name' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Password', type: 'password', name: 'password' },
      ]}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      isValid={isValid}
      linkPath={PATH.SIGN_IN}
      linkLabel="sign in"
      buttonLabel="Sign Up"
    />
  );
};
