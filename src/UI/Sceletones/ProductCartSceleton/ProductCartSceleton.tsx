import { useContext } from 'react';

import ScaletonDark from '../../../assets/SceletonDark.svg?react';
import ScaletonLight from '../../../assets/ScaletonLight.svg?react';

import s from './ProductCartSceleton.module.scss';

import { ThemeContext } from '@/context/ThemeContext/ThemeContext';

const ProductCardSceleton = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <span className={s.container}>
      {theme ?
        <ScaletonDark />
      : <ScaletonLight />}
    </span>
  );
};

export default ProductCardSceleton;
