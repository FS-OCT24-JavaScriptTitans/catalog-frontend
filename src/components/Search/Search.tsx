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
import { useLanguage } from '@/hooks/useLanguage';
import { LANGUAGE } from '@/constants/language';

interface Props {
  isOpen: boolean;
  onClickSearch: () => void;
}

export const Search: FC<Props> = ({ isOpen = false, onClickSearch }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isListOpen, setListOpen] = useState(false);

  const { getLanguage } = useLanguage();
  const language = getLanguage() as LANGUAGE;

  const handleSearchProducts = useCallback(
    async (query: string) => {
      const trimmedQuery = query.trim();

      if (trimmedQuery.length >= 3) {
        const allProducts = await getAllProducts(language);

        if (allProducts) {
          const filteredProducts = getfilterProducts(allProducts, trimmedQuery);

          if (filteredProducts.length) {
            setListOpen(true);
          }

          setProducts(filteredProducts);
        }
      }
    },
    [language],
  );

  const fiveProducts = useMemo(() => products.slice(0, 5), [products]);

  const { query, handleChange, handleSubmit } = useSearchProduct(handleSearchProducts, () => setListOpen(false));

  return isOpen ?
      <div className={s.container}>
        <SearchInput
          handleChange={handleChange}
          onClickSearch={onClickSearch}
          value={query}
          handleSubmit={handleSubmit}
        />

        {isListOpen && (
          <ul className={s.list}>
            {fiveProducts.map(({ id, name, category }) => (
              <li
                key={id}
                className={cn('primary-text', s.item)}
                onClick={() => setListOpen(false)}
              >
                <CustomLink path={`${category}/${id}`}>
                  <p style={{ paddingLeft: '10px' }}>{name}</p>
                </CustomLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    : <IconButton
        width="64px"
        onClick={onClickSearch}
      >
        <SearchIcon />
      </IconButton>;
};
