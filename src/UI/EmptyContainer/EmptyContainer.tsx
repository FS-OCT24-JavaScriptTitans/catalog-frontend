import { Link } from 'react-router-dom';
import cn from 'classnames';
import { FC } from 'react';

import s from './EmptyContainer.module.scss';

import { PATH } from '@/constants/path';

interface Props {
  title: string;
  pathToImg: string;
  alt: string;
}

const EmptyContainer: FC<Props> = ({ title, pathToImg, alt }) => (
  <article className={s.container}>
    <h2 className={cn(s.title)}>{title}</h2>
    <div className={s.imgContainer}>
      <img
        src={pathToImg}
        alt={alt}
      />
    </div>

    <h4 className={s.navigationHint}>
      Go to the
      <Link
        to={PATH.PHONES}
        className={s.link}
      >
        Products
      </Link>
      page
    </h4>
  </article>
);

export default EmptyContainer;
