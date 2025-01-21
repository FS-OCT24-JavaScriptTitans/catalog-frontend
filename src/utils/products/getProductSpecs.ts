import { Product } from '@/types/Product.type';

export const getProductSpecs = ({ screen, resolution, processor, ram, camera, zoom, cell }: Product) => ({
  screen,
  resolution,
  processor,
  ram,
  camera,
  zoom,
  cell,
});
