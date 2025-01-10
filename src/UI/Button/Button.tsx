import { FC } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

type ButtonProps = {
  label: string;
  secondaryLabel?: string;
  isSelected?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ label, secondaryLabel, onClick, isSelected = false, type = 'button' }) => (
  <button
    type={type}
    className={cn(s.button, 'primary-text', { [s.selected]: isSelected })}
    onClick={onClick}
    aria-pressed={isSelected}
  >
    {isSelected && secondaryLabel ? secondaryLabel : label}
  </button>
);
