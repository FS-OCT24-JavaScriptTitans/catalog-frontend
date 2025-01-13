import { NavLink, Outlet } from 'react-router-dom';

import s from './AuthPage.module.scss';

import { PATH } from '@/constants/path';

const AuthPage = () => (
  <section className={s.auth}>
    <nav className={s.nav}>
      <NavLink
        className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
        to={`.${PATH.SIGN_IN}`}
      >
        Sign In
      </NavLink>
      <NavLink
        className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
        to={`.${PATH.SIGN_UP}`}
      >
        Sign Up
      </NavLink>
    </nav>

    <Outlet />
  </section>
);

export default AuthPage;
