import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import s from './ProductPage.module.scss';

import { Product } from '@/types/Product.type';
import { getProducts } from '@/api/products/products.api';
import { ProductCard } from '@/UI/ProductCard/ProductCard';
import Home from '@/assets/Home.svg?react';
import Arrow from '@/assets/Arrow.svg?react';
import { Dropdown } from '@/UI/Dropdown/Dropdown';
import { Option } from '@/types/Options.type';
import { ProductEndPoints } from '@/constants/endPoints';

const ProductsListPage: React.FC = () => {
  const location = useLocation();

  const [products, setProducts] = useState<Product[] | null>(null);
  const options: Option<string>[] = [
    {
      id: 1,
      value: 'value1',
      label: 'Option 1',
    },
    {
      id: 2,
      value: 'value2',
      label: 'Option 2',
    },
    {
      id: 3,
      value: 'value3',
      label: 'Option 3',
    },
  ];

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

      setProducts(productsData);
    };

    fetchProducts();
  }, [location.pathname]);

  return (
    <article className={s.page}>
      <div className={s.top_panel}>
        <div className={s.icons}>
          <Link to="#">
            <Home />
          </Link>
          <Arrow />
          <span>Phones</span>
        </div>
        <h1 className={s.title}>Mobile phones</h1>
        <p className={`${s.counter} primary-text`}>{`${products?.length} models`}</p>

        <div className={s.filter_block}>
          <div className={s.filter_item}>
            <label>Sort by</label>
            <div className={s.sort_dropdown}>
              <Dropdown options={options} />
            </div>
          </div>
          <div className={s.filter_item}>
            <label>Items on page</label>
            <div className={s.count_item_dropdown}>
              <Dropdown options={options} />
            </div>
          </div>
        </div>
      </div>

      <div className={s.wrapper}>
        {products?.map((product) => (
          <div
            className={s.product_card}
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProductsListPage;
