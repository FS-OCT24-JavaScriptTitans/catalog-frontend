import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';

import s from './Logo.module.scss';

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
