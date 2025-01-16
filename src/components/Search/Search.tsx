import { FC, useCallback, useState } from 'react';

import { IconButton } from '@/UI/IconButton/IconButton';
import SearchInput from '@/UI/SearchInput/SearchInput';
import SearchIcon from '@/assets/Search.svg?react';
import { Product } from '@/types/Product.type';
import { getAllProducts } from '@/api/products/products.api';
import getfilterProducts from '@/utils/filtredProducts';

interface Props {
  isOpen: boolean;
}

export const Search: FC<Props> = ({ isOpen = false }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleSearchProducts = useCallback(async (query: string) => {
    if (query.length >= 3) {
      const allProducts = await getAllProducts();

      if (allProducts) {
        const filteredProducts = getfilterProducts(allProducts, query);

        setProducts(filteredProducts);
      }
    }
  }, []);

  return isOpen ?
      <>
        <h2>{products.length}</h2>
        <SearchInput handleSearch={handleSearchProducts} />
      </>
    : <IconButton
        hasBorder
        width="64px"
      >
        <SearchIcon />
      </IconButton>;
};
