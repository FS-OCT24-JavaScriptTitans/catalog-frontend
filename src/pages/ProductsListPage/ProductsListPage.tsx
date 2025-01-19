import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const sortOptions: Option<string>[] = [
  {
    id: 1,
    value: 'newest',
    label: 'Newest',
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
  Newest = 'newest',
  HighToLow = 'high-to-low',
  LowToHigh = 'low-to-high',
}

const ProductsListPage: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const [products, setProducts] = useState<Product[]>([]);

  const formatLocation = location.pathname.replace('/', '');

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts(
        ProductEndPoints[formatLocation.toUpperCase() as keyof typeof ProductEndPoints],
      );

      setProducts(productsData || []);
    };

    fetchProducts();
  }, [formatLocation]);

  const handleSortChange = (sortValue: Sort) => {
    const sortedProducts = [...products].sort((a, b) => {
      switch (sortValue) {
        case Sort.HighToLow:
          return b.priceRegular - a.priceRegular;
        case Sort.LowToHigh:
          return a.priceRegular - b.priceRegular;
        default:
          return 0;
      }
    });

    setProducts(sortedProducts);
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
        <p className={`${s.counter} primary-text`}>{`${products?.length} models`}</p>

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

      <ProductList products={products} />
    </section>
  );
};

export default ProductsListPage;
