import { combineSomeFilter, filterByString } from './filter';

import { Product } from '@/types/Product.type';

const filterByName = (queryName: string) => filterByString<Product>(queryName, 'name');
const filterByColor = (queryName: string) => filterByString<Product>(queryName, 'color');
const filterByCapacity = (queryName: string) => filterByString<Product>(queryName, 'capacity');
const filterByCategory = (queryName: string) => filterByString<Product>(queryName, 'category');
const filterByRam = (queryName: string) => filterByString<Product>(queryName, 'ram');
const filterByCell = (queryName: string) => filterByString<Product>(queryName, 'cell');

const getfilterProducts = (products: Product[], query: string): Product[] => {
  const _query = query.trim().toLowerCase();

  if (_query.length < 3) {
    return products;
  }

  const combinedSomeFilter = combineSomeFilter(
    filterByName(_query),
    filterByColor(_query),
    filterByCapacity(_query),
    filterByCategory(_query),
    filterByRam(_query),
    filterByCell(_query),
  );

  return products.filter((product, index, array) => combinedSomeFilter(product, index, array));
};

export default getfilterProducts;
