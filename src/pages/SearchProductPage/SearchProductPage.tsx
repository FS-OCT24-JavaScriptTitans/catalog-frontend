import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { SearchProduct } from '@/components/SearchProduct/SearchProduct';
import { Product } from '@/types/Product.type';
import { getAllProducts } from '@/api/products/products.api';
import getfilterProducts from '@/utils/filtredProducts';
import { Loader } from '@/components/Loader/Loader';
import EmptyContainer from '@/UI/EmptyContainer/EmptyContainer';
import { useLanguage } from '@/hooks/useLanguage';
import { LANGUAGE } from '@/constants/language';

const SearchProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const { getLanguage } = useLanguage();
  const language = getLanguage() as LANGUAGE;

  useEffect(() => {
    getAllProducts(language)
      .then((res) => {
        if (res) {
          setProducts(getfilterProducts(res, query));
        }
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [query, language]);

  const getView = () => {
    switch (true) {
      case isLoading:
        return <Loader />;

      case !isLoading && !products.length:
        return (
          <EmptyContainer
            title="Products not found"
            pathToImg="/img/product-not-found.png"
            alt="Products not found"
          />
        );

      default:
        return <SearchProduct products={products} />;
    }
  };

  return getView();
};

export default SearchProductPage;
