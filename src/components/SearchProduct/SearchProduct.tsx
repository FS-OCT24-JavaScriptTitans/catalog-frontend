import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ProductList } from '../ProductList/ProductList';

import { Product } from '@/types/Product.type';
import { Container } from '@/UI/Container/Container';

interface Props {
  products: Product[];
}

export const SearchProduct: FC<Props> = ({ products }) => {
  const { t } = useTranslation();

  return (
    <Container
      title={t('searchTitle')}
      titlePB="32px"
      mt="32px"
    >
      <ProductList products={products} />
    </Container>
  );
};
