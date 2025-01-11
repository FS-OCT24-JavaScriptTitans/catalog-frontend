import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import cn from 'classnames'

import menu from '../../../public/icons/Menu.svg';
import closeMenu from '../../../public/icons/Close.svg';
import cart from '../../../public/icons/Shopping bag (Cart).svg';
import favorites from '../../../public/icons/Favourites (Heart Like).svg';
import Logo from '../Logo/Logo';
import HeaderIcon from '../HeaderIcon/HeaderIcont';
// import Toggle from '../Toogle/Toggle';

// import NavigationLink from './NavigationLink';
import s from './Navigation.module.scss';

// import { PATH } from '@/constants/path';

const Navigation = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <header className={s.container}>
      <span className={s.logo}>
        <Logo />
      </span>

      {/* <nav className={`${s.navigation} ${isOpenMobileMenu && s.module}`}> */}
      <nav className={isOpenMobileMenu ? s.navigation : s.desctop}>
        <div className={s.navigation__links}>
          <NavLink
            to="/"
            className={({ isActive }) => `uppercase-text ${s.link} ${isActive ? s.active_link : ''}`}
            onClick={() => setIsOpenMobileMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/phones"
            className={({ isActive }) => `uppercase-text ${s.link} ${isActive ? s.active_link : ''}`}
          >
            Phones
          </NavLink>
          <NavLink
            to="/tablet"
            className={({ isActive }) => `uppercase-text ${s.link} ${isActive ? s.active_link : ''}`}
          >
            Tablet
          </NavLink>
          <NavLink
            to="/acses"
            className={({ isActive }) => `uppercase-text ${s.link} ${isActive ? s.active_link : ''}`}
          >
            Acsesuares
          </NavLink>
        </div>

        <div className={s.navigation__icons}>
          <NavLink
            to="/cart"
            className={({ isActive }) => `uppercase-text ${s.link} ${isActive ? s.active : ''}`}
            onClick={() => setIsOpenMobileMenu(false)}
          >
            <HeaderIcon icon={cart} />
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? s.active : s.link)}
          >
            <HeaderIcon icon={favorites} />
          </NavLink>
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
