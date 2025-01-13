import axios from 'axios';

import { Product, ProductItem } from '@/types/Product.type';
import { Response } from '@/types/Resonse.type';
import { ProductEndPoints } from '@/constants/endPoints';
import { handleRequest } from '@/utils/handleRequest';

export const getProducts = async (product: ProductEndPoints): Promise<Product[] | null> => {
  const res: Response<Product[]> = await handleRequest(axios.get(`/api/${product}.json`));

  return res.data;
};

export const getProductItems = async (): Promise<ProductItem[] | null> => {
  const res: Response<ProductItem[]> = await handleRequest(axios.get(`/api/products.json`));

  return res.data;
};

export const getAllProducts = async (): Promise<Product[] | null> => {
  const res = await handleRequest(
    Promise.all([
      getProducts(ProductEndPoints.PHONES),
      getProducts(ProductEndPoints.TABLETS),
      getProducts(ProductEndPoints.ACCESSORIES),
    ]),
  );

  return res.flatMap((products) => products || []);
};

export const getProduct = async (productId: string): Promise<Product | null> => {
  const products = await getAllProducts();

  return products?.find(({ id }) => id === productId) || null;
};
