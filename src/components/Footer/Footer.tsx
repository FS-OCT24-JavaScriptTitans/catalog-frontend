import React from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '../Logo/Logo';

import s from './Footer.module.scss';

import NavigationLink from '@/UI/NavLink/NavigationLink';
import Arrow from '@/assets/Arrow.svg?react';
import { PATH } from '@/constants/path';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={s.footer}>
      <div className={s.create_line}></div>
      <div className={s.container}>
        <span className={s.logo}>
          <Logo />
        </span>
        <nav className={s.links}>
          <NavigationLink
            to={PATH.HOME}
            label="Github"
            className={s.link}
          />
          <NavigationLink
            to={PATH.HOME}
            label={t('footer.contacts')}
            className={s.link}
          />
          <NavigationLink
            to={PATH.HOME}
            label={t('footer.rights')}
            className={s.link}
          />
        </nav>
        <div className={s.back_to_top}>
          <div className={s.text}>{t('footer.backToTop')}</div>
          <a
            href="#"
            className={s.arrow_link}
          >
            <Arrow className={s.rotated} />
          </a>
        </div>
      </div>
    </footer>
  );
};
