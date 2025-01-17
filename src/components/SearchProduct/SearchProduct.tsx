import { FC } from 'react';

import { ProductList } from '../ProductList/ProductList';

import { Product } from '@/types/Product.type';
import { Container } from '@/UI/Container/Container';

interface Props {
  products: Product[];
}

export const SearchProduct: FC<Props> = ({ products }) => (
  <Container
    title="Search Products"
    titlePB="32px"
    mt="32px"
  >
    <ProductList products={products} />
  </Container>
);
