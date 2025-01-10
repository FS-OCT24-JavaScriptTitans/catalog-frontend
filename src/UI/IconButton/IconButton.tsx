import { FC, ReactNode } from 'react';
import cn from 'classnames';

import s from './IconButton.module.scss';

interface Props {
  onClick?: () => void;
  children: ReactNode;
  hasBorder?: boolean;
}

export const IconButton: FC<Props> = ({ onClick, children, hasBorder }) => (
  <button
    className={cn(s.iconButton, { [s.border]: hasBorder })}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);
