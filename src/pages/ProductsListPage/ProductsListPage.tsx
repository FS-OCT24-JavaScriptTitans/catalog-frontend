import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import s from './ProductsListPage.module.scss';

import { Product } from '@/types/Product.type';
import { getProducts } from '@/api/products/products.api';
import Home from '@/assets/Home.svg?react';
import Arrow from '@/assets/Arrow.svg?react';
import { Dropdown } from '@/UI/Dropdown/Dropdown';
import { ProductEndPoints } from '@/constants/endPoints';
import { ProductList } from '@/components/ProductList/ProductList';
import Pagination from '@/components/Pagination/Pagination';
import { useLanguage } from '@/hooks/useLanguage';
import { LANGUAGE } from '@/constants/language';
import { ProductListSceleton } from '@/UI/Sceletones/ProductListSceleton/ProductListSceleton';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';
import { Sort } from '@/constants/sort';
import { perPageOptions, sortOptions } from '@/constants/options';
import { sortProducts } from '@/utils/products/sortProducts';

const ProductsListPage: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const pageNumber = Number(params.get('page')) || 1;
  const sortParam = params.get('sort') || Sort.Popularity;
  const perProductSParam = params.get('perPage') || '16';

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [resetKey, setResetKey] = useState(0);

  const { getLanguage } = useLanguage();
  const language = getLanguage() as LANGUAGE;

  const formatLocation = location.pathname.replace('/', '');

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts(
        ProductEndPoints[formatLocation.toUpperCase() as keyof typeof ProductEndPoints],
        language,
      );

      setIsLoading(false);

      const pagesQuantity = Math.ceil((productsData?.length || 0) / +perProductSParam);

      setPagesCount(pagesQuantity);

      if (productsData) {
        setAllProducts(productsData);
      } else {
        setAllProducts([]);
      }
    };

    fetchProducts();
  }, [formatLocation, language, perProductSParam]);

  useEffect(() => {
    const sortedProducts = sortProducts(allProducts, sortParam as Sort);
    const totalPages = Math.ceil(sortedProducts.length / +perProductSParam);

    setPagesCount(totalPages);

    const offset = (pageNumber - 1) * +perProductSParam;

    setProducts(sortedProducts.slice(offset, offset + +perProductSParam));
  }, [allProducts, sortParam, pageNumber, perProductSParam]);

  const handleSortChange = (sortValue: Sort) => {
    navigate(`${location.pathname}?page=1&sort=${sortValue}&perPage=${perProductSParam}`);
  };

  const handlePerChange = (perQuantity: number) => {
    navigate(`${location.pathname}?page=1&sort=${sortParam}&perPage=${perQuantity}`);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    navigate(`${location.pathname}?page=${selected + 1}&sort=${sortParam}&perPage=${perProductSParam}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setResetKey((prevKey) => prevKey + 1);
  }, [location.pathname]);

  return (
    <AnimatedSection animationType={'fade-right'}>
      <section className={s.container}>
        <div className={s.top_panel}>
          <div className={s.icons}>
            <Link to="/home">
              <Home />
            </Link>
            <Arrow />
            <span className={s.mini_title}>{t(`navigation.${formatLocation}`)}</span>
          </div>
          <h2 className={s.title}>{t(`navigation.${formatLocation}`)}</h2>
          <p className={`${s.counter} primary-text`}>
            {products.length} {t('product.models')}
          </p>

          <div className={s.filter_block}>
            <div className={s.filter_item}>
              <label className={s.mini_title}>{t('product.sortBy')}</label>
              <div className={s.dropdown}>
                <Dropdown
                  key={resetKey}
                  options={sortOptions}
                  hasBorder
                  onChange={(value) => handleSortChange(value as Sort)}
                  urlParam="sort"
                />
              </div>
            </div>
            <div className={s.filter_item}>
              <label className={s.mini_title}>{t('product.itemsOnPage')}</label>
              <div className={s.dropdown}>
                <Dropdown
                  key={resetKey}
                  options={perPageOptions}
                  hasBorder
                  onChange={(value) => handlePerChange(+value)}
                  urlParam="perPage"
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
    </AnimatedSection>
  );
};

export default ProductsListPage;
