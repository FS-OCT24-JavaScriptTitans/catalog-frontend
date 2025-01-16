import { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './Link.module.scss';

import { useAddLangToUrl } from '@/hooks/useAddLangToUrl';

interface Props {
  path: string;
  label: string;
}

export const CustomLink: FC<Props> = ({ path, label }) => {
  const { getUrlWithLang } = useAddLangToUrl();

  const updatedTo = typeof path === 'string' ? getUrlWithLang(path) : path;

  return (
    <Link
      className={s.link}
      to={updatedTo}
    >
      {label}
    </Link>
  );
};
