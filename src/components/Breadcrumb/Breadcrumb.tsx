import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './Breadcrumb.module.scss';

import Arrow from '@/assets/Arrow.svg?react';
import Home from '@/assets/Home.svg?react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const locationParts = location.pathname.split('/');
  const firstPart = locationParts[1];
  const secondPart = locationParts[2].split('-').join(' ');

  const { t } = useTranslation();

  return (
    <div className={cn(styles.breadCrumbs, 'small-text')}>
      <div className={styles.home}>
        <NavLink
          to="/"
          className={styles.home}
        >
          <Home />
        </NavLink>
      </div>
      <div className={styles.arrow}>
        <Arrow />
      </div>
      <NavLink
        to={`/${firstPart}`}
        className={cn(styles.firstPart, { [styles.active]: secondPart })}
      >
        {t(`navigation.${firstPart}`)}
      </NavLink>
      {secondPart && (
        <>
          <div className={styles.arrow}>
            <Arrow />
          </div>
          <span className={styles.secondPart}>{secondPart}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
