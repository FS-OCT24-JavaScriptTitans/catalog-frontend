import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CategoryCard.module.scss';

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  modelsCount: number;
  linkTo: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, title, modelsCount, linkTo }) => (
  <div>
    <Link to={linkTo}>
      <div className={styles.categoryCard}>
        <img
          src={imageSrc}
          alt={title}
        />
      </div>
    </Link>
    <div className={styles.info}>
      <p className={styles.title}>{title}</p>
      <p className={styles.models}>{modelsCount} models</p>
    </div>
  </div>
);

export default CategoryCard;
