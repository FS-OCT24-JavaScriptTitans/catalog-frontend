import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SignInPage from '../SignInPage/SignInPage';

import s from './AuthPage.module.scss';

import { PATH } from '@/constants/path';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

const AuthPage = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const hasAdditionalPath = location.pathname.includes(PATH.SIGN_IN) || location.pathname.includes(PATH.SIGN_UP);

  return (
    <AnimatedSection
      animationType={'fade-up'}
      animationDuration={'1500'}
    >
      <section className={s.auth}>
        <AnimatedSection
          animationType={'flip-down'}
          animationDuration={'1500'}
        >
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
        </AnimatedSection>

        {hasAdditionalPath ?
          <Outlet />
        : <AnimatedSection animationType={'fade-up'}>
            <SignInPage />
          </AnimatedSection>
        }
      </section>
    </AnimatedSection>
  );
};

export default AuthPage;
