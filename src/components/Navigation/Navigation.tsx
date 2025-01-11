import { useState } from 'react';

import menu from '../../../public/icons/Menu.svg';
import closeMenu from '../../../public/icons/Close.svg';
import cart from '../../../public/icons/Shopping bag (Cart).svg';
import favorites from '../../../public/icons/Favourites (Heart Like).svg';
import Logo from '../Logo/Logo';
import HeaderIcon from '../HeaderIcon/HeaderIcont';
import NavigationLink from '../NavLink/NavigationLink';
// import Toggle from '../Toogle/Toggle';

import s from './Navigation.module.scss';

import { PATH } from '@/constants/path';

const navLinks = {
  Home: PATH.HOME,
  Phones: '/phones',
  Tablets: '/tablets',
  Accessories: '/Accessories',
};

const Navigation = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <header className={s.container}>
      <span className={s.logo}>
        <Logo />
      </span>

      <nav className={isOpenMobileMenu ? s.navigation : s.desktop}>
        <div className={s.navigation__links}>
          {Object.entries(navLinks).map(([link, path]) => (
            <NavigationLink
              key={link}
              to={path}
              link={link}
              className={({ isActive }) => `uppercase-text ${s.link} ${isActive ? s.active_link : ''}`}
              handleClick={() => setIsOpenMobileMenu(false)}
            />
          ))}
        </div>

        <div className={s.navigation__icons}>
          <NavigationLink
            to={PATH.CART}
            link={<HeaderIcon icon={cart} />}
            className={({ isActive }) => `uppercase-text ${s.link} ${isActive ? s.active_link : ''}`}
            handleClick={() => setIsOpenMobileMenu(false)}
          />
          <NavigationLink
            to={'/favorites'}
            link={<HeaderIcon icon={favorites} />}
            className={({ isActive }) => `uppercase-text ${s.link} ${isActive ? s.active_link : ''}`}
            handleClick={() => setIsOpenMobileMenu(false)}
          />
        </div>
      </nav>

      <span
        className={s.navigation__burger}
        onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
      >
        <HeaderIcon icon={isOpenMobileMenu ? closeMenu : menu} />
      </span>
      {/* <Toggle /> */}
    </header>
  );
};

export default Navigation;
