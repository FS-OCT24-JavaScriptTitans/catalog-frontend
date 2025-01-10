import s from './Button.module.scss';

import { signInWithGoogle } from '@/api/firebase/signInWithGoogle';
import useAuthData from '@/hooks/useAuthData';

const GoogleButton = () => {
  const { saveAuthData } = useAuthData();

  const handleLoginWithGoogle = async (): Promise<void> => {
    const newUser = await signInWithGoogle();

    if (newUser) saveAuthData(newUser);
  };

  return (
    <button
      type="button"
      className={`${s.button} ${s[`button--selected`]}`}
      onClick={handleLoginWithGoogle}
      style={{ width: '100%' }}
    >
      Sign In With Google
    </button>
  );
};

export default GoogleButton;
