import { useState } from 'react';
import { NavLinkRenderProps } from 'react-router-dom';

import menu from '../../../public/icons/Menu.svg';
import closeMenu from '../../../public/icons/Close.svg';
import cart from '../../../public/icons/Shopping bag (Cart).svg';
import favorites from '../../../public/icons/Favourites (Heart Like).svg';
import Logo from '../Logo/Logo';
import IconContainer from '../../UI/IconContainer/IcontContainer';
import NavigationLink from '../../UI/NavLink/NavigationLink';
// import Toggle from '../Toogle/Toggle';

import s from './Navigation.module.scss';

import { PATH } from '@/constants/path';

const navLinks = {
  Home: PATH.HOME,
  Phones: '/phones',
  Tablets: '/tablets',
  Accessories: '/Accessories',
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
          <NavigationLink
            to={PATH.CART}
            label={<IconContainer icon={cart} />}
            className={navLinkStyle}
            handleClick={() => setIsOpenMobileMenu(false)}
          />
          <NavigationLink
            to={'/favorites'}
            label={<IconContainer icon={favorites} />}
            className={navLinkStyle}
            handleClick={() => setIsOpenMobileMenu(false)}
          />
        </div>
      </nav>

      <span
        className={s.navigation__burger}
        onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
      >
        <IconContainer icon={isOpenMobileMenu ? closeMenu : menu} />
      </span>
      {/* <Toggle /> */}
    </header>
  );
};

export default Navigation;
