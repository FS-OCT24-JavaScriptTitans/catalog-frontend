import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import s from './AuthPage.module.scss';

import { PATH } from '@/constants/path';

const AuthPage = () => {
  const { t } = useTranslation();

  return (
    <section className={s.auth}>
      <nav className={s.nav}>
        <NavLink
          className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
          to={`.${PATH.SIGN_IN}`}
        >
          {t('authPage.signIn')}
        </NavLink>
        <NavLink
          className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
          to={`.${PATH.SIGN_UP}`}
        >
          {t('authPage.signUp')}
        </NavLink>
      </nav>

      <Outlet />
    </section>
  );
};

export default AuthPage;
