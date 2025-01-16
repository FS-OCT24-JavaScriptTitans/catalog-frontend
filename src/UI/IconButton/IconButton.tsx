import { FC, ReactNode } from 'react';
import cn from 'classnames';

import s from './IconButton.module.scss';

interface Props {
  onClick?: () => void;
  children: ReactNode;
  hasBorder?: boolean;
  width?: string;
  height?: string;
}

export const IconButton: FC<Props> = ({ onClick, children, hasBorder, width, height }) => (
  <button
    className={cn(s.iconButton, { [s.border]: hasBorder })}
    type="button"
    onClick={onClick}
    style={{ width, height }}
  >
    {children}
  </button>
);
