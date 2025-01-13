import { NavLinkRenderProps } from 'react-router-dom';

import s from './IconLink.module.scss';

import NavigationLink from '@/UI/NavLink/NavigationLink';
import IconContainer from '@/UI/IconContainer/IcontContainer';

type Props = {
  icon: string;
  path: string;
  counter: number;
  navLinkStyle: ({ isActive }: NavLinkRenderProps) => string;
  handleClick: () => void;
};

export const IconLink: React.FC<Props> = (props) => {
  const { icon, path, counter, navLinkStyle, handleClick } = props;

  return (
    <span
      key={icon}
      className={s.container}
    >
      <NavigationLink
        key={icon}
        to={path}
        label={<IconContainer icon={icon} />}
        className={navLinkStyle}
        handleClick={handleClick}
      />
      {counter !== 0 && <span className={s.counter}>{counter}</span>}
    </span>
  );
};
