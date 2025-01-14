import { useTranslation } from 'react-i18next';

import { AuthForm } from '../../UI/AuthForm/AuthForm';

import { useSignIn } from '@/hooks/useSignIn';

export const SignIn = () => {
  const { register, handleSubmit, errors, onSubmit, isValid } = useSignIn();

  const { t } = useTranslation();

  return (
    <AuthForm
      fields={[
        { label: t('authPage.email'), type: 'email', name: 'email' },
        { label: t('authPage.password'), type: 'password', name: 'password' },
      ]}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      isValid={isValid}
      buttonLabel={t('authPage.signIn')}
    />
  );
};
