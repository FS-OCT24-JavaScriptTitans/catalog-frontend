/* eslint-disable react/no-children-prop */
import { NavLinkRenderProps } from 'react-router-dom';
import { useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Menu from '../../assets/Menu.svg?react';
import Auth from '../../assets/Auth.svg?react';
import Close from '../../assets/Close.svg?react';
import Cart from '../../assets/Shopping.svg?react';
import Favorites from '../../assets/Favourites.svg?react';
import Logo from '../Logo/Logo';
import NavigationLink from '../../UI/NavLink/NavigationLink';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Search } from '../Search/Search';

import { IconLink } from './IconLink/IconLink';
import s from './Navigation.module.scss';

import { IconButton } from '@/UI/IconButton/IconButton';
import { PATH } from '@/constants/path';
import { useAppSelector } from '@/redux/hooks';
import { selectCart, selectFavorites, selectUser } from '@/redux/selectors';
// import { allowScroll, blockScroll } from '@/utils/scroll';

const navLinks = {
  Home: PATH.HOME,
  Phones: PATH.PHONES,
  Tablets: PATH.TABLETS,
  Accessories: PATH.ACCESSORIES,
};

const navLinkStyle = ({ isActive }: NavLinkRenderProps) => `${s.link} ${isActive ? s.active_link : ''}`;

const Navigation = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const user = useAppSelector(selectUser, shallowEqual);
  const cartList = useAppSelector(selectCart, shallowEqual);
  const favoritesList = useAppSelector(selectFavorites, shallowEqual);
  const { t } = useTranslation('navigation');

  // useEffect(() => {
  //   if (isOpenMobileMenu) {
  //     blockScroll();
  //   } else {
  //     allowScroll();
  //   }
  // }, [isOpenMobileMenu]);

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
              label={t(label)}
              className={navLinkStyle}
              handleClick={() => setIsOpenMobileMenu(false)}
            />
          ))}
        </div>
        <div className={s.navigation__icons}>
          <Search isOpen />
          {!user && (
            <IconLink
              icon={<Auth />}
              path={`/auth${PATH.SIGN_IN}`}
              counter={0}
              handleClick={() => setIsOpenMobileMenu(false)}
            />
          )}
          <IconLink
            icon={<Cart />}
            path={PATH.CART}
            counter={cartList.length}
            handleClick={() => setIsOpenMobileMenu(false)}
          />
          <IconLink
            icon={<Favorites />}
            path={PATH.FAVORITES}
            counter={favoritesList.length}
            handleClick={() => setIsOpenMobileMenu(false)}
          />
        </div>
      </nav>

      <div className={s.wrapper}>
        <ThemeSwitcher />
        <LanguageSwitcher />

        <span
          className={s.navigation__burger}
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
        >
          <IconButton children={isOpenMobileMenu ? <Close /> : <Menu />} />
        </span>
      </div>
    </header>
  );
};

export default Navigation;
