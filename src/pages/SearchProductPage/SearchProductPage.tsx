import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NotFoundPage from '../NotFoundPage/NotFoundPage';

import { SearchProduct } from '@/components/SearchProduct/SearchProduct';
import { Product } from '@/types/Product.type';
import { getAllProducts } from '@/api/products/products.api';
import getfilterProducts from '@/utils/filtredProducts';
import { Loader } from '@/components/Loader/Loader';
import { useLanguage } from '@/hooks/useLanguage';
import { LANGUAGE } from '@/constants/language';
import Pagination from '@/components/Pagination/Pagination';

const SearchProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const { getLanguage } = useLanguage();
  const language = getLanguage() as LANGUAGE;
  const pageNumber = Number(searchParams.get('page')) || 1;

  const perPageParam = 16;

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

  const handlePageChange = ({ selected }: { selected: number }) => {
    setSearchParams({ query, page: (selected + 1).toString() });
    window.scrollTo(0, 0);
  };

  const getPaginatedProducts = () => {
    const offset = (pageNumber - 1) * perPageParam;

    return [...products].slice(offset, offset + perPageParam);
  };

  const productsOnPage = getPaginatedProducts();
  const pagesCount = Math.ceil(products.length / perPageParam);

  const getView = () => {
    switch (true) {
      case isLoading:
        return <Loader />;

      case !isLoading && !products.length:
        return <NotFoundPage />;

      default:
        return (
          <>
            <SearchProduct products={productsOnPage} />
            <Pagination
              forcePage={pageNumber - 1}
              pageCount={pagesCount}
              onChange={handlePageChange}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
            />
          </>
        );
    }
  };

  return getView();
};

export default SearchProductPage;
