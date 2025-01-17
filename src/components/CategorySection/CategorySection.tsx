import React, { useEffect, useState, useRef } from 'react';

import CategoryCard from '../CategoryCard/CategoryCard';

import styles from './CategorySection.module.scss';

import { getProducts } from '@/api/products/products.api';
import { ProductEndPoints } from '@/constants/endPoints';
import { Product } from '@/types/Product.type';

interface Category {
  title: string;
  products: Product[];
  imageSrc: string;
  linkTo: string;
}

const CategorySection: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const categoryCardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const phones = await getProducts(ProductEndPoints.PHONES);
      const tablets = await getProducts(ProductEndPoints.TABLETS);
      const accessories = await getProducts(ProductEndPoints.ACCESSORIES);

      setCategories([
        {
          title: 'Mobile phones',
          products: phones || [],
          imageSrc: '/img/category/category-phones.png',
          linkTo: '/phones',
        },
        {
          title: 'Tablets',
          products: tablets || [],
          imageSrc: '/img/category/category-tablets.png',
          linkTo: '/tablets',
        },
        {
          title: 'Accessories',
          products: accessories || [],
          imageSrc: '/img/category/category-accessories.png',
          linkTo: '/accessories',
        },
      ]);
    };

    fetchCategories();
  }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add(styles.visible);
  //       }
  //     });
  //   }, { threshold: 0.5 });

  //   const currentCategoryCardsRef = categoryCardsRef.current;

  //   if (currentCategoryCardsRef) {
  //     const categoryCards = currentCategoryCardsRef.children;

  //     if (categoryCards) {
  //       for (const card of categoryCards) {
  //         observer.observe(card);
  //       }
  //     }
  //   }

  //   return () => {
  //     if (currentCategoryCardsRef) {
  //       const categoryCards = currentCategoryCardsRef.children;

  //       if (categoryCards) {
  //         for (const card of categoryCards) {
  //           observer.unobserve(card);
  //         }
  //       }
  //     }
  //   };
  // }, [categories]);

  return (
    <>
      <h2 className={styles.heading}>Shop by category</h2>
      <div
        className={styles.categoryCards}
        ref={categoryCardsRef}
      >
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
    </>
  );
};

export default CategorySection;
