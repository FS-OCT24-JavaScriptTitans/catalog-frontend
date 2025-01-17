import { FC, useCallback, useMemo, useState } from 'react';
import cn from 'classnames';

import s from './Search.module.scss';

import { IconButton } from '@/UI/IconButton/IconButton';
import SearchInput from '@/UI/SearchInput/SearchInput';
import SearchIcon from '@/assets/Search.svg?react';
import { Product } from '@/types/Product.type';
import { getAllProducts } from '@/api/products/products.api';
import getfilterProducts from '@/utils/filtredProducts';
import { CustomLink } from '@/UI/Link/Link';
import { useSearchProduct } from '@/hooks/useSearchProduct';

interface Props {
  isOpen: boolean;
}

export const Search: FC<Props> = ({ isOpen = false }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isListOpen, setListOpen] = useState(false);

  const handleSearchProducts = useCallback(async (query: string) => {
    if (query.length >= 3) {
      const allProducts = await getAllProducts();

      if (allProducts) {
        const filteredProducts = getfilterProducts(allProducts, query);

        if (filteredProducts.length) {
          setListOpen(true);
        }

        setProducts(filteredProducts);
      }
    }
  }, []);

  const fiveProducts = useMemo(() => products.slice(0, 5), [products]);

  const { query, handleChange } = useSearchProduct(handleSearchProducts);

  return isOpen ?
      <div className={s.container}>
        <SearchInput
          handleChange={handleChange}
          value={query}
        />

        {isListOpen && (
          <ul className={s.list}>
            {fiveProducts.map(({ id, name, category }) => (
              <li
                key={id}
                className={cn('primary-text', s.item)}
                onClick={() => setListOpen(false)}
              >
                <CustomLink
                  label={name}
                  path={`${category}/${id}`}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    : <IconButton
        hasBorder
        width="64px"
      >
        <SearchIcon />
      </IconButton>;
};
