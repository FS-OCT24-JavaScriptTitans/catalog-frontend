import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import CategoryCard from '../CategoryCard/CategoryCard';

import styles from './CategorySection.module.scss';

import { getProducts } from '@/api/products/products.api';
import { ProductEndPoints } from '@/constants/endPoints';
import { Product } from '@/types/Product.type';
import { Container } from '@/UI/Container/Container';
import { PATH } from '@/constants/path';

interface Category {
  title: string;
  products: Product[];
  imageSrc: string;
  linkTo: string;
}

const CategorySection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchCategories = async () => {
      const phones = await getProducts(ProductEndPoints.PHONES);
      const tablets = await getProducts(ProductEndPoints.TABLETS);
      const accessories = await getProducts(ProductEndPoints.ACCESSORIES);

      setCategories([
        {
          title: t('home.mobilePhones'),
          products: phones || [],
          imageSrc: '/img/category/category-phones.png',
          linkTo: PATH.PHONES,
        },
        {
          title: t('home.tablets'),
          products: tablets || [],
          imageSrc: '/img/category/category-tablets.png',
          linkTo: PATH.TABLETS,
        },
        {
          title: t('home.accessories'),
          products: accessories || [],
          imageSrc: '/img/category/category-accessories.png',
          linkTo: PATH.ACCESSORIES,
        },
      ]);
    };

    fetchCategories();
  }, [t]);

  return (
    <Container title={t('home.shop')}>
      <div className={styles.categoryCards}>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            imageSrc={category.imageSrc}
            title={category.title}
            modelsCount={category.products.length}
            linkTo={category.linkTo}
          />
        ))}
      </div>
    </Container>
  );
};

export default CategorySection;
