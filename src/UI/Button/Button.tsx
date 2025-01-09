import React, { useState } from 'react';

import styles from './Button.module.scss';

type Props = {
  label: string;
  secondaryLabel?: string;
  onClick: () => void;
  variant: 'primary' | 'selected';
};

export const Button: React.FC<Props> = ({ label, secondaryLabel, variant = 'primary' }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const buttonVariant = isToggled ? 'selected' : variant;

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[`button--${buttonVariant}`]}`}
      onClick={handleClick}
      aria-pressed={isToggled}
    >
      {isToggled ? secondaryLabel : label}
    </button>
  );
};
