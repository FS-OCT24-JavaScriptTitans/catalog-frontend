import { useTranslation } from 'react-i18next';

import { useSignUp } from '@/hooks/useSignUp';
import { AuthForm } from '@/UI/AuthForm/AuthForm';

export const SignUp = () => {
  const { register, handleSubmit, errors, onSubmit, isValid } = useSignUp();

  const { t } = useTranslation();

  return (
    <AuthForm
      fields={[
        { label: t('authPage.name'), type: 'text', name: 'name' },
        { label: t('authPage.email'), type: 'email', name: 'email' },
        { label: t('authPage.password'), type: 'password', name: 'password' },
      ]}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      isValid={isValid}
      buttonLabel={t('authPage.signUp')}
    />
  );
};
