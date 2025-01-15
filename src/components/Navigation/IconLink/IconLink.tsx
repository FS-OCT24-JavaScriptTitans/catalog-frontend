/* eslint-disable react/no-children-prop */
import { NavLinkRenderProps } from 'react-router-dom';

import s from './IconLink.module.scss';

import NavigationLink from '@/UI/NavLink/NavigationLink';
import { IconButton } from '@/UI/IconButton/IconButton';

type Props = {
  icon: React.ReactNode;
  path: string;
  counter?: number;
  handleClick: () => void;
};

export const IconLink: React.FC<Props> = (props) => {
  const navLinkStyle = ({ isActive }: NavLinkRenderProps) => `${s.link} ${isActive ? s.active_link : ''}`;
  const { icon, path, counter, handleClick } = props;

  return (
    <span className={s.container}>
      <NavigationLink
        to={path}
        label={<IconButton children={icon} />}
        className={navLinkStyle}
        handleClick={handleClick}
      />
      {counter !== 0 && <span className={s.counter}>{counter}</span>}
    </span>
  );
};
