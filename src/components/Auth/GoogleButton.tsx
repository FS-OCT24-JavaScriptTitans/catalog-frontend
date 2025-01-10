import { signInWithGoogle } from '@/api/firebase/signInWithGoogle';
import useAuthData from '@/hooks/useAuthData';
import { Button } from '@/UI/Button/Button';

const GoogleButton = () => {
  const { saveAuthData } = useAuthData();

  const handleLoginWithGoogle = async (): Promise<void> => {
    const newUser = await signInWithGoogle();

    if (newUser) saveAuthData(newUser);
  };

  return (
    <Button
      label="Sign in with Google"
      onClick={handleLoginWithGoogle}
      isSelected={true}
      secondaryLabel="Sign in with Google"
    />
  );
};

export default GoogleButton;
