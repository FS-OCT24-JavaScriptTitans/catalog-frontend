import { NavLinkRenderProps } from 'react-router-dom';
import { shallowEqual } from 'react-redux';

import linkStyle from '../Navigation.module.scss';

import s from './IconLinks.module.scss';

import Auth from '@/assets/Auth.svg?react';
import Cart from '@/assets/Shopping.svg?react';
import Favorites from '@/assets/Favourites.svg?react';
import NavigationLink from '@/UI/NavLink/NavigationLink';
import { PATH } from '@/constants/path';
import { useAppSelector } from '@/redux/hooks';
import { selectCart, selectFavorites, selectUser } from '@/redux/selectors';
import { Product } from '@/types/Product.type';
import { CartProduct } from '@/types/Cart.types';

type Props = {
  handleClick: () => void;
};

export const IconLinks: React.FC<Props> = ({ handleClick }) => {
  const user = useAppSelector(selectUser, shallowEqual);
  const cartList = useAppSelector(selectCart, shallowEqual);
  const favoritesList = useAppSelector(selectFavorites, shallowEqual);

  const counter = (list: Product[] | CartProduct[]) =>
    list.length !== 0 && <span className={s.counter}>{list.length}</span>;

  const navLinkStyle = ({ isActive }: NavLinkRenderProps) =>
    `${s.icon} ${linkStyle.link} ${isActive ? linkStyle.active_link : ''}`;

  return (
    <div className={s.icons}>
      {!user && (
        <span className={s.wrapper}>
          <NavigationLink
            to={PATH.AUTH}
            label={<Auth />}
            className={navLinkStyle}
            handleClick={handleClick}
          />
        </span>
      )}

      <span className={s.wrapper}>
        <NavigationLink
          to={PATH.CART}
          label={<Cart />}
          className={navLinkStyle}
          handleClick={handleClick}
        />
        {counter(cartList)}
      </span>

      <span className={s.wrapper}>
        <NavigationLink
          to={PATH.FAVORITES}
          label={<Favorites />}
          className={navLinkStyle}
          handleClick={handleClick}
        />
        {counter(favoritesList)}
      </span>
    </div>
  );
};
