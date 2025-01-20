import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import s from './ProductsListPage.module.scss';

import { Product } from '@/types/Product.type';
import { getProducts } from '@/api/products/products.api';
import Home from '@/assets/Home.svg?react';
import Arrow from '@/assets/Arrow.svg?react';
import { Dropdown } from '@/UI/Dropdown/Dropdown';
import { Option } from '@/types/Options.type';
import { ProductEndPoints } from '@/constants/endPoints';
import { ProductList } from '@/components/ProductList/ProductList';
import Pagination from '@/components/Pagination/Pagination';
import { useLanguage } from '@/hooks/useLanguage';
import { LANGUAGE } from '@/constants/language';
import { ProductListSceleton } from '@/UI/Sceletones/ProductListSceleton/ProductListSceleton';

const sortOptions: Option<string>[] = [
  {
    id: 1,
    value: 'popularity',
    label: 'Popularity',
  },
  {
    id: 2,
    value: 'high-to-low',
    label: 'Price To Low',
  },
  {
    id: 3,
    value: 'low-to-high',
    label: 'Price To High',
  },
];

enum Sort {
  Popularity = 'popularity',
  HighToLow = 'high-to-low',
  LowToHigh = 'low-to-high',
}

const ProductsListPage: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const pageNumber = Number(new URLSearchParams(location.search).get('page')) || 1;
  const sortParam = new URLSearchParams(location.search).get('sort') || Sort.Popularity;

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [sortValue, setSortValue] = useState<Sort>(sortParam as Sort);

  const { getLanguage } = useLanguage();
  const language = getLanguage() as LANGUAGE;

  const productsPerPage = 16;
  const formatLocation = location.pathname.replace('/', '');

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts(
        ProductEndPoints[formatLocation.toUpperCase() as keyof typeof ProductEndPoints],
        language,
      );

      setIsLoading(false);

      const pagesQuantity = Math.ceil((productsData?.length || 0) / productsPerPage);

      setPagesCount(pagesQuantity);

      if (productsData) {
        setAllProducts(productsData);
      } else {
        setAllProducts([]);
      }
    };

    fetchProducts();
  }, [formatLocation, language]);

  useEffect(() => {
    const sortedProducts = sortProducts(allProducts, sortValue);
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    setPagesCount(totalPages);

    const offset = (pageNumber - 1) * productsPerPage;

    setProducts(sortedProducts.slice(offset, offset + productsPerPage));
  }, [allProducts, sortValue, pageNumber]);

  const sortProducts = (productsData: Product[], sortValue: Sort) => {
    if (sortValue === Sort.Popularity) {
      return [...productsData].sort(() => Math.random() - 0.5);
    }

    return [...productsData].sort((a, b) =>
      sortValue === Sort.HighToLow ? b.priceRegular - a.priceRegular
      : sortValue === Sort.LowToHigh ? a.priceRegular - b.priceRegular
      : 0,
    );
  };

  const handleSortChange = (sortValue: Sort) => {
    setSortValue(sortValue);
    navigate(`${location.pathname}?page=1&sort=${sortValue}`);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    navigate(`${location.pathname}?page=${selected + 1}&sort=${sortValue}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className={s.container}>
      <div className={s.top_panel}>
        <div className={s.icons}>
          <Link to="#">
            <Home />
          </Link>
          <Arrow />
          <span className={s.mini_title}>{t(`navigation.${formatLocation}`)}</span>
        </div>
        <h2 className={s.title}>{t(`navigation.${formatLocation}`)}</h2>
        <p className={`${s.counter} primary-text`}>{`${products.length} models`}</p>

        <div className={s.filter_block}>
          <div className={s.filter_item}>
            <label className={s.mini_title}>{t('product.sortBy')}</label>
            <div className={s.dropdown}>
              <Dropdown
                options={sortOptions}
                hasBorder
                onChange={(value) => handleSortChange(value as Sort)}
              />
            </div>
          </div>
          <div className={s.filter_item}>
            <label className={s.mini_title}>Items on page</label>
            <div className={s.dropdown}>
              <Dropdown
                options={sortOptions}
                hasBorder
              />
            </div>
          </div>
        </div>
      </div>

      {isLoading ?
        <ProductListSceleton />
      : <ProductList products={products} />}
      <Pagination
        forcePage={pageNumber - 1}
        pageCount={pagesCount}
        onChange={handlePageChange}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
      />
    </section>
  );
};

export default ProductsListPage;
