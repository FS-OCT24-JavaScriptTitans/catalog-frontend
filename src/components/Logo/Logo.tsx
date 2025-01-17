import { Link } from 'react-router-dom';

import Logotype from '../../assets/Logo.svg?react';

import s from './Logo.module.scss';

const Logo = () => (
  <Link
    to="/"
    // className={s.link}
  >
    <Logotype className={s.logo} />
  </Link>
);

export default Logo;
