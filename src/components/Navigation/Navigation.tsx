/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Search } from '../Search/Search';

import s from './Navigation.module.scss';
import { IconLinks } from './IconLinks/IconLinks';

import NavigationLink from '@/UI/NavLink/NavigationLink';
import Close from '@/assets/Close.svg?react';
import Menu from '@/assets/Menu.svg?react';
import { IconButton } from '@/UI/IconButton/IconButton';
import { PATH } from '@/constants/path';
import { allowScroll, blockScroll } from '@/utils/scroll';

const navLinks = {
  'navigation.home': PATH.HOME,
  'navigation.phones': PATH.PHONES,
  'navigation.tablets': PATH.TABLETS,
  'navigation.accessories': PATH.ACCESSORIES,
};

const Navigation = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const closeBurgerMenu = () => setIsOpenMobileMenu(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpenMobileMenu) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isOpenMobileMenu]);

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
              className={({ isActive }) => `${s.link} ${isActive ? s.active_link : ''}`}
              handleClick={closeBurgerMenu}
            />
          ))}
        </div>
        <IconLinks handleClick={closeBurgerMenu} />
      </nav>

      <div className={s.switches}>
        <Search isOpen={false} />
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
