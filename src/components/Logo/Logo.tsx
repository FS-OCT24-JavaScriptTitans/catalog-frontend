import { Link } from 'react-router-dom';

import s from './Logo.module.scss';

import logo from '@/assets/Logo.svg';

const Logo = () => (
  <Link
    to="/"
    className={s.link}
  >
    <img
      src={logo}
      alt="logo"
      className={s.logo}
    />
  </Link>
);

export default Logo;
