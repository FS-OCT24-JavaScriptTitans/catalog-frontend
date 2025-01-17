import { Product } from '@/types/Product.type';

export const sortNewModal = (products: Product[]): Product[] =>
  products.reduceRight<Product[]>((acc, product) => {
    if (product.priceDiscount < product.priceRegular) {
      acc.push(product);
    }

    return acc;
  }, []);

export const sortByHotPrice = (products: Product[]): Product[] =>
  [...products].sort((p1, p2) => p2.priceRegular - p2.priceDiscount - (p1.priceRegular - p1.priceDiscount));
