import cn from 'classnames';

import Plus from '../../../../public/icons/Plus.svg?react';
import Minus from '../../../../public/icons/Minus.svg?react';
import Close from '../../../../public/icons/Close.svg?react';

import s from './CartItem.module.scss';

import { IconButton } from '@/UI/IconButton/IconButton';

export const CartItem = () => (
  <article className={s.cartItem}>
    <div className={s.description}>
      <button className={s.close}>
        <Close />
      </button>
      <div className={s.imgContainer}>
        <img
          className={s.img}
          src="img/phones/apple-iphone-11/black/00.webp"
          alt="Apple iPhone 11 128GB Black"
        />
      </div>
      <h3 className={cn('primary-text', s.title)}>Apple iPhone 11 128GB Black</h3>
    </div>

    <div className={s.controls}>
      <div className={s.controlsContainer}>
        <IconButton onClick={() => {}}>
          <Minus />
        </IconButton>

        <div className={s.quantity}>1</div>

        <IconButton onClick={() => {}}>
          <Plus />
        </IconButton>
      </div>

      <h2 className={s.price}>$799</h2>
    </div>
  </article>
);
