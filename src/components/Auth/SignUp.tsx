import { useSignUp } from '@/hooks/useSignUp';
import { AuthForm } from '@/UI/AuthForm/AuthForm';

export const SignUp = () => {
  const { register, handleSubmit, errors, onSubmit, isValid } = useSignUp();

  return (
    <AuthForm
      fields={[
        { label: 'Name', type: 'text', name: 'name' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Password', type: 'password', name: 'password' },
      ]}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      isValid={isValid}
      buttonLabel="Sign Up"
    />
  );
};
