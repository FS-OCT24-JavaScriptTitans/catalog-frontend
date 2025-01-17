import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SignInPage from '../SignInPage/SignInPage';

import s from './AuthPage.module.scss';

import { PATH } from '@/constants/path';

const AuthPage = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const hasAdditionalPath = location.pathname.includes(PATH.SIGN_IN) || location.pathname.includes(PATH.SIGN_UP);

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

      {hasAdditionalPath ?
        <Outlet />
      : <SignInPage />}
    </section>
  );
};

export default AuthPage;
