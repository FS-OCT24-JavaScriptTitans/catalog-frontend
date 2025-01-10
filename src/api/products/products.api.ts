import axios from 'axios';

import { Product, ProductItem } from '@/types/Product.type';
import { handleRequest } from '@/utils/handleRequest';
import { Response } from '@/types/Resonse.type';
import { EndPoints } from '@/constants/endPoints';

export const getProducts = async (product: EndPoints): Promise<Product[] | null> => {
  const res: Response<Product[]> = await handleRequest(axios.get(`./public/api/${product}.json`));

  return res.data;
};

export const getProductItems = async (): Promise<ProductItem[] | null> => {
  const res: Response<ProductItem[]> = await handleRequest(axios.get(`./public/api/products.json`));

  return res.data;
};

export const getAllProducts = async (): Promise<Product[] | null> => {
  const res = await handleRequest(
    Promise.all([getProducts(EndPoints.PHONES), getProducts(EndPoints.TABLETS), getProducts(EndPoints.ACCESSORIES)]),
  );

  return res.flatMap((products) => products || []);
};

export const getProduct = async (productId: string): Promise<Product[] | null> => {
  const products = await getAllProducts();

  return products?.filter(({ id }) => id === productId) || null;
};
