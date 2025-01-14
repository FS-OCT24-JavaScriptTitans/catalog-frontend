import { Link } from 'react-router-dom';
import cn from 'classnames';
import { FC } from 'react';

import s from './EmpttContainer.module.scss';

import { PATH } from '@/constants/path';

interface Props {
  title: string;
  pathToImg: string;
}

const EmptyContainer: FC<Props> = ({ title, pathToImg }) => (
  <article>
    <h2 className={cn(s.title)}>{title}</h2>
    <div className={s.imgContainer}>
      <img
        src={pathToImg}
        alt="empty-cart"
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
