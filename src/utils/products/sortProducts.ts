import { Sort } from '@/constants/sort';
import { Product } from '@/types/Product.type';

export const sortNewModal = (products: Product[]): Product[] =>
  [...products].reduceRight<Product[]>((acc, product) => {
    if (product.priceDiscount < product.priceRegular) {
      acc.push(product);
    }

    return acc;
  }, []);

export const sortByHotPrice = (products: Product[]): Product[] =>
  [...products].sort((p1, p2) => p2.priceRegular - p2.priceDiscount - (p1.priceRegular - p1.priceDiscount));

export const sortByPrice = (products: Product[], type: Sort): Product[] =>
  [...products].sort((a, b) =>
    type === Sort.HighToLow ? a.priceRegular - b.priceRegular : b.priceRegular - a.priceRegular,
  );

export const sortByPopularity = (products: Product[]) => [...products].sort(() => Math.random() - 0.5);

export const sortProducts = (products: Product[], type: Sort) => {
  switch (type) {
    case Sort.Popularity:
      return sortByPopularity(products);
    case Sort.HighToLow:
      return sortByPrice(products, type);
    case Sort.LowToHigh:
      return sortByPrice(products, type);
    default:
      return products;
  }
};
