import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import s from './ProductsListPage.module.scss';

import { Product } from '@/types/Product.type';
import { getProducts } from '@/api/products/products.api';
import Home from '@/assets/Home.svg?react';
import Arrow from '@/assets/Arrow.svg?react';
import { Dropdown } from '@/UI/Dropdown/Dropdown';
import { Option } from '@/types/Options.type';
import { ProductEndPoints } from '@/constants/endPoints';
import { ProductsList } from '@/UI/ProductsList/ProductsList';

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

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let category;

      if (location.pathname.includes('phones')) {
        category = 'PHONES';
      } else if (location.pathname.includes('tablets')) {
        category = 'TABLETS';
      } else if (location.pathname.includes('accessories')) {
        category = 'ACCESSORIES';
      }

      const productsData = await getProducts(ProductEndPoints[category as keyof typeof ProductEndPoints]);

      setProducts(productsData || []);
    };

    fetchProducts();
  }, [location.pathname]);

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
          <span className={s.mini_title}>Phones</span>
        </div>
        <h1 className={s.title}>Mobile phones</h1>
        <p className={`${s.counter} primary-text`}>{`${products?.length} models`}</p>

        <div className={s.filter_block}>
          <div className={s.filter_item}>
            <label className={s.mini_title}>Sort by</label>
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

      <ProductsList products={products} />
    </section>
  );
};

export default ProductsListPage;
