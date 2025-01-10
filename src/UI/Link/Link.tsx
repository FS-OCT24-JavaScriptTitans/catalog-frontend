import { FC } from 'react';
import { Link } from 'react-router';

import s from './Link.module.scss';

import { PATH } from '@/constants/path';

interface Props {
  path: PATH;
  label: string;
}

export const CustomLink: FC<Props> = ({ path, label }) => (
  <Link
    className={s.link}
    to={path}
  >
    {label}
  </Link>
);
