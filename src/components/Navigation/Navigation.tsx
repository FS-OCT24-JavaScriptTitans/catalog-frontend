import { useState } from 'react';
import { NavLinkRenderProps } from 'react-router-dom';

import menu from '../../assets/Menu.svg';
import auth from '../../assets/Auth.svg';
import closeMenu from '../../assets/Close.svg';
import cart from '../../assets/Shopping.svg';
import favorites from '../../assets/Favourites.svg';
import Logo from '../Logo/Logo';
import IconContainer from '../../UI/IconContainer/IcontContainer';
import NavigationLink from '../../UI/NavLink/NavigationLink';

import s from './Navigation.module.scss';

import { PATH } from '@/constants/path';

const navLinks = {
  Home: PATH.HOME,
  Phones: PATH.PHONES,
  Tablets: PATH.TABLETS,
  Accessories: PATH.ACCESSORIES,
};

const iconLinks = {
  [auth]: `/auth${PATH.SIGN_IN}`,
  [cart]: PATH.CART,
  [favorites]: PATH.FAVORITES,
};

const navLinkStyle = ({ isActive }: NavLinkRenderProps) => `uppercase-text ${s.link} ${isActive ? s.active_link : ''}`;

const Navigation = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <header className={s.container}>
      <span className={s.logo}>
        <Logo />
      </span>

      <nav className={isOpenMobileMenu ? s.navigation : s.desktop}>
        <div className={s.navigation__links}>
          {Object.entries(navLinks).map(([label, path]) => (
            <NavigationLink
              key={label}
              to={path}
              label={label}
              className={navLinkStyle}
              handleClick={() => setIsOpenMobileMenu(false)}
            />
          ))}
        </div>

        <div className={s.navigation__icons}>
          {Object.entries(iconLinks).map(([icon, path]) => (
            <NavigationLink
              key={icon}
              to={path}
              label={<IconContainer icon={icon} />}
              className={navLinkStyle}
              handleClick={() => setIsOpenMobileMenu(false)}
            />
          ))}
        </div>
      </nav>

      <span
        className={s.navigation__burger}
        onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
      >
        <IconContainer icon={isOpenMobileMenu ? closeMenu : menu} />
      </span>
    </header>
  );
};

export default Navigation;
