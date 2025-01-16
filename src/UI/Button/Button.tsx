import { FC } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

type Props = {
  label: string;
  secondaryLabel?: string;
  isSelected?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<Props> = ({
  label,
  secondaryLabel,
  onClick,
  isSelected = false,
  type = 'button',
  disabled,
}) => (
  <button
    type={type}
    className={cn(s.button, 'primary-text', { [s.selected]: isSelected })}
    onClick={onClick}
    aria-pressed={isSelected}
    disabled={disabled}
  >
    {isSelected && secondaryLabel ? secondaryLabel : label}
  </button>
);
