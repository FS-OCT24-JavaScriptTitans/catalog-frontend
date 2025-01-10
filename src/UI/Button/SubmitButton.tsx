import { FC, useState } from 'react';

import styles from './Button.module.scss';

type Props = {
  label: string;
  variant?: 'primary' | 'selected';
};

export const SubmitButton: FC<Props> = ({ label, variant = 'primary' }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const buttonVariant = isToggled ? 'selected' : variant;

  return (
    <button
      type="submit"
      className={`${styles.button} ${styles[`button--${buttonVariant}`]}`}
      onClick={handleClick}
      aria-pressed={isToggled}
    >
      {label}
    </button>
  );
};
