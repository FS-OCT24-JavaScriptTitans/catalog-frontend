import axios from 'axios';

import { Product, ProductItem } from '@/types/Product.type';
import { Response } from '@/types/Resonse.type';
import { ProductEndPoints } from '@/constants/endPoints';
import { handleRequest } from '@/utils/handleRequest';
import { LANGUAGE } from '@/constants/language';

export const getProducts = async (product: ProductEndPoints, lang: LANGUAGE): Promise<Product[] | null> => {
  const endpoint = `/api/${product}_${lang === 'en' ? 'en' : 'ua'}.json`;
  const res: Response<Product[]> = await handleRequest(axios.get(endpoint));

  return res.data;
};

export const getProductItems = async (): Promise<ProductItem[] | null> => {
  const res: Response<ProductItem[]> = await handleRequest(axios.get(`/api/products.json`));

  return res.data;
};

export const getAllProducts = async (lang: LANGUAGE): Promise<Product[] | null> => {
  const res = await handleRequest(
    Promise.all([
      getProducts(ProductEndPoints.PHONES, lang),
      getProducts(ProductEndPoints.TABLETS, lang),
      getProducts(ProductEndPoints.ACCESSORIES, lang),
    ]),
  );

  return res.flatMap((products) => products || []);
};

export const getProduct = async (productId: string, lang: LANGUAGE): Promise<Product | null> => {
  const products = await getAllProducts(lang);

  return products?.find(({ id }) => id === productId) || null;
};
