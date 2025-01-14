import { useTranslation } from 'react-i18next';

import { signInWithGoogle } from '@/api/firebase/signInWithGoogle';
import useAuthData from '@/hooks/useAuthData';
import { Button } from '@/UI/Button/Button';

const GoogleButton = () => {
  const { saveAuthData } = useAuthData();

  const { t } = useTranslation();

  const handleLoginWithGoogle = async (): Promise<void> => {
    const newUser = await signInWithGoogle();

    if (newUser) saveAuthData(newUser);
  };

  return (
    <Button
      label={t('authPage.google')}
      onClick={handleLoginWithGoogle}
      isSelected={true}
    />
  );
};

export default GoogleButton;
