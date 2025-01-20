import { useContext } from 'react';

import SceletonDark from '../../../assets/SceletonDark.svg?react';
import SceletonLight from '../../../assets/SceletonLight.svg?react';

import s from './ProductCartSceleton.module.scss';

import { ThemeContext } from '@/context/ThemeContext/ThemeContext';

const ProductCardSceleton = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <span className={s.container}>
      {theme ?
        <SceletonDark />
      : <SceletonLight />}
    </span>
  );
};

export default ProductCardSceleton;
