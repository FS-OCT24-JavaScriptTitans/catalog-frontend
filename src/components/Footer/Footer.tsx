import React from 'react';

import Logo from '../Logo/Logo';

import s from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={s.footer}>
    <span className={s.logo}>
      <Logo />
    </span>
  </footer>
);
