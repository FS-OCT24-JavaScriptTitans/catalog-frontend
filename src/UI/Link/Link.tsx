import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import s from './Link.module.scss';

import { useAddLangToUrl } from '@/hooks/useAddLangToUrl';

interface Props {
  path: string;
  label?: string;
  children?: ReactNode;
}

export const CustomLink: FC<Props> = ({ path, label, children }) => {
  const { getUrlWithLang } = useAddLangToUrl();

  return (
    <Link
      className={s.link}
      to={getUrlWithLang(path)}
    >
      {children ? children : label}
    </Link>
  );
};
