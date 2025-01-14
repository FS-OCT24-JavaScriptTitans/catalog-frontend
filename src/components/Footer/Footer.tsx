import React from 'react';

import Logo from '../Logo/Logo';

import s from './Footer.module.scss';

import NavigationLink from '@/UI/NavLink/NavigationLink';
import { IconButton } from '@/UI/IconButton/IconButton';
import Arrow from '@/assets/Arrow.svg?react';

export const Footer: React.FC = () => (
  <footer className={s.footer}>
    <div className={s.create_line}></div>
    <div className={s.container}>
      <span className={s.logo}>
        <Logo />
      </span>
      <nav className={s.links}>
        <NavigationLink
          to="#"
          label="Github"
          className={s.link}
        />
        <NavigationLink
          to="#"
          label="Contacts"
          className={s.link}
        />
        <NavigationLink
          to="#"
          label="Rights"
          className={s.link}
        />
      </nav>
      <div className={s.back_to_top}>
        <div className={s.text}>Back to top</div>
        <IconButton
          onClick={() => {}}
          hasBorder
        >
          <Arrow className={s.rotated} />
        </IconButton>
      </div>
    </div>
  </footer>
);
