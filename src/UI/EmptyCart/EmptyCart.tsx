import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './EmptyCart.module.scss';

import { PATH } from '@/constants/path';

const EmptyCart = () => (
  <article>
    <h2 className={cn(s.title)}>The Cart is empty</h2>
    <div className={s.imgContainer}>
      <img
        src="/img/cart-is-empty.png"
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

export default EmptyCart;
