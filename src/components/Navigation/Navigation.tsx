import { NavLinkRenderProps } from 'react-router-dom';
import { useState } from 'react';
import { shallowEqual } from 'react-redux';

import menu from '../../assets/Menu.svg';
import auth from '../../assets/Auth.svg';
import closeMenu from '../../assets/Close.svg';
import cart from '../../assets/Shopping.svg';
import favorites from '../../assets/Favourites.svg';
import Logo from '../Logo/Logo';
import IconContainer from '../../UI/IconContainer/IcontContainer';
import NavigationLink from '../../UI/NavLink/NavigationLink';

import { IconLink } from './IconLink/IconLink';
import s from './Navigation.module.scss';

import { PATH } from '@/constants/path';
import { useAppSelector } from '@/redux/hooks';
import { selectCart, selectFavorites, selectUser } from '@/redux/selectors';

const navLinks = {
  Home: PATH.HOME,
  Phones: PATH.PHONES,
  Tablets: PATH.TABLETS,
  Accessories: PATH.ACCESSORIES,
};

const navLinkStyle = ({ isActive }: NavLinkRenderProps) => `uppercase-text ${s.link} ${isActive ? s.active_link : ''}`;

const Navigation = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const user = useAppSelector(selectUser, shallowEqual);
  const cartList = useAppSelector(selectCart, shallowEqual);
  const favoritesList = useAppSelector(selectFavorites, shallowEqual);

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
          {!user && (
            <NavigationLink
              key={auth}
              to={`/auth${PATH.SIGN_IN}`}
              label={<IconContainer icon={auth} />}
              className={navLinkStyle}
              handleClick={() => setIsOpenMobileMenu(false)}
            />
          )}

          <IconLink
            icon={cart}
            path={PATH.CART}
            counter={cartList.length}
            navLinkStyle={navLinkStyle}
            handleClick={() => setIsOpenMobileMenu(false)}
          />
          <IconLink
            icon={favorites}
            path={PATH.FAVORITES}
            counter={favoritesList.length}
            navLinkStyle={navLinkStyle}
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
    </header>
  );
};

export default Navigation;
